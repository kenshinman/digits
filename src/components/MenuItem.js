import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {colors} from '../constants';

const MenuItem = ({label, icon, path, navigation}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#f4f4f4' : undefined},
      ]}
      onPress={() => navigation.navigate(label)}>
      <View>{icon}</View>
      <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default MenuItem;
