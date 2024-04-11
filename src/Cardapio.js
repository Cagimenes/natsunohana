import { FlatList, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProdutoLista from "./ProdutoLista";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";

const lista = [
    {
        title: "FRITOS",
        data: [
            {
                id: 1,
                imagem: require("../assets/croc-fish.jpg"),
                nome: "CROC FISH",
                descricao: "Bolinho de arroz, salmão grelhado com cream cheese e hondashi",
                unidade: "6 UNIDADES",
                preco: "R$19,90",
                botao: 'ADICIONAR'
            },
            {
                id: 2,
                imagem: require("../assets/fry-salmao.jpg"),
                nome: "FRY DE SALMÃO",
                descricao: "Sashimi recheado com cream cheese empanado",
                unidade: "5 UNIDADES",
                preco: "R$24,90",
                botao: 'ADICIONAR'
            },
            {
                id: 3,
                imagem: require("../assets/harumaki-queijo.jpg"),
                nome: "HARUMAKI DE QUEIJO",
                descricao: "Massa crocante recheada de queijo",
                unidade: "10 UNIDADES",
                preco: "R$24,90",
                botao: 'ADICIONAR'
            },
            {
                id: 4,
                imagem: require("../assets/harumaki-salmao.jpg"),
                nome: "HARUMAKI DE SALMÃO GRELHADO",
                descricao: "Massa crocante recheada de salmão grelhado",
                unidade: "10 UNIDADES",
                preco: "R$29,90",
                botao: 'ADICIONAR'
            },
            {
                id: 5,
                imagem: require("../assets/hot-roll.jpg"),
                nome: "HOT ROLL",
                descricao: "Tradicional, doritos e geléia de Pimenta",
                unidade: "24 UNIDADES",
                preco: "R$40,90",
                botao: 'ADICIONAR'
            },
            {
                id: 6,
                imagem: require("../assets/joy-grelhado.jpg"),
                nome: "JOY DE SALMÃO GRELHADO",
                descricao: "Arroz, fatia de salmão, cream cheese empanado",
                unidade: "10 UNIDADES",
                preco: "R$35,90",
                botao: 'ADICIONAR'
            }
        ]
    },
    {
        title: "FRIAS",
        data: [
            {
                id: 7,
                imagem: require("../assets/joy-salmao.jpg"),
                nome: "JOY DE SALMÃO",
                descricao: "Tradicional, doritos e geléia de Pimenta",
                unidade: "10 UNIDADES",
                preco: "R$32,90",
                botao: 'ADICIONAR'
            },
            {
                id: 8,
                imagem: require("../assets/niguiri-salmao.jpg"),
                nome: "NIGUIRI DE SALMÃO",
                descricao: "Arroz com tempêro especial e fatia de salmão",
                unidade: "10 UNIDADES",
                preco: "R$32,90",
                botao: 'ADICIONAR'
            },
            {
                id: 9,
                imagem: require("../assets/sashimi.jpg"),
                nome: "SASHIMI DE SALMÃO/GRELHADO",
                descricao: "Massa crocante recheada de queijo",
                unidade: "10 UNIDADES",
                preco: "R$36,90",
                botao: 'ADICIONAR'
            },
            {
                id: 10,
                imagem: require("../assets/sushi-salmao.jpg"),
                nome: "SUCHI DE SALMÃO",
                descricao: "Nori, arroz, salmão e cream cheese",
                unidade: "10 UNIDADES",
                preco: "R$27,90",
                botao: 'ADICIONAR'
            },
            {
                id: 11,
                imagem: require("../assets/uramaki.jpg"),
                nome: "URAMAKI DE SALMÃO",
                descricao: "Arroz, nori, salmão, gergelim e cream cheese ",
                unidade: "10 UNIDADES",
                preco: "R$27,90",
                botao: 'ADICIONAR'
            }
        ]
    },

    {
        title: "TEMAKI",
        data: [
            {
                id: 15,
                imagem: require("../assets/temaki-tradicional.jpg"),
                nome: "TRADICIONAL",
                descricao: "Sushi em forma de hamburguer, recheado com salmão cream cheese e cebolinha",
                preco: "R$22,90",
                botao: 'ADICIONAR'
            },
            {
                id: 16,
                imagem: require("../assets/temaki-grelhado.jpg"),
                nome: "GRELHADO",
                descricao: "Sushi em forma de hamburguer, recheado com salmão grelhado, cream cheese e cebolinha",
                preco: "R$22,90",
                botao: 'ADICIONAR'
            },
            {
                id: 17,
                imagem: require("../assets/temaki-frito.jpg"),
                nome: "FRITO",
                descricao: "Sushi em forma de hamburguer, recheado com salmão frito, cream cheese e cebolinha",
                preco: "R$24,90",
                botao: 'ADICIONAR'
            }
        ]
    },
    {
        title: "BURGER",
        data: [
            {
                id: 12,
                imagem: require("../assets/fish-burger-tradicional.jpg"),
                nome: "TRADICIONAL",
                descricao: "Nori, arroz, blend de salmão com cream cheese e cebolinha",
                preco: "R$21,90",
                botao: 'ADICIONAR'
            },
            {
                id: 13,
                imagem: require("../assets/fish-burger-grelhado.jpg"),
                nome: "GRELHADO",
                descricao: "Nori, arroz, blend de salmão grelhado com cream cheese e cebolinha",
                preco: "R$21,90",
                botao: 'ADICIONAR'
            },
            {
                id: 14,
                imagem: require("../assets/fish-burger-frito.jpg"),
                nome: "FRITO",
                descricao: "Nori, arroz, blend de salmão com cream cheese e cebolinha, empanado e frito",
                preco: "R$21,90",
                botao: 'ADICIONAR'
            }
        ]
    }
]


export default function Cardapio({navigation}) {
    return (

        <View style={css.fundo}>
            <Header />
            <StatusBar backgroundColor="#FF994F" />
            <View style={css.container}>
                <MaterialCommunityIcons style={css.voltar} name="arrow-left" color="#DC650E" size={33} onPress={() => navigation.navigate( "Home" )} />
                <Text style={css.cardapio}>CARDÁPIO</Text>
            </View>
            <SectionList
                sections={lista}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <ProdutoLista
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        botao={item.botao}
                        imagem={item.imagem}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 200 }}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={css.opcoes}>{title}</Text>
                )} 
            />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        alignItems: "center",
        display: "flex",
        marginTop: 20,
        backgroundColor: "#F0E8DE"
    },
    cardapio: {
        color: '#DC650E',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -30
    },
    opcoes: {
        marginLeft: 20,
        marginTop: 20,
        color: '#FF7300',
        fontWeight: 'bold',
        fontSize: 18
    },
    fundo: {
        backgroundColor: '#F0E8DE'
    },
    voltar: {
        width: '90%'
    }
})
