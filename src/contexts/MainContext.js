import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
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
    genre: 'Radio station',

    artwork: require('../../assets/artwork.jpg'),
  });
  const [mainState, setMainState] = useState({});
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [playing, setPlaying] = useState(false);

  const {isLoading, error, data} = useQuery('shows', async () => {
    return axios.get(
      `https://digitsound.com.ng/?json=1&post_type=radio-show&order_by=title&order=ASC&count=-1`,
    );
  });

  const setUp = async () => {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
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

    await TrackPlayer.add([track]);

    let state = await TrackPlayer.getState();
    setMainState(state);

    await TrackPlayer.play();

    await TrackPlayer.addEventListener('remote-pause', (event) => {
      TrackPlayer.pause();
    });

    await TrackPlayer.addEventListener('remote-stop', (event) => {
      TrackPlayer.stop();
    });

    await TrackPlayer.addEventListener('remote-play', (event) => {
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
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const init = async () => {
    await setUp();
    await play();
    console.log('hey playing...');
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log({playBackState});
    const isplaying = playBackState > 2 || playBackState === 'playing';
    setPlaying(isplaying);
  }, [playBackState]);

  useEffect(() => {
    const restart = async () => await TrackPlayer.add([track]);
    restart();
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
        playBackState,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
