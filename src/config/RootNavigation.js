import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Dimensions} from 'react-native';

import Home from '../screens/home/Home';
import ShowsList from '../screens/shows/ShowsList';
import DrawerContent from '../components/DrawerContent';
import {MainContext} from '../contexts/MainContext';
import {colors} from '../constants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowsList"
        component={ShowsList}
        options={{title: 'Radio Shows'}}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerContent}
        initialRouteName="RootStack"
        drawerStyle={{
          width: Dimensions.get('window').width * 0.7,
        }}>
        <Stack.Screen name="RootStack" component={RootStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
