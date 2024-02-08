import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessagesContext, UserContext } from './components/context';
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserView from './components/UserView';
import MessagesView from './components/MessagesView';
import AddMessagesView from './components/AddMessageView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style, { MyTheme } from './styles/Style';
import { Calendar } from 'react-native-calendars';

export default function App() {

  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  console.log(messages)

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <MessagesContext.Provider value={{messages, setMessages}}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </MessagesContext.Provider>
    </UserContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator()

function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Style.container}>

      <Tab.Screen name='addworkout'
        options={{title: 'Add workout', tabBarIcon: () => 
        <Icon source= 'plus' size={24}/>}}  component={AddMessagesView} />
       
        <Tab.Screen name='workouts' 
        options={{title: 'Workouts', tabBarIcon: () => 
        <Icon source= 'circle' size={24}/>}}  component={MessagesView} />

        <Tab.Screen name='settings' 
        options={{ title: 'Settings', tabBarIcon: () => 
        <Icon source= 'cog' size={24}/>}} component={UserView} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
