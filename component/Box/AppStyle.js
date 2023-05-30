import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
  contair: {
    marginTop: Platform.OS === "andriod" ? 30 : 0,
    marginHorizontal: "3",
  },
  textHeader: { fontWeight: "Bold", fontSize: 18 },
  viewSep: { backgroundColor: "#C0C0C0	" },
  Box: { borderRadius: "5" },
});
