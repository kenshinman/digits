import React, {createContext, useState, useEffect} from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';
import axios from 'axios';
import {useQuery} from 'react-query';

export const MainContext = createContext();

const MainContextProvider = ({children}) => {
  const playBackState = usePlaybackState();

  const [track, setTrack] = useState({
    id: 'unique track id',

    url: 'http://epsilon.shoutca.st:9139/',

    title: 'Digits 1024 Radio',
    artist: 'Digits Radio',
    album: 'Digits 1024 Radio',
    genre: 'New Data',

    artwork: require('../../assets/artwork.jpg'),
  });
  const [mainState, setMainState] = useState({});
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [playing, setPlaying] = useState(playBackState === 3);

  const {isLoading, error, data} = useQuery('shows', async () => {
    return axios.get(
      `https://digitsound.com.ng/?json=1&post_type=radio-show&order_by=title&order=ASC&count=-1`,
    );
  });

  const setUp = async () => {
    await TrackPlayer.setupPlayer();

    TrackPlayer.updateOptions({
      stopWithApp: true,
      dismissable: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      notificationCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
    });

    TrackPlayer.add([track]).then(function () {
      // The tracks were added
    });

    let state = await TrackPlayer.getState();
    setMainState(state);

    TrackPlayer.play();

    TrackPlayer.addEventListener('remote-pause', (event) => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-stop', (event) => {
      TrackPlayer.stop();
    });

    TrackPlayer.addEventListener('remote-play', (event) => {
      TrackPlayer.play();
    });
  };

  // useTrackPlayerEvents(['playback-metadata-received'], async (event) => {
  //   if (event) {
  //     const {title, artist} = event || {};
  //     setTrackTitle(title);
  //     setTrackArtist(artist);
  //     setTrack({...track, artist, title});
  //     // setTrackArtwork(artwork);
  //   }
  // });

  const play = async () => {
    TrackPlayer.play();
  };

  const pause = async () => {
    TrackPlayer.pause();
  };

  useEffect(() => {
    setUp();
    play();
  }, []);

  useEffect(() => {
    console.log({playBackState});
    const isplaying = playBackState === 3 || playBackState === 'playing';
    setPlaying(isplaying);
  }, [playBackState]);

  useEffect(() => {
    // TrackPlayer.destroy();
    TrackPlayer.add([track]);
  }, [track]);

  return (
    <MainContext.Provider
      value={{
        mainState,
        setMainState,
        play,
        pause,
        trackTitle,
        trackArtist,
        playing,
        data,
        isLoading,
        error,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
