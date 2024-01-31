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
import Style from './styles/Style';

export default function App() {

  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  console.log(messages)

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <MessagesContext.Provider value={{messages, setMessages}}>
        <PaperProvider theme={MD3LightTheme}>
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
        <Tab.Screen name='user' 
        options={{ title: 'User', tabBarIcon: () => <Icon source= 'account-circle' size={24}/>}} component={UserView} />
        <Tab.Screen name='addmessage'
        options={{title: 'Add Message', tabBarIcon: () => <Icon source= 'message' size={24}/>}}  component={AddMessagesView} />
        <Tab.Screen name='messages' 
        options={{title: 'Messages', tabBarIcon: () => <Icon source= 'cart' size={24}/>}}  component={MessagesView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
