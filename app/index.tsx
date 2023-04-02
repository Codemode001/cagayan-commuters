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

  return (
    <View style={[styles.container]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{ flex: 3 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Onboarding item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          scrollEventThrottle={32}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </View>
  );
};

export default Home;
