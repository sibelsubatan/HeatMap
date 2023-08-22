import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MainStackScreen} from '@app/navigation/navigator/main';
const RootStack = createNativeStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};
