import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import useSWR from 'swr';

export const MainContext = createContext();

const MainContextProvider = ({children}) => {
  const playBackState = usePlaybackState();

  const [track, setTrack] = useState({
    id: 'unique track id',
    url: 'https://digits1024radio1.radioca.st/stream',
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

  const path = `https://digitsound.com.ng/?json=1&post_type=radio-show&order_by=title&order=ASC&count=-1`;
  const fetcher = (url) =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => console.log(error));

  const {data, error} = useSWR(path, fetcher);

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

    await TrackPlayer.add([track]);

    let state = await TrackPlayer.getState();
    setMainState(state);

    await TrackPlayer.play();

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

  if (Platform.OS === 'android') {
    useTrackPlayerEvents(['playback-metadata-received'], async (event) => {
      if (event) {
        const {title, artist} = event || {};
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrack({...track, artist, title});
        // setTrackArtwork(artwork);
      }
    });
  }

  const play = async () => {
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const init = async () => {
    await setUp();
    await play();
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
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
        isLoading: !data && !error,
        error,
        playBackState,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
