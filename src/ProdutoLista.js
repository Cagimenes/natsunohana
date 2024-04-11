import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProdutoLista({ nome, descricao, preco, imagem, unidade, botao }) {
    return (
        <View style={css.container}>
            <View style={css.box1}>
                <Image style={css.img} source={imagem} />
            </View>
            <View style={css.box2}>
                <Text style={css.nome}>{nome}</Text>
                <Text style={css.descricao}>{descricao}</Text>
                <Text style={css.unidade}>{unidade}</Text>
            </View>
            <View style={css.box3}>
                <Text style={css.preco}>{preco}</Text>
                <Pressable style={css.botao}>
                    <Text style={css.botaoText}>{botao}</Text>
                </Pressable>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
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
    nome: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
        color: '#FF8D3B'
    },
    descricao: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    preco: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
        backgroundColor: '#FF7300',
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderRadius:3
    },
    img: {
        width: 110,
        height: 110,
        resizeMode: "contain",
        borderRadius: 10,
    },
    unidade: {
        fontWeight: 'bold',
        fontSize: 11
    },
    botao: {
        marginTop: 12,
        
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 2,
        borderRadius:3,
        borderWidth: 1,
        borderColor: 'black'
    },
    botaoText: {
        fontWeight: "bold",
        fontSize: 13,
    },
    box1: {
        width: '30%',
    }, 
    box2: {
        width: '47.5%'
    },
    box3: {
        width: '21%'
    }
})