import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation<any>();

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

  const handleNext = () => {
    if (percentage >= 100) {
      navigation.navigate("Home");
    } else {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={handleNext}
      >
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
