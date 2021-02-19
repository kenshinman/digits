import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import DrawerContent from '../components/DrawerContent';
import {colors} from '../constants';
import Home from '../screens/home/Home';
import ShowsDetail from '../screens/shows/ShowsDetail';
import ShowsList from '../screens/shows/ShowsList';

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
      <Stack.Screen
        name="ShowsDetail"
        component={ShowsDetail}
        options={{title: 'Show Detail'}}
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
