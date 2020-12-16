import React, {useContext, useEffect} from 'react';
import {
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FacebookIcon from '../../components/Facebook';

import FullScreen from '../../components/FullScreen';
import InstagramIcon from '../../components/InstagramIcon';
import MenuIcon from '../../components/MenuIcon';
// import MenuIcon from '../../components/MenuIcon';
import PauseIcon from '../../components/PauseIcon';
import PlayIcon from '../../components/PlayIcon';
import TwitterIcon from '../../components/TwitterIcon';
import YoutubeIcon from '../../components/YoutubeIcon';
import {colors, globalStyle} from '../../constants';
import {MainContext} from '../../contexts/MainContext';

const Home = ({navigation}) => {
  const {play, pause, trackArtist, trackTitle, playing} = useContext(
    MainContext,
  );

  const doOpenUrl = (url) => {
    Linking.openURL(url);
  };

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
        <View style={{flex: 1}}>
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
          <View style={styles.iconsWrap}>
            <TouchableNativeFeedback
              onPress={() => doOpenUrl('https://facebook.com')}>
              <FacebookIcon size={38} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => doOpenUrl('https://twitter.com')}>
              <TwitterIcon size={38} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => doOpenUrl('https://youtube.com')}>
              <YoutubeIcon size={38} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => doOpenUrl('https://instagram.com')}>
              <InstagramIcon size={38} />
            </TouchableNativeFeedback>
          </View>
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
  iconsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
