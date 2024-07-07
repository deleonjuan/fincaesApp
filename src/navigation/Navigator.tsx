import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createComponentForStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "src/constants/screen.names";
import AddTransactionScreen from "@screens/addTransaction";
import HomeScreen from "@screens/home";

const BottomTabs = createBottomTabNavigator({
  screens: {
    [SCREENS.HOME]: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    BottomTabs: {
      screen: BottomTabs,
    },
    addTransaction: {
      screen: AddTransactionScreen,
      options: {
        presentation: 'formSheet',
        sheetAllowedDetents: 'all',
        headerTitle: "Add New Transaction",
        headerShown: true,
      }
    },
  },
});

const Navigator = createComponentForStaticNavigation(RootStack, "Stack");

export default Navigator;
