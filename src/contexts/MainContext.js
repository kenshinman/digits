import React, {createContext, useState, useEffect} from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

export const MainContext = createContext();

var track = {
  id: 'unique track id', // Must be a string, required

  url: 'http://epsilon.shoutca.st:9139/', // Load media from the file system

  title: 'Digits 1024 Radio',
  artist: 'Digits Radio',
  album: new Date().toDateString(),
  genre: 'New Data',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339

  artwork:
    'https://digitsound.com.ng/wp-content/uploads/2015/05/Great-Examples-of-Great-Sound-Design2.jpg', // Load artwork from the network
};

const MainContextProvider = ({children}) => {
  const [mainState, setMainState] = useState({});
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents(['playback-metadata-received'], async (event) => {
    if (event) {
      const {title, artist} = event || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      // setTrackArtwork(artwork);
    }
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

    TrackPlayer.add([track]).then(function () {
      // The tracks were added
    });

    let state = await TrackPlayer.getState();
    setMainState(state);
    console.log({state});

    TrackPlayer.play();
  };

  const play = async () => {
    TrackPlayer.play();
  };

  const pause = async () => {
    TrackPlayer.pause();
  };

  useEffect(() => {
    setUp();
  }, []);
  return (
    <MainContext.Provider
      value={{mainState, setMainState, play, pause, trackTitle, trackArtist}}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
