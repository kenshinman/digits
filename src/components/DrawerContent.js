import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../constants';
import HomeIcon from './HomeIcon';
import ListIcon from './ListIcon';
import MenuItem from './MenuItem';

const routes = [
  {name: 'Home', icon: <HomeIcon size={24} color={colors.primary} />},
  {name: 'ShowsList', icon: <ListIcon size={24} color={colors.primary} />},
];

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={routes}
          keyExtractor={(item, index) => `${item.label}_${index}`}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
                width: '90%',
                marginHorizontal: 10,
                opacity: 0.5,
              }}
            />
          )}
          renderItem={({item}) => (
            <MenuItem
              label={item.name}
              path={item.label}
              icon={item.icon}
              navigation={navigation}
            />
          )}
        />
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
    flex: 1,
  },
  bottom: {
    flex: 3,
  },
});

export default DrawerContent;
