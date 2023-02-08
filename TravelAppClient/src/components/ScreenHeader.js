import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScreenHeader = ({ mainTitle, secondTitle }) => {
  return (
    <View>
      <Text style={styles.maintitle}>{smainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  maintitle: {
    fontSize: sizes.title,
    fontWeight: "bold",
  },
  secondTitle: {
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
