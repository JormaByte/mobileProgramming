import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image, Pressable } from 'react-native';
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
        style={styles.TextInput}
        placeholder='How long was your workout? (in minutes)'
        keyboardType='number-pad'
        onChangeText={setWorkoutTime}
        value={workoutTime}
      />

       <TextInput
        style={styles.TextInput}
        placeholder='What did you do? (Jogging/Swimming/Tennis etc..)'
        keyboardType='default'
        onChangeText={setWorkoutType}
        value={workoutType}
      />

       <TextInput
        style={styles.TextInput}
        placeholder='When did you work out? (dd.mm.yy)'
        keyboardType='number-pad'
        onChangeText={setDate}
        value={date}
      />

      <Text class={'stats'}>Your workout stats: {workoutTime} | {workoutType} | {date}</Text>

      
      <Button title={'Submit your workout'} onPress={console.log("works")} //onPress={setWorkout}
      />
       <TouchableOpacity  onPress={()=> setTheme(lightTheme)}>
          <Text style={theme.button}>SUBMIT</Text>

          <Text>{lname} {fname}</Text>
        </TouchableOpacity> 

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
