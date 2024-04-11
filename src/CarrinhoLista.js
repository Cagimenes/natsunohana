import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function CarrinhoLista({ produto, preco, text }) {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.produto}>{produto}</Text>
        </View>
        <View style={styles.box2}>
            <Text style={styles.produto}>{preco}</Text>
        </View>
        <View>
        <TouchableOpacity style= {styles.box3}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: 395,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 5,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 15
    },
    box1: {
        width: '50%',
        marginRight: 18,
        alignItems: "left",

    }, 
    box2: {
        width: '20%',
        marginLeft: 40
    
    },
    box3: {
        width: '100%',
        backgroundColor: "#FF7300",
        borderRadius: 9,
        padding: 2,
        marginRight: 9
    },
    produto: {
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 10
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})