import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: 'User Page', headerStyle: {backgroundColor: 'bisque'}}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}){

  const [userName, setUserName] = useState('')

  return(
    <View>
      <TextInput placeholder='WHAT IS YOUR NAME?' onChangeText={setUserName}></TextInput>

      <Button title='Go to the User page' onPress={() => navigation.navigate('User', {userName})} />
      </View>
  )
}

function User({navigation, route}){
  const username = route.params.userName
  return(
    <Text style={styles.text} onPress={() => navigation.navigate('Settings')}>
      The current user: {username}
    </Text>
  )
}

function Settings({navigation}){
  return(
    <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
      GO HOME
    </Text>
  )
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 24, alignItems: 'stretch', borderWidth: 2, borderRadius: 9, padding: 8
  }
});
