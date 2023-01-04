
import React, { useEffect } from 'react';
import AppNavigation from './config/appNavigation';
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();

    }, 1000)
  }, [])
  return (
    // <></>
    <AppNavigation />
    // <View>
    //   <Text>HELLO WORLED</Text>
    // </View>
  );
};

export default App;
