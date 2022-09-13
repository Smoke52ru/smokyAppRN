import CalculatorScreen from "../Calculator";
import {NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TodoScreen } from "../Todos";

const NavTab = createBottomTabNavigator()

const commonScreenOptions: BottomTabNavigationOptions = {
  header: () => null,
  tabBarActiveTintColor: 'white',
  tabBarActiveBackgroundColor: '#222222',
  tabBarStyle: {
    backgroundColor: '#333333'
  },
  tabBarItemStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIconStyle: {
    display: "none"
  },
};

export const Router = () => {
  return (
    <NavigationContainer>
      <NavTab.Navigator screenOptions={commonScreenOptions}>
        <NavTab.Screen name='ToDo' component={TodoScreen}/>
        <NavTab.Screen name='Calculator' component={CalculatorScreen}/>
      </NavTab.Navigator>
    </NavigationContainer>
  )
}