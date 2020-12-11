import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import TrackPlayer from 'react-native-track-player';
import RootNavigation from './src/config/RootNavigation';
import MainContextProvider from './src/contexts/MainContext';
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

const App = () => {
  return (
    <MainContextProvider>
      <StatusBar barStyle="light-content" backgroundColor="#da2f34" />
      <RootNavigation />
    </MainContextProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default App;
