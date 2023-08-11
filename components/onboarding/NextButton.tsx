import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";

interface NextButtonProps {
  percentage: number;
  onPress: () => void;
}

const NextButton = ({ percentage, onPress }: NextButtonProps) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<SVGElement | null>(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  // useEffect(() => {
  //   progressAnimation.addListener((value) => {
  //     const strokeDashoffset =
  //       circumference - (circumference * value.value) / 100;

  //     if (progressRef?.current) {
  //       progressRef.current.setNativeProps({
  //         strokeDashoffset,
  //       });
  //     }
  //   });
  // }, [percentage]);

  const handleNext = () => {
    if (percentage >= 100) {
      // Handle navigation to the home page (replace with your navigation logic)
    } else {
      onPress(); // Call the provided onPress function to scroll to the next slide
    }
  };

  return (
    <View style={styles.container}>
      {/* <Svg>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={"#E6E7E8"}
            cx={center}
            r={radius}
            cy={center}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke={COLORS.primary}
            cx={center}
            r={radius}
            cy={center}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 60) / 100}
          />
        </G>
      </Svg> */}
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {},
  button: {
    position: "absolute",
    backgroundColor: "#f4338f",
    borderRadius: 100,
    padding: 20,
  },
});

export default NextButton;
