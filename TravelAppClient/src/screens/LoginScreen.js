import React from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import { colors } from '../constants/theme';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import LoginForm from '../components/Login/LoginForm';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [-height/2,0])
    return {
      transform: [{translateY: withTiming(interpolation, {duration:1000})}]
    }
  })

  const loginHandler = () => {
  imagePosition.value = 0
  }
  const registerHandler = () => {
  imagePosition.value = 0
  }

  return (
    <View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}> 

        <Svg height={height+100} width={width}>
          <ClipPath id='clipPathId'>
            <Ellipse cx={width/2} rx={height} ry={height+100}/>
          </ClipPath>
            <Image href={require('../../assets/images/bg-image.jpg')} width={width+100} height={height+100} preserveAspectRatio="xMidYMid slice" clipPath='url(#clipPathId)' />
        </Svg>
        <View style={styles.closeButtonContainer}>
            <Text>X</Text>
        </View>
        </Animated.View>

        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={loginHandler}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={registerHandler}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </Pressable>

            {/* <LoginForm/> */}
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
    borderRadius: 20,
    top: -20,
  },
});

export default LoginScreen;
