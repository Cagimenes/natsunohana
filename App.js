import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import Cardapio from './src/Cardapio';
import Carrinho from './src/Carrinho';
import Login from './src/Login';

const Tab = createBottomTabNavigator();

export default function App() {

  const[ logado, setLogado ] = useState(false);
  const[ cadastro, setCadastro ] = useState(false);

  if( !logado ) {
    return( <Login setLogado={setLogado} /> )
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/> )
  }

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
        <Tab.Screen
          name="Cardapio" component={Cardapio}
          options= {{
            tabBarLabel: "Cardapio",
            tabBarLabelStyle: { color: "white" },
            tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="script-text" color="white" size={33} />
          ),
          }}/>
        <Tab.Screen
          name="Carrinho" component={Carrinho}
          options= {{
            tabBarLabel: "Carrinho",
            tabBarLabelStyle: { color: "white" },
            tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="cart" color="white" size={33} />
          ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}