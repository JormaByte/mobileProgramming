import { useContext, useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { MessagesContext, UserContext } from './context'
import { View } from 'react-native'
import Style from '../styles/Style'

export default function AddMessagesView(){

    const {username} = useContext(UserContext)
    const {setMessages} = useContext(MessagesContext)
    const [msg, setMsg] = useState('')

    const header = username === '' ? 'Set user for sending messages': 'Add message'

    function addMessage(){

        const date = new Date()
      
        // let text = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()

        setMessages(prev => [...prev, {username, msg, date}])
        setMsg('')
    }

    return(
        <View style={Style.navview}>
            <Text variant='headlineLarge'>{header}</Text>
            { username !== '' &&
                <View>
                    <TextInput label={'Message'} value={msg} onChangeText={setMsg} />
                    <Button mode='outlined' onPress={addMessage}></Button>
                </View>
            }
        </View>
   
    )
}