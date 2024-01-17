import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'react-native'

const Style = StyleSheet.create({
    container:{
      marginTop: Constants.StatusBarHeight,
      backgroundColor: 'orange',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      rowGap: 3
    },
    label: {
      backgroundColor: 'yellow'
    },
   
    
})

export {Style}
  