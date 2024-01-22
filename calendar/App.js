import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Calendar} from 'react-native-calendars';

export default function App() {

  const [date, setDate] = useState()
  const [visible, setVisible] = useState(true)

  function dateSelected(day) {
    setVisible(false)
    setDate(day)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Modal visible={visible} transparent={true}>
        <Calendar
        onDayPress={dateSelected}/>
        
        </Modal>
        <Pressable onPress={() => setVisible(True)}>
          <Text style={{fontSize: 24}}>
            {date ? date.dateString : 'Select date'}
          </Text>
          </Pressable>
      
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
  },
});
