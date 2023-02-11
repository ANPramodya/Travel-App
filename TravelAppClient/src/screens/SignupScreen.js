import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';


const SignupScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Signup Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default SignupScreen;