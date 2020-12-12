import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../constants';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <Text>Content here 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  image: {
    width: 140,
    height: 140,
  },
});

export default DrawerContent;
