import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import MainContainer from './screens/navigation/MainContainer';

export default function App() {
  return (
  <MainContainer></MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});