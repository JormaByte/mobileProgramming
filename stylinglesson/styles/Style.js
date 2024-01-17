import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'react-native'

const Style = StyleSheet.create({
    container:{
      marginTop: 4,
      backgroundColor: 'bisque'
    },
    header:{
      fontSize: 34,
      backgroundColor: '#7c1414',
      borderWidth: 4,
      borderColor: 'red',
      borderRadius: 15,
      padding: 10,
      margin: 50
    }
})

export {Style}
  