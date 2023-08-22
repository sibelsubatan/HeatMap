import Splashscreen from '@app/components/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense, useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import BootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {navigationRef} from '@app/navigation/navigationUtils';
import {persistor, store} from '@app/store';
import {MainStackScreen} from '@app/navigation/navigator/main';
import auth from '@react-native-firebase/auth';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    auth().onAuthStateChanged(result => {});
    BootSplash.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <Provider store={store}>
        <PersistGate loading={<Splashscreen />} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
              <StatusBar barStyle={'light-content'} />
              <MainStackScreen />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
