import { Text, View, StyleSheet } from "react-native";
import styles from "./BoxStyle";
import React from "react";

const Box = ({ colorName, hexCode }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.contanier,
        { backgroundColor: hexCode },
      ])}
    >
      <Text style={styles.textStyle}>{colorName}</Text>
    </View>
  );
};
export default Box;
