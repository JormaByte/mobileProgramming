import {  Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';
import { useState } from 'react';

export default function App() {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  return (
    <View style={Styles.container}>
        <Text style={Styles.header} >Personal information</Text>
        <Text style={Styles.label} >First Name</Text>
        <TextInput style={Styles.textInput} value={fname} onChangeText={setFname}/>
        <Text style={Styles.label} >Last Name</Text>
        <TextInput style={Styles.textInput} value={lname} onChangeText={setLname}/>
        <TouchableOpacity  onPress={()=>console.log("Submit" + {fname} + {lname})}>
          <Text style={Styles.button}>SUBMIT</Text>
          <Text>{lname} {fname}</Text>
        </TouchableOpacity> 
    </View>
  );
}

