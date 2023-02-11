import React from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors } from '../constants/theme';
import Svg, {Image} from 'react-native-svg';
import LoginForm from '../components/Login/LoginForm';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}> 

        <Svg height={height/2} width={width}>
            <Image href={require('../../assets/images/bg-image.jpg')} width={width} height={height} preserveAspectRatio="xMidYMid slice" />
        </Svg>
        <View style={styles.closeButtonContainer}>
            <Text>X</Text>
        </View>
        </View>

        <View style={styles.bottomContainer}>
            {/* <View style={styles.button}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </View> */}

            <LoginForm/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: colors.buttonDark,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 50,
    marginVertical: 10,

  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white
  },
  bottomContainer:{
    justifyContent: 'center',
    height: height/3
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width:0,
        height:5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation:1,
    backgroundColor: 'white',
    borderRadius: 20
  },
});

export default LoginScreen;
