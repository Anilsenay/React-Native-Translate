import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

const LoginButton = (props) => {

    const style = (props.reverse === false) ? [styles.container, styles.no_reverse, props.style] 
    : [styles.container, styles.reverse, props.style]

    const textStyle = (props.reverse === false) ? styles.text : styles.text_reverse

    return (
        <TouchableOpacity style={style} onPress={() => {props.onClick()}}>
            <View style={styles.textView}>
                <Text style={textStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 60,
        borderWidth: 1.3,
        borderRadius: 35,
    },
    no_reverse: {
        backgroundColor: 'white',
        borderColor: '#A56FF8',
    },
    reverse: {
        backgroundColor: '#A56FF8',
        borderColor: 'white',
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#A56FF8',
        fontSize: 16,
    },
    text_reverse: {
        color: 'white',
        fontSize: 16,
    }
});


export default LoginButton
