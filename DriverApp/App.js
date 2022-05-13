/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow 
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
