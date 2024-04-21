import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { Image } from 'react-native'; // Import Image component

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
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'normal' },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ color }) => {
            // Customize icons based on route name
            if (route.name === 'Home') {
              return (
                <Image
                  source={require('./homeicon.png')} // Replace with your actual icon path
                  style={{ width: 24, height: 24 }} // Adjust size as needed
                  resizeMode="contain"
                  tintColor={color}
                />
              );
            } else if (route.name === 'Watchlist') {
              return (
                <Image
                  source={require('./savedicon.png')} // Replace with your actual icon path
                  style={{ width: 24, height: 24 }} // Adjust size as needed
                  resizeMode="contain"
                  tintColor={color}
                />
              );
            }
            return null; // Default case
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
