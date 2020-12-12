import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import {View, Text, Dimensions} from 'react-native';
import DrawerContent from '../components/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
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
