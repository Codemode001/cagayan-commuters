import React, { useState, useRef } from "react";
import { View, Animated, FlatList } from "react-native";
import { Stack } from "expo-router";

import { styles } from "../constants/theme";
import Onboarding from "../components/onboarding/Onboarding";
import data from "../data/slides";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  console.log(currentIndex);

  return (
    <View style={[styles.container]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Onboarding />
      </View>
    </View>
  );
};

export default Home;
