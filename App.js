/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigation from './config/appNavigation';

const App = () => {

  return (
    <AppNavigation/>
    // <View>
    //   <Text>HELLO WORLED</Text>
    // </View>
  );
};

export default App;
