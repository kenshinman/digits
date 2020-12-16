import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../constants';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View>
        <Text>Content here 1</Text>
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
