import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
  Alert,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import RNProgressHud from 'progress-hud';
import theme from '@app/theme';
import * as styles from '@src/app/screens/Login/LoginStyle';
import {useAppDispatch, useAppSelector} from '@app/hooks/useStoreDispatch';
import {setPassword, setEmail, signInAsync} from '@app/store/user';
import VLoginInput from '@src/app/components/VLoginInput';
import {Eye, EyeSlash, Lock, Map1, User} from 'iconsax-react-native';

const Login: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const {eMail, password} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signIn = useCallback(() => {
    if (eMail && password) {
      dispatch(signInAsync());
      return;
    }
    RNProgressHud.showErrorWithStatus(
      'E mail veya şifrenizi giriniz.',
      RNProgressHud.ProgressHUDMaskType.Clear as any,
    );
    RNProgressHud.dismissWithDelay(1.5);
  }, [dispatch, password, eMail]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inputContain}>
          <View style={styles.iconView}>
            <Map1 color={theme.colors.DARK} size={100} variant={'Bold'} />
          </View>
          <VLoginInput
            placeholder={'E-Mail'}
            icon={<User size="24" color={theme.colors.DARK} variant="Bold" />}
            onChangeText={(val: any) => {
              dispatch(setEmail(val));
            }}
            secureTextEntry={false}
            leftIconVisible={false}
          />

          <VLoginInput
            placeholder={'Şifre'}
            icon={<Lock size="24" color={theme.colors.DARK} variant="Bold" />}
            onChangeText={(val: any) => {
              dispatch(setPassword(val));
            }}
            secureTextEntry={secureTextEntry}
            leftIconVisible={true}
            onSecureTextEntry={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            leftIcon={
              secureTextEntry ? (
                <EyeSlash color={theme.colors.BLACK} size="24" />
              ) : (
                <Eye color={theme.colors.BLACK} size="24" />
              )
            }
          />

          <TouchableOpacity onPress={() => signIn()} style={styles.buttonView}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
