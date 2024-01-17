import {  Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles, { lightTheme, darkTheme } from './styles/Styles.js';
import { useState } from 'react';

export default function App() {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const [theme, setTheme] = useState(darkTheme)

  return (
    <View style={theme.container}>
        <Text style={theme.header} >Personal information</Text>

        <Text style={theme.label} >First Name</Text>
        <TextInput style={theme.textInput} value={fname} onChangeText={setFname}/>

        <Text style={theme.label} >Last Name</Text>
        <TextInput style={theme.textInput} value={lname} onChangeText={setLname}/>

        <TouchableOpacity  onPress={()=> setTheme(lightTheme)}>
          <Text style={theme.button}>SUBMIT</Text>

          <Text>{lname} {fname}</Text>
        </TouchableOpacity> 
    </View>
  );
}

