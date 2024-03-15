import { FlatList, StyleSheet, Text, View } from "react-native";
import ProdutoLista from "./ProdutoLista";

const produtos = [

    {
        id: 1,
        imagem: require("../assets/croc-fish.jpg"),
        nome: "Sérum de Retinol",
        descricao: "Ativo que ajuda a desobstruir os poros e promove a renovação celular da pele",
        preco: "R$10.00"
    },
    {
        id: 2,
        imagem: require("../assets/croc-fish.jpg"),
        nome: "Sérum de Retinol",
        descricao: "Ativo que ajuda a desobstruir os poros e promove a renovação celular da pele",
        preco: "R$10.00"
    }
]

export default function Cardapio() {
    return (

        <View style={css.fundo}>
            <Text style={css.cardapio}>CARDÁPIO</Text>
            <Text>Opções Fritas</Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <ProdutoLista
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                    imagem={item.imagem}
                />}
                keyExtractor={(item) => item.id}
            />
        </View>

    )
}
const css = StyleSheet.create({
    cardapio:{
        color: '#DC650E', 
    },
    fundo: {
        backgroundColor: '#F0E8DE'
    }
})