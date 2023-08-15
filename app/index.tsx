import React, { useState, useRef, useEffect } from "react";
import { View, Animated, FlatList, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { styles } from "../constants/theme";
import Onboarding from "../components/onboarding/Onboarding";
import HomeScreen from "../components/homescreen/HomeScreen";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const Stacks = createNativeStackNavigator();

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);

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
    // <View style={[styles.container]}>
    //   <Stack.Screen
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    //   <View>
    //     {loading ? (
    //       <Loading />
    //     ) : viewOnboarding ? (
    //       <HomeScreen />
    //     ) : (
    //       <Onboarding />
    //     )}
    //   </View>
    // </View>
    <NavigationContainer independent={true}>
      <Stacks.Navigator>
        <Stacks.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stacks.Screen
          name="Home"
          component={HomeScreen}
          // options={{ headerShown: false }}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default Home;
