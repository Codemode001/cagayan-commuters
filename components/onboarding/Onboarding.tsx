import React, { useRef } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";

import Paginator from "./paginator";
import slides from "../../data/slides";

interface ItemProps {
  id: number;
  title: string;
  description: string;
  image: any;
}

const Onboarding = ({ item }: { item: ItemProps }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor="#000000"
        translucent
        barStyle="light-content"
      />

      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    width: "90%",
  },

  title: {
    fontSize: 33,
    fontWeight: "800",
    marginBottom: 15,
    textAlign: "center",
    color: "#163922",
  },
  description: {
    fontSize: 16,
    color: "#42531b",
    textAlign: "center",
    fontWeight: "300",
    paddingHorizontal: 64,
  },
});

export default Onboarding;
