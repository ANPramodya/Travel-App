import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { colors } from '../../constants/theme';
import Animated from 'react-native-reanimated';


const LoginForm = (props) => {
  return (
    <Animated.View style={[styles.formInputContainer, props.animation]}>
                <TextInput placeholder='Email' placeholderTextColor='black' style={styles.textInput}/>
                <TextInput placeholder='Full Name' placeholderTextColor='black' style={styles.textInput}/>
                <TextInput placeholder='Password' placeholderTextColor='black' style={styles.textInput}/>
                <View style={styles.formButton}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </View>
            </Animated.View>
  );
};

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        marginHorizontal:20,
        marginVertical: 10,
        borderRadius: 10,
        paddingLeft: 10
      },
      formButton: {
        backgroundColor: colors.buttonDark,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginHorizontal: 50,
        marginVertical: 10,
    
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
      },
      formInputContainer: {
        marginBottom: 80,
        ...StyleSheet.absoluteFill,
        zIndex: -1,
        justifyContent: 'center'
      },
});

export default LoginForm;
