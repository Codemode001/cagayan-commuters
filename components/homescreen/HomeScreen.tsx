import React from "react";
import { View, StyleSheet, StatusBar, FlatList, Animated } from "react-native";
import { Text } from "react-native-svg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 200,
    marginTop: 50,
  },
});
