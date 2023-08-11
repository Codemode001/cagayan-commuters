import React, { useState, useRef, useEffect } from "react";
import { View, Animated, FlatList, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../constants/theme";
import Onboarding from "../components/onboarding/Onboarding";
import HomeScreen from "../components/homescreen/HomeScreen";
import data from "../data/slides";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  console.log(currentIndex);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={[styles.container]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        {loading ? (
          <Loading />
        ) : viewOnboarding ? (
          <HomeScreen />
        ) : (
          <Onboarding />
        )}
      </View>
    </View>
  );
};

export default Home;
