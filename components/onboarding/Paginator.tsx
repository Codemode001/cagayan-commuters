import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

import { COLORS } from "../../constants/theme";

const Paginator = ({ data, scrollX }: { data: any; scrollX: any }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        alignItems: "center",
      }}
    >
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 8,
  },
});

export default Paginator;
