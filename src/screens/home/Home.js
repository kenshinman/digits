import React, {useContext, useEffect} from 'react';
import {TouchableNativeFeedback, Text, StyleSheet, Image} from 'react-native';

import FullScreen from '../../components/FullScreen';
import PauseIcon from '../../components/PauseIcon';
import PlayIcon from '../../components/PlayIcon';
import {colors, globalStyle} from '../../constants';
import {MainContext} from '../../contexts/MainContext';

const Home = () => {
  const {mainState, play, pause, trackArtist, trackTitle} = useContext(
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
          styles.nowPlayining,
        ]}>
        Now Playing
      </Text>
      <Text style={styles.title}>{trackTitle}</Text>

      <Text
        style={[
          globalStyle.centeredText,
          globalStyle.boldText,
          styles.nowPlayining,
        ]}>
        Artist
      </Text>
      <Text>{trackArtist}</Text>
      <TouchableNativeFeedback onPress={play}>
        <PlayIcon size={100} color={colors.primary} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={pause}>
        <PauseIcon size={100} color={colors.primary} />
      </TouchableNativeFeedback>
    </FullScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  nowPlayining: {
    marginVertical: 10,
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.primary,
  },
});

export default Home;
