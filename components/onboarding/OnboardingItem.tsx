import React from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
} from "react-native";

interface ItemProps {
  id: number;
  title: string;
  description: string;
  image: any;
}

const OnboardingItem = ({ item }: { item: ItemProps }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.welcomeText}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    alignItems: "center",
    height: "33%",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    width: "90%",
    height: "30%",
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

export default OnboardingItem;
