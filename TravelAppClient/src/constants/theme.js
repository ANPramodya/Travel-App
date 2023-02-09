import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const colors = {
  primary: "#070f18",
  gray: "#8b8989",
  lightGray: "#b2b2b2",
  light: "#fbfbfb",
  white: "#fff",
  black: "#000",
  darkGradient: '#4D5DFB',
  lightGradient: '#08C8F6',
  midgradient: '#0095FF',
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};


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
    alignItems: "center"
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