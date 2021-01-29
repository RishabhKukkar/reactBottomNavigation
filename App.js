// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import 'react-native-gesture-handler';

import * as React from 'react';

import { Icon } from 'react-native-elements';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ProfileScreen from './src/ProfileScreen';
import SettingsScreen from './src/SettingsScreen';
import SplashScreen from './src/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const navOptionsHandler = (navigation) => ({
  header: null,
});
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
        navigationOptions={navOptionsHandler} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }} 
        navigationOptions={navOptionsHandler}/>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
        navigationOptions={navOptionsHandler} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
        navigationOptions={navOptionsHandler} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}
        navigationOptions={navOptionsHandler} />
    </Stack.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#42f44b',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              color={color}
              size={size}
            />
          ),
        }} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="settings"
              color={color}
              size={size}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer >
      <MainStack.Navigator
        initialRouteName="auth"
        screenOptions={{ headerShown: false }}>
        <MainStack.Screen
          name="auth"
          component={SplashScreen}
          options={{ title: 'Setting Page' }} 
          navigationOptions={navOptionsHandler}/>
        <MainStack.Screen
          name="home"
          component={TabStack}
          options={{ title: 'Details Page' }}
          navigationOptions={navOptionsHandler} />
      </MainStack.Navigator>
    </NavigationContainer>

  );
}
export default App;