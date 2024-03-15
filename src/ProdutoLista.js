import { Image, StyleSheet, Text, View } from "react-native";
import { HoverEffect } from "react-native-gesture-handler";

export default function ProdutoLista({nome, descricao, preco, imagem}) {
    return(
        <View style={css.container}>
            <Image style={css.img} source={imagem}/>
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.descricao}>{descricao}</Text>
            <Text style={css.preco}>{preco}</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        padding: 5, 
    },
    nome: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10
    },
    descricao: {
        fontSize: 15,
        marginBottom: 10
    },
    preco: {
        fontWeight: "bold",
        fontSize: 18
    },
    img: {
        width: 110,
        height: 110,
        resizeMode: "contain",
        marginTop: 10,
    }
})