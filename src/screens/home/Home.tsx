import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import HistoryDaySection from "./components/HistoryDaySection";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <StatusBar style="dark" />
      <HistoryDaySection />
      <Button
        title="tap me"
        onPress={() => navigation.navigate("addTransaction" as never)}
      />
    </View>
  );
}
