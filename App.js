import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Cardapio from './src/Cardapio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#FF994F"}, 
        headerStyle: { backgroundColor: "#FF994F" , height: 120},
        tabBarActiveTintColor: "#DD6A00",
        tabBarInactiveTintColor: "white"
      }}
      >
        <Tab.Screen
         name="Home" component={Home}
         options= {{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="home" color="white" size={33} />
            
          ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}