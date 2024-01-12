import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import logoImg from '../assets/band.png'

export default function(){
    return(
        <View>
            <Text>Amazing music services!</Text>
            <Image source={logoImg} />
            <Button title={"REGISTER!"}/>
        </View>
    )
}
