import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { colors } from "../constants/theme";
// import MainHeader from "../components/MainHeader";
// import ScreenHeader from "../components/ScreenHeader";
// import TopPlacesCarousel from "../components/TopPlacesCarousel";
// import SectionHeader from "../components/SectionHeader";
// import TripsList from "../components/TripsList";
// import { PLACES, TOP_PLACES } from "../data";

const HomeScreen = () => {
  // return (
  //   <View style={styles.container}>
  //     <MainHeader title={"Travel App"} />
  //     <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
  //     <ScrollView showsVerticalScrollIndicator={false}>
  //       <TopPlacesCarousel list={TOP_PLACES} />
  //       <SectionHeader
  //         title="Popular Trips"
  //         buttonTitle="See All"
  //         OnPress={() => {}}
  //       />
  //       <TripsList list={PLACES} />
  //     </ScrollView>

  //   </View>
  // );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.light,
//   },
// });

export default HomeScreen;
