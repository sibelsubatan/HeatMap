import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useEffect, useLayoutEffect} from 'react';
import {Pressable, Text, View, BackHandler} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import theme from '@app/theme';
import {useAppDispatch, useAppSelector} from '@app/hooks/useStoreDispatch';
import {logout} from '@app/store/user';
import {LogoutCurve} from 'iconsax-react-native';
import * as styles from './styles';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(state => state.user);

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const renderHeaderRight = useCallback(() => {
    return (
      <View style={[theme.marginRight10]}>
        <Pressable
          onPress={() => {
            dispatch(logout());
          }}>
          <LogoutCurve color={theme.colors.BLACK} size={26} />
        </Pressable>
      </View>
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: 'Profil',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: theme.colors.WHITE,
      },
      headerRight: renderHeaderRight,
    });
  }, [navigation, dispatch, renderHeaderRight]);

  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>E-Mail</Text>
        <View style={styles.textView}>
          <Text>{userInfo?.email || '---'}</Text>
        </View>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>UID</Text>
        <View style={styles.textView}>
          <Text>{userInfo?.uid || '---'}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
