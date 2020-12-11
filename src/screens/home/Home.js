import React, {useContext, useEffect} from 'react';
import {TouchableNativeFeedback, Text, StyleSheet, Image} from 'react-native';

import FullScreen from '../../components/FullScreen';
import PauseIcon from '../../components/PauseIcon';
import PlayIcon from '../../components/PlayIcon';
import {colors, globalStyle} from '../../constants';
import {MainContext} from '../../contexts/MainContext';

const Home = () => {
  const {mainState, play, pause, trackArtist, trackTitle, playing} = useContext(
    MainContext,
  );

  return (
    <FullScreen style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{width: 200, height: 200}}
      />
      <Text
        style={[
          globalStyle.centeredText,
          globalStyle.boldText,
          styles.nowPlaying,
        ]}>
        Now Playing
      </Text>
      <Text style={styles.title}>{trackTitle}</Text>

      <Text
        style={[
          globalStyle.centeredText,
          globalStyle.boldText,
          styles.nowPlaying,
        ]}>
        Artist
      </Text>
      <Text style={[styles.artist]}>{trackArtist}</Text>

      {!playing ? (
        <TouchableNativeFeedback onPress={play}>
          <PlayIcon size={100} color={colors.primary} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback onPress={pause}>
          <PauseIcon size={100} color={colors.primary} />
        </TouchableNativeFeedback>
      )}
    </FullScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  nowPlaying: {
    marginTop: 20,
    fontSize: 16,
  },
  artist: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.primary,
  },
});

export default Home;
