/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './components/Home';
import LyricsScreen from './components/LyricsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyLyrics from './components/MyLyrics';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="mobieEffects" component={Home} />
        <Stack.Screen name="Letra" component={LyricsScreen} />
        <Stack.Screen name="Mis Letras" component={MyLyrics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
