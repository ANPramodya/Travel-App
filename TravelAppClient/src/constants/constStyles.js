import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const cs=StyleSheet.create({
    button:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.midgradient,
      borderRadius: 100,
    },
    center:{
      alignItems: "center",
      justifyContent: "center",
    },
    rowBetween:{
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    rowCenter:{
      flexDirection: "row",
      alignItems: "center",
    },
    sectionContainer: {
      paddingVertical: 24,
      paddingHorizontal: 32,
      marginBottom: 8,
      backgroundColor: colors.darkGray,
    },
    sectionTitle: {
      fontWeight: '700',
      color: colors.primary,
      fontSize: 16,
    },
    smallText: {
      fontSize: 12,
      fontWeight: '800',
      color: colors.darkGray,
    },
    subTitle: {
      fontWeight: '600',
      textTransform: 'uppercase',
      color: 'rgba(2555,2555,255, 0.6)',
      fontSize: 15,
      letterSpacing: 1,
    },
    title:{
      color: colors.white,
      fontSize: 30, 
    },
  
  });