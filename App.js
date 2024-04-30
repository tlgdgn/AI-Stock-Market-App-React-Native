import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { Image } from 'react-native'; // Import Image component

import HomeScreen from './components/HomeScreen';
import WatchlistScreen from './components/WatchlistScreen';
import ForexScreen from './components/ForexScreen';

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
            if (route.name === 'Home') {
              return (
                <Image
                  source={require('./homeicon.png')}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                  tintColor={color}
                />
              );
            } else if (route.name === 'Forex') {
              return (
                <Image
                  source={require('./forexicon.png')}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                  tintColor={color}
                />
              );
            }
            return null;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Forex" component={ForexScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
