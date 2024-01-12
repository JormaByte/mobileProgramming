import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import Logo from './components/Logo.js';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
      <Logo></Logo>
      <Logo></Logo>
      <Logo></Logo>
    </View>
  );
}

