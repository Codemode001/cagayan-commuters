import React from "react";
import { Text, View, useWindowDimensions, Image } from "react-native";

import { styles } from "../constants/theme";

interface ItemProps {
  id: number;
  title: string;
  description: string;
  image: any;
}

const Onboarding = ({ item }: { item: ItemProps }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Onboarding;
