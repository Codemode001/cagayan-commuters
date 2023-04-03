import React, { useRef, useState } from "react";
import { View, StyleSheet, StatusBar, FlatList, Animated } from "react-native";

import Paginator from "./Paginator";
import slides from "../../data/slides";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View>
      <StatusBar
        backgroundColor="#000000"
        translucent
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
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
      <View style={styles.paginator}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  paginator: {
    width: "100%",
    alignItems: "center",
  },
});

export default Onboarding;
