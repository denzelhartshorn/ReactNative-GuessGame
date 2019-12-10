import React, {useState} from "react";
import { View, Text, Stylesheet } from 'react-native'

const generateRandomBetween = (min, max, exclude) => {
    min= Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.random() * (max-min) +min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    useState [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
};

const styles = StyleSheet.create({});

export defualt GameScreen;