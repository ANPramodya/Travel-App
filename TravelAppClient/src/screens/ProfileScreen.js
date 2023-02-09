import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Location from "../components/Profile/Location";
import ProfileAboutMe from "../components/Profile/ProfileAboutMe";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfilePhotos from "../components/Profile/ProfilePhotos";
import ProfileStatus from "../components/Profile/ProfileStatus";
import { colors } from '../constants/theme';


const ProfileScreen = () => {
  return (
    <ScrollView style={styles.Conatainer}>
      <StatusBar barStyle={'light-content'}/>
        <ProfileHeader/>
        <ProfileStatus/>
        <ProfileAboutMe/>
        <Location/>
        <ProfilePhotos/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Conatainer:{
    backgroundColor: colors.white,
  }
})

export default ProfileScreen;
