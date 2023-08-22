import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
const MainStack = createNativeStackNavigator();
import Login from '@src/app/screens/Login/Login';
import HomeScreen from '@src/app/screens/Home/HomeScreen';
import Loading from '@src/app/components/Loading/Loading';
import Tabs from './tabs';
import ProfileScreen from '@src/app/screens/ProfileScreen';

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        statusBarTranslucent: true,
        gestureEnabled: false,
      }}>
      <MainStack.Screen
        name="Loading"
        component={Loading}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="Tabs" component={Tabs} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
