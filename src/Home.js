import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";

export default function Home({navigation})
{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF994F" />
            <Header />
        <Image 
          style={styles.imagemhome}  
          source={require('../assets/imagemhome.png')}
        />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate( "Cardapio" )}>
            <Text style={styles.btnText}>FAÇA SEU PEDIDO</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#F0E8DE"
    },
    imagemhome: {
        width: "95%",
        height: 640,
        marginTop:25
    },
    btn: {
        width: '60%',
        height: 54,
        backgroundColor: '#DD6A00',
        borderRadius: 10,
        marginTop: -90
    },
    btnText: {
        color: "white",
        fontSize: 23, 
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    }
})