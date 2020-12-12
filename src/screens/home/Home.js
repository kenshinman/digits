import React, {useContext, useEffect} from 'react';
import {
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';

import FullScreen from '../../components/FullScreen';
import MenuIcon from '../../components/MenuIcon';
// import MenuIcon from '../../components/MenuIcon';
import PauseIcon from '../../components/PauseIcon';
import PlayIcon from '../../components/PlayIcon';
import {colors, globalStyle} from '../../constants';
import {MainContext} from '../../contexts/MainContext';

const Home = ({navigation}) => {
  const {play, pause, trackArtist, trackTitle, playing} = useContext(
    MainContext,
  );

  return (
    <ImageBackground
      style={styles.imgBg}
      source={require('../../../assets/bg-min.jpg')}>
      <FullScreen style={styles.container}>
        <View style={styles.header}>
          <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
            <MenuIcon color={colors.primary} size={28} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.content}>
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
        </View>
      </FullScreen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'rgba(104,4,4,0.4)',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgBg: {
    flex: 1,
  },
  nowPlaying: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
  artist: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.primary,
  },
});

export default Home;
