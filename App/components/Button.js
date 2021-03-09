import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 45,
    },
    textSecondary: {
        color: '#060606',
    },
    textAccentHighlighted: {
        color: '#f09a36',
    },
    button: {
        backgroundColor: '#333333',
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: 'flex-start',
        paddingLeft: 40,
    },
    buttonSecondary: {
        backgroundColor: '#a6a6a6',
    },
    buttonAccent: {
        backgroundColor: '#f09a36',
    },
    buttonAccentHighlighted: {
        backgroundColor: '#fff',
    }
});

export default ({ onPress, text, size, theme, operator }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === 'double') {
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === 'secondary') {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === 'accent') {
        {/*if (operator === null) {
            buttonStyles.push(styles.buttonAccent);
        } else {
            buttonStyles.push(styles.buttonAccentHighlighted);
        }*/}
        if (text === operator) {
            buttonStyles.push(styles.buttonAccentHighlighted);
            textStyles.push(styles.textAccentHighlighted);
        } else if (operator === '*' && text === 'x') {
            buttonStyles.push(styles.buttonAccentHighlighted);
            textStyles.push(styles.textAccentHighlighted);
        } else {
            buttonStyles.push(styles.buttonAccent);
        }

        //buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};