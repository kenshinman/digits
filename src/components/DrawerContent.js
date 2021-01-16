import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../constants';

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View>
        <Text>Content here 1</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ShowsList')}>
          <Text>Shows</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 140,
    height: 140,
  },
  top: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
  },
});

export default DrawerContent;
