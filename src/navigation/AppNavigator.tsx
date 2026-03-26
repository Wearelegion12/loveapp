// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { User } from 'firebase/auth';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

type AppNavigatorProps = {
  user: User | null;
};

export default function AppNavigator({ user }: AppNavigatorProps) {
  return (
    <Stack.Navigator>
      {!user ? (
        // Auth screens - no user logged in
        <>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ headerShown: false }}
          />
        </>
      ) : (
        // App screens - user is logged in
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}