import { useState, useContext } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { UserContext } from './context'
import { Alert, View } from 'react-native'
import Style from '../styles/Style'


export default function UserView(){

    const [name, setName] = useState('')
    const {username, setUsername} = useContext(UserContext)

    let header = username === '' ? 'Set user' : 'Welcome ' + username
    //Create textinput and button to change the username in the context when pressed

    function changeUser(){
        setUsername(name)
        
        Alert.alert('Unit changed to ' + name)
        setName('')
    }
    
    return(
        <View style={Style.navview}>
            <Text variant='headlineLarge'>{header}</Text>

            <TextInput label={'Name'} value={name} onChangeText={setName}/> 

            <Button mode='outlined' onPress={changeUser}>Change User</Button>

        </View>
    )
}