import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import styles from '../styles/style'

let board = []
const NUM_OF_DICES = 5
const NUM_OF_THROWS = 5
const WINNING_POINTS = 23

export const Gameboard = () => {

    const [numOfThrowsLeft, setNumOfThrowsLeft] = useState(NUM_OF_THROWS)
    const [numOfWins, setNumOfWins] = useState(0)
    const [sum, setSum] = useState(0)
    const [status, setStatus] = useState('')
    const [highScore, setHighScore] = useState(0)

/* throwDices() function for throwing dices and setting values of state variables
according to progress of the game. */
    const ThrowDices = () => {
        let sum = 0
        for (let i = 0; i < NUM_OF_DICES; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            board[i] = 'dice-' + randomNumber
            sum += randomNumber
        }
        setNumOfThrowsLeft(numOfThrowsLeft - 1)
        setSum(sum)
        checkWinner()
        checkHighScore()
        if (numOfThrowsLeft === NUM_OF_THROWS) {
            setStatus('The game has not started yet')
        }
        if (numOfThrowsLeft < 0) {
            setNumOfThrowsLeft(NUM_OF_THROWS - 1)
            setNumOfWins(0)
        }
    }

/*
    Added a high score function that checks if the number of wins is bigger
    than the previous high score. If so; numOfWins is saved to highScore state variable.
*/
    const checkHighScore = () => {

        if (numOfThrowsLeft === 0 && numOfWins > highScore ){
            setHighScore(numOfWins)
            setStatus('NEW HIGH SCORE')
        }
    }

/* checkWinner() function for checking the winner and updating values of state
variables according to status of the game. */
    const checkWinner = () => {
        if (sum >= WINNING_POINTS && numOfThrowsLeft > 0) {
            setNumOfWins(numOfWins + 1)
            setStatus('Congratulations, you won!')
        }
        else if (sum >= WINNING_POINTS && numOfThrowsLeft === 0) {
            setNumOfWins(numOfWins + 1)
            setStatus('GAME OVER - Congratulations, you won!')
        }
        else if (numOfThrowsLeft === 0) {
            setStatus('GAME OVER')
        } 

        else {
            setStatus('Keep on throwing, cowboy!')
        }
    }

    const row = []
    for (let i = 0; i < NUM_OF_DICES; i++) {
        row.push(
            <MaterialCommunityIcons
            name={board[i]}
            key={'row' + 1}
            size={50}
            color={'steelblue'}>
            </MaterialCommunityIcons>
        )
    }

/* handling the change of nbrOfThrowsLeft value that is state variable. The hook will be called if value of
    nbrOfThrowsLeft change. */
/*     useEffect(() => {
        checkWinner()
        if (numOfThrowsLeft === NUM_OF_THROWS) {
            setStatus('The game has not started yet')
        }
        if (numOfThrowsLeft < 0) {
            setNumOfThrowsLeft(NUM_OF_THROWS - 1)
            setNumOfWins(0)
        }
    }, [numOfThrowsLeft]) */

return(
    <View style={styles.gameboard}>
        <View style={styles.flex}>{row}</View>
        <Text style={styles.highscore}>HIGH SCORE: {highScore}</Text>
        <Text style={styles.gameinfo}>Sum: {sum}</Text>
        <Text style={styles.gameinfo}>Throws left: {numOfThrowsLeft}</Text>
        <Text style={styles.gameinfo}>Number of wins: {numOfWins}</Text>
        <Text style={styles.gameinfo}>{status}</Text>
        <Pressable style= {styles.button}
        onPress={() => ThrowDices()}>
            <Text style={styles.buttonText}>
                Throw Dices!
            </Text>
        </Pressable>
        
    </View>
)
}

