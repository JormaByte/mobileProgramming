import { StatusBar, StyleSheet } from "react-native"
import { MD3LightTheme } from "react-native-paper"

export default Style = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight + 5
    },
    navview:{
        margin: 10
    },
    itemText:{
        fontWeight: 'bold',
        fontSize: 18
    },
    divider:{
        marginTop: 5,
        marginBottom: 5
    }

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'brown',
        surfaceVariant: 'pink'
    }
}