import { Image, StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, ScrollView, Pressable } from "react-native";
import CarrinhoLista from "./CarrinhoLista";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import Rastreamento from "./Rastreamento"
import Header from "./Header";


const produtos = [
    {
        id: 1,
        produto: "TEMAKI TRADICIONAL",
        preco: "R$22,90",
        text: " +  1  - "
    },
    {
        id: 2,
        produto: "FISH BURGER GRELHADO",
        preco: "R$43,80",
        text: " +  2  - "
    }
]

export default function Carrinho({ navigation }) {

    const [delivery, setDelivery] = useState(true);

    const [corfirmar, setConfirmar] = useState(false);

    if (corfirmar) {
        return (<Rastreamento setConfirmar={setConfirmar} />)
    }

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.fundo}>
            <Header />
                <View style={styles.header}>
                    <MaterialCommunityIcons style={styles.voltar} name="arrow-left" color="#DC650E" size={33} onPress={() => navigation.navigate("Cardapio")} />
                    <Text style={styles.carrinho}>CARRINHO</Text>
                </View>
                <ScrollView>
                    <Text style={styles.itens}>ITENS</Text>
                    {produtos.map((item) => (
                        <CarrinhoLista
                            key={item.id}
                            produto={item.produto}
                            preco={item.preco}
                            text={item.text}
                        />
                    ))}
                    <TouchableOpacity style={styles.botaoAdd} onPress={() => navigation.navigate("Cardapio")}>
                        <Text style={styles.textAdd}>ADICIONAR MAIS ITENS</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <Text style={styles.subtotal}>SUBTOTAL</Text>
                        </View>
                        <View style={styles.box2}>
                            <Text style={styles.valorSub}>R$66,70</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Pressable style={(delivery) ? styles.box3 : styles.box4} onPress={() => setDelivery((current) => !current)}>
                            <Text style={(delivery) ? styles.delivery : styles.retirada}>DELIVERY</Text>
                            <Text style={(delivery) ? styles.seis : styles.seis2}>R$6,00</Text>
                        </Pressable>
                        <Pressable style={(delivery) ? styles.box4 : styles.box3} onPress={() => setDelivery((current) => !current)}>
                            <Text style={(delivery) ? styles.retirada : styles.delivery}>RETIRADA</Text>
                        </Pressable>
                    </View>
                    {delivery ?
                        <>
                            <View>
                                <Text style={styles.itens}>FORMA DE PAGAMENTO</Text>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.botao}>
                                    <MaterialCommunityIcons style={styles.icone} name="credit-card" size={25} />
                                    <Text style={styles.btnText}>CARTÃO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.botao}>
                                    <Image style={styles.imgPix} source={require('../assets/pix.png')} />
                                    <Text style={styles.btnText}>PIX</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.botao}>
                                    <MaterialCommunityIcons style={styles.icone} name="currency-brl" size={25} />
                                    <Text style={styles.btnText}>DINHEIRO</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.itens}>ENDEREÇO PARA ENTREGA</Text>
                            </View>
                            <Text style={styles.campos}>CEP</Text>
                            <View style={styles.container}>
                                <TextInput style={styles.input} />
                            </View>
                            <Text style={styles.campos}>ENDEREÇO</Text>
                            <View style={styles.container}>
                                <TextInput style={styles.inputEnd} />
                                <TextInput style={styles.inputNum} />
                            </View>
                            <Text style={styles.campos}>COMPLEMENTO</Text>
                            <View style={styles.container}>
                                <TextInput style={styles.input} />
                            </View>
                            <Text style={styles.campos}>REFERÊNCIA</Text>
                            <View style={styles.container}>
                                <TextInput style={styles.input} />
                            </View>
                            <View style={styles.container}>
                                <View style={styles.box}>
                                    <Text style={styles.subtotal}>TOTAL</Text>
                                </View>
                                <View style={styles.box2}>
                                    <Text style={styles.valorSub}>R$72,70</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#E46204', '#FF7300', '#FAA04C']}
                                    style={styles.confirmar}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}>
                                    <Text style={styles.btnTextConf}>CONFIRMAR PEDIDO</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={styles.ultimo}>

                            </View>
                        </>
                        :
                        <View>
                            <Text style={styles.localRetirada}>LOCAL DE RETIRADA</Text>
                            <Text style={styles.local} >RUA XV DE NOVEMBRO, 705 - BARIRI / SP</Text>
                            <Text style={styles.info}>NOME:  Júlio César Xavier Pereira</Text>
                            <Text style={styles.info}>CELULAR:  (14) 99652-0908</Text>
                            <Text style={styles.horario}>O HORÁRIO DA RETIRADA SERÁ INFORMADO PELO NÚMERO DO SEU CELULAR</Text>
                            <View style={styles.container}>
                                <View style={styles.box}>
                                    <Text style={styles.subtotal}>TOTAL</Text>
                                </View>
                                <View style={styles.box2}>
                                    <Text style={styles.valorSub}>R$66,70</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#E46204', '#FF7300', '#FAA04C']}
                                    style={styles.confirmar}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}>
                                    <Text style={styles.btnTextConf} onPress={() => setConfirmar(true)}>CONFIRMAR PEDIDO</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={styles.ultimo}></View>
                        </View>
                    }
                </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        backgroundColor: "#F0E8DE"
    },
    header: {
        width: "100%",
        height: 40,
        alignItems: "center",
        display: "flex",
        marginTop: 20,
        backgroundColor: "#F0E8DE"
    },
    carrinho: {
        color: '#DC650E',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -30
    },
    voltar: {
        width: '90%'
    },
    itens: {
        height: 28,
        fontWeight: "bold",
        marginLeft: 20,
        color: "#DC650E",
        marginTop: 18,
        fontSize: 16
    },
    botao: {
        fontWeight: "bold",
        fontSize: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "black",
        padding: 10,
    },
    botaoAdd: {
        fontWeight: "bold",
        fontSize: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "91%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#DC650E",
        padding: 10
    },
    textAdd: {
        color: "#DC650E",
        alignSelf: "center",
        fontWeight: "bold"
    },
    container: {
        width: "96%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: "center"
    },
    box: {
        width: "20%",

        marginRight: 200
    },
    box2: {
        width: "20%",

    },
    subtotal: {
        textAlign: "center",
        fontWeight: "bold"
    },
    valorSub: {
        textAlign: "right",
        fontWeight: "bold",
        marginRight: 6
    },
    box3: {
        width: "43%",
        height: 90,
        borderRadius: 5,
        backgroundColor: "#FF7300",
    },
    box4: {
        width: "43%",
        height: 90,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7300",
    },
    delivery: {
        textAlign: "center",
        marginTop: 35,
        fontWeight: "bold",
        color: "white"
    },
    retirada: {
        textAlign: "center",
        marginTop: 35,
        fontWeight: "bold",
        color: "#FF7300"
    },
    btnText: {
        marginLeft: 5,
        fontWeight: "bold",
        alignItems: "center"
    },
    botaoPix: {
        marginTop: -20,
        fontSize: 13,
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: 370,
        marginLeft: 4,
        borderColor: "black"
    },
    botaoDinheiro: {
        marginTop: -20,
        fontSize: 13,
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: 370,
        marginLeft: 4,
        borderColor: "black"
    },
    input: {
        fontSize: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        height: 45,
        padding: 15,
        borderColor: "black",
        alignSelf: "center"
    },
    inputEnd: {
        fontSize: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "75%",
        height: 45,
        padding: 15,
        borderColor: "black",
    },
    inputNum: {
        fontSize: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "22%",
        height: 45,
        padding: 15,
        marginLeft: 4,
        borderColor: "black",
    },
    campos: {
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 15
    },
    endereco: {
        width: "50%"

    },
    ultimo: {
        height: 30
    },
    localRetirada: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#FF7300",
        fontSize: 20,
        marginTop: 18
    },
    local: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 8

    },
    info: {
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20,
        textAlign: "left",
        width: "91%",
        height: 45,
        alignSelf: "center",
        borderRadius: 5,
        fontSize: 17,
        fontWeight: "bold",
        padding: 10,
        paddingHorizontal: 50
    },
    horario: {
        width: "90%",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 10,
        alignSelf: "center",
    },
    btnText: {
        color: "black",
        fontWeight: "bold"
    },
    btnTextConf: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
    },
    seis: {
        width: "100%",
        color: "white",
        fontWeight: "bold",
        marginLeft: 114,
        marginTop: 14
    },
    seis2: {
        width: "100%",
        color: "#FF7300",
        fontWeight: "bold",
        marginLeft: 114,
        marginTop: 14
    },
    icone: {
        marginRight: 9
    },
    imgPix: {
        width: 22,
        height: 22,
        marginRight: 13
    },
    confirmar: {
        borderRadius: 5,
        width: "91%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 10
    },
});
