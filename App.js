// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';

import HomeScreen from './components/HomeScreen';
import WatchlistScreen from './components/WatchlistScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: 'black' },
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ color }) => {
            // You can customize icons here if needed
            return null;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
