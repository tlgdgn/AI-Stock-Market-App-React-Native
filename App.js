import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import WatchlistScreen from './components/WatchlistScreen';
import ForexScreen from './components/ForexScreen';
import ArtificalScreen from './components/ArtificalScreen'
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainApp" component={MainAppTabs} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
};

function MainAppTabs() {
  return (
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
            else if (route.name === 'AI') {
              return (
                <Image
                  source={require('./aiicon.png')}
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
        <Tab.Screen name="AI" component={ArtificalScreen} />
      </Tab.Navigator>
  );
};

export default App;
