import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from '../constants/theme';

const ProfileScreen = () => {
  return (
    <View style={styles.Conatainer}>
      <Text>Profile Screen</Text>
      <Text>Profile Screen</Text>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Conatainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default ProfileScreen;
