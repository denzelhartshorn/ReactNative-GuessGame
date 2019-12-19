import React from "react"
import { View, Text, Stylesheet, TouchableOpacity } from 'react-native';

const MainButton = props => {
    return<TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({});

export defualt MainButton;
