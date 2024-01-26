import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10,
        marginTop: 30
    },
    myLabelColor: '#bd1212',
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10
    },
    label:{
        fontSize: 22
    },
    important:{
        color: 'red'
    },
    modalContents:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "yellow"
    },
    modalCenterView:{
        width:'80%',
        height:'50%', 
        backgroundColor:'#e8b202', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
    

});
  



