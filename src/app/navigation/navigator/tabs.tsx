/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {Home3, Profile2User} from 'iconsax-react-native';
import React, {useLayoutEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import theme from '@src/app/theme';
import HomeScreen from '@src/app/screens/Home/HomeScreen';
import ProfileScreen from '@src/app/screens/ProfileScreen/index';
import {GenericNavigationProps} from '../types';

const Tab = createBottomTabNavigator();
const Tabs = (): React.JSX.Element => {
  const {setOptions} = useNavigation<GenericNavigationProps>();
  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.SECONDARY,
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Home3
              variant={focused ? 'Bold' : 'Linear'}
              color={
                focused ? theme.colors.BUTTON_COLOR : theme.colors.SECONDARY
              }
            />
          ),
          tabBarLabel: ({focused}: {focused: boolean}) => (
            <Text
              style={{
                color: focused
                  ? theme.colors.BUTTON_COLOR
                  : theme.colors.SECONDARY,
                fontSize: theme.fontSizes.xxs,
              }}>
              Home
            </Text>
          ),
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Profile2User
              variant={focused ? 'Bold' : 'Linear'}
              color={
                focused ? theme.colors.BUTTON_COLOR : theme.colors.SECONDARY
              }
            />
          ),
          tabBarLabel: ({focused}: {focused: boolean}) => (
            <Text
              style={{
                color: focused
                  ? theme.colors.BUTTON_COLOR
                  : theme.colors.SECONDARY,
                fontSize: theme.fontSizes.xxs,
              }}>
              Profile
            </Text>
          ),
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
