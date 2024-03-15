import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Home()
{
    return(
        <View style={styles.container}>
        <Image 
          style={styles.imagemhome}  
          source={require('../assets/imagemhome.png')}
        />
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>FAÇA SEU PEDIDO</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        alignItems: "center",
        display: "flex",
        marginTop: 20,
        backgroundColor: "#F0E8DE"
    },
    imagemhome: {
        width: "95%",
        height: 660,
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