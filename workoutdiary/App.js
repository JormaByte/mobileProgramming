import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import logo from './assets/jyp.png'

export default function App() {

  const [workoutType, setWorkoutType] = useState("")
  const [workoutTime, setWorkoutTime] = useState("")
  const [date, setDate] = useState(0)
  //const [workout, setWorkout] = useState=([])


  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={logo} />

      <Text>Welcome to Jormas workout diary!</Text>

      <TextInput
        style={{borderWidth: 1, padding: 10, width: '85 %'}}
        placeholder='How long was your workout? (in minutes)'
        keyboardType='number-pad'
        onChangeText={setWorkoutTime}
        value={workoutTime}
      />

       <TextInput
        style={{borderWidth: 1, padding: 10, width: '85 %'}}
        placeholder='What did you do? (Jogging/Swimming/Tennis etc..)'
        keyboardType='default'
        onChangeText={setWorkoutType}
        value={workoutType}
      />

       <TextInput
        style={{borderWidth: 1, padding: 10, width: '85 %'}}
        placeholder='When did you work out? (dd.mm.yy)'
        keyboardType='number-pad'
        onChangeText={setDate}
        value={date}
      />

      <Text class={'stats'}>Your workout stats: {workoutTime} | {workoutType} | {date}</Text>

      
      <Button title={'Submit your workout'} //onPress={setWorkout}
      />

      <Text>Your previous workouts:</Text>
      
        <Text>
          
        </Text>
        <Image source={logo}></Image>
      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
