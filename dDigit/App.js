/*
This file is the default screen of the project -  the root file
that loads upon running "npx expo start" 
*/
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';



export default function App() {
  return (
    <SafeAreaProvider>
      <View>

        <SignUp/>
      </View>
    </SafeAreaProvider>
  );
}