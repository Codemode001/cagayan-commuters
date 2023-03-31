import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import data from "../data/welcomeData.json";
import { styles } from "../constants/theme";
import Onboarding from "../components/Onboarding";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <FlatList
        data={data.welcome}
        renderItem={({ item }) => <Onboarding item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
      />
    </View>
  );
};

export default Home;
