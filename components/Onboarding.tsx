import React from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

interface ItemProps {
  id: number;
  title: string;
  description: string;
  image: any;
}

const Onboarding = ({ item }: { item: ItemProps }) => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    textContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: -width / 2 }, { translateY: -height / 4 }],
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff",
    },
    description: {
      fontSize: 16,
      color: "#fff",
      textAlign: "center",
    },
  });

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor="#000000"
        translucent
        barStyle="light-content"
      />

      <Image
        source={{ uri: item.image }}
        style={[styles.image, { width, height }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Onboarding;
