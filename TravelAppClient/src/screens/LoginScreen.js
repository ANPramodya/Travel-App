import React from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import { colors } from '../constants/theme';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import LoginForm from '../components/Login/LoginForm';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [-height/1.6,0]);
    return {
      transform: [{translateY: withTiming(interpolation, {duration:1000})}]
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [250,0]);
    return {
      opacity: withTiming(imagePosition.value, {duration:500}),
      transform: [{translateY: withTiming(interpolation, {duration:1000})}]
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [180,360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration:800}),
      transform: [{rotate: withTiming(interpolation+ 'deg', {duration:1000})}]
    }
  })

  const formAnimatedStyle = useAnimatedStyle(()=>{
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration:800})) : withTiming(0, {duration:300})
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
        <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
            <Text onPress={()=> imagePosition.value=1}>X</Text>
        </Animated.View>
        </Animated.View>

        <View style={styles.bottomContainer}>
          <Animated.View style={buttonsAnimatedStyle}>
            <Pressable style={styles.button} onPress={loginHandler}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
          </Animated.View>

          <Animated.View style={buttonsAnimatedStyle}>
            <Pressable style={styles.button} onPress={registerHandler}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </Pressable>
          </Animated.View>

            <LoginForm animation = {formAnimatedStyle} />
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
