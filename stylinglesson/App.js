import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { Style } from './styles/Style'


export default function App() {


  const h = Constants.StatusBarHeight

  return (
   <View style={{marginTop: h, backgroundColor: 'yellow'}}>
    <Text>Moro</Text>
    <Text>Moro</Text>
    <Text style={Style.header}>Moro</Text>
    <Text>Moro</Text>
    <Text>Moro</Text>
    <Text>Moro</Text>
   </View>
  )};


  
