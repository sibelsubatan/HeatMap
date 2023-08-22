import React, {type FC, useEffect, useLayoutEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import RNProgressHud from 'progress-hud';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import * as styles from './styles';
import {useAppSelector} from '@src/app/hooks/useStoreDispatch';
import {GenericNavigationProps} from '@src/app/navigation/types';

const Loading: FC = () => {
  const {userInfo} = useAppSelector(state => state.user);
  const {setOptions, navigate} = useNavigation<GenericNavigationProps>();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, [setOptions]);
  useEffect(() => {
    RNProgressHud.dismiss();
    const timer = setTimeout(() => {
      if (isFocused) {
        if (userInfo) {
          navigate('Tabs', {
            timer,
          });
        }
        if (userInfo === undefined || userInfo === null) {
          navigate('Login', {
            gestureEnabled: false,
          });
        }
      }
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [userInfo, navigate, isFocused]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Loading;
