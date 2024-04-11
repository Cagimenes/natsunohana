import { Text, View } from "react-native";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";

export default function Carrinho()
{
    return(
        <View>
            <Header />
            <StatusBar backgroundColor="#FF994F" />
            <Text>CARRINHO</Text>
        </View>
    )
}