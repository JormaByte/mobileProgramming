import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight+5,
        backgroundColor: '#fbe485',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        margin: 5,
        padding: 10,
        
    },

    header:{
        fontSize: 20,
        color: '#724d0c',
        fontWeight: 'bold'
    },

    label:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        color: '#724d0c'
        
    },

    textInput:{
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },

    button: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#ce9212',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
  



