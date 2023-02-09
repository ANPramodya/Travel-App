import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { colors } from '../constants/theme';


const ProfileScreen = () => {
  return (
    <ScrollView style={styles.Conatainer}>
      <StatusBar barStyle={'light-content'}/>
        <ProfileHeader/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Conatainer:{
    backgroundColor: colors.white,
  }
})

export default ProfileScreen;
