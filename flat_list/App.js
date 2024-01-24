import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import Styles from './styles/Styles.js';


import { MaterialIcons } from '@expo/vector-icons';

const icons = [
  'ac-unit', 'adb',  'agriculture', 'alarm', 'animation', 'audiotrack',
  'auto-stories', 'beach-access', 'cake', 'camera', 'devices', 'face'
];

export default function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  
  //You may get random array index like this:
  //let ind = Math.floor(Math.random() * icons.length);
  function addMessage(){

    let ind = Math.floor(Math.random() * icons.length);
    let icon = icons[ind]

    setMessages([...messages, {text: text, icon: icon}])
    setText("")

  }
  return (
      <View style={Styles.container}>

        <TextInput value={text} onChangeText={setText}></TextInput>

        <Button title='Add' onPress={addMessage} />
       
       <FlatList 
       data={messages} 
       renderItem={({item}) => <MessageItem msg={item}/>}
      
       />

       
      </View>
  );
}

function MessageItem(msg){


  return(

    <View>
      <Text> {msg.text}</Text>
      <MaterialIcons name={msg.icon} size={30} />
    </View>

  )
}