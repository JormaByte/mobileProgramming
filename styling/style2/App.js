import {  Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
      <View style={Styles.switchRow}>
        <Text>Login/Register</Text>
        <Switch style={Styles.switch}/>
      </View>
      <FormInput label={'Email'}/>
      <FormInput label={'Password'} isPw={true}/>
      <TouchableOpacity>
        <Text style={Styles.button}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

function FormInput({label, isPw}){
  return(
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput secureTextEntry={isPw} style={Styles.textInput}/>
    </View>
  )
}
