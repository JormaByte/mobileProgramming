import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
// const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='User' component={User} />
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}){

  const [userName, setUserName] = useState('')

  return(
    <View>
      <TextInput style={styles.text} placeholder='WHAT IS YOUR NAME?' value={userName} onChangeText={setUserName} />

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


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"

        onPress={() => props.navigation.navigate('Help')}
      />
    </DrawerContentScrollView>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'bisque'
  },
  text:{
    fontSize: 24, alignItems: 'stretch', borderWidth: 2, borderRadius: 9, padding: 8
  }
});
