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

const renderItem = ({ item }: any) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { backgroundColor: "gray" }]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <FlatList
        data={data.welcome}
        renderItem={({ item }) => <Onboarding item={item} />}
      />
    </View>
  );
};

export default Home;
