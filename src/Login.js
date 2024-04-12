import React, { useState } from 'react'
import { Keyboard, Text, TextInput, View, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import Cadastro from './Cadastro';
import Home from './Home';


export default function Login({setLogado, setCadastro}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [campo, setCampo] = useState(false);
    const [incorreto, setIncorreto] = useState(false);

    const handleSubmit = () => {
        Keyboard.dismiss();
        if (!email || !senha) {
            setCampo(true);
            return;
        }
        if (email == 'carolmicagimenes@gmail.com' && senha == '1234') {
            setLogado(true);
            return;
        }
        if (senha || email != false) {
            setIncorreto(true);            
        }       
    };

    const alertCampo = () => {
        setCampo(false);
    };

    const alertIncorreto = () => {
        setIncorreto(false);
    };
   
    function Cadastro() {
        setLogado(true);
        setCadastro(true);
    }

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={css.view}>
            <Header />
            <StatusBar backgroundColor="#FF994F" />
            <Text style={css.bemVindo}>SEJA BEM VINDO(A) AO</Text>
            <Text style={css.nome}>NATSU NO HANA!</Text>
            <MaterialCommunityIcons style={css.account} name="account-circle" color="#E46204" size={50} />
            <Text style={css.label}>EMAIL</Text>
            <TextInput
                onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                style={css.input}
            />
            <Text style={css.label}>SENHA</Text>
            <TextInput
                onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                style={css.input}
            />
            <TouchableOpacity>
                <LinearGradient
                    colors={['#E46204', '#FF7300', '#FAA04C']}
                    style={css.botao}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={css.entrar} onPress={handleSubmit}>ENTRAR</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={css.btn} onPress={Cadastro}>
                <Text style={css.cadastro}>É NOVO POR AQUI?</Text>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={campo}
                onRequestClose={alertCampo}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Preencha todos os campos!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertCampo}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={incorreto}
                onRequestClose={alertIncorreto}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Senha ou email incorreto!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertIncorreto}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}
const css = StyleSheet.create({
    view: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: "#F0E8DE"
    },
    input: {
        width: '70%',
        height: 55,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#FF7300',
        borderRadius: 5,
        padding: 15
    },
    bemVindo: {
        marginTop: 90,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FF7300'
    },
    nome: {
        width: '60%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        backgroundColor: '#E46204',
        borderRadius: 5,
        marginTop: 10
    },
    label: {
        width: '30%',
        marginTop: 15,
        marginRight: 165,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#FF7300'
    },
    account: {
        marginTop: 20
    },
    botao: {
        width: 290,
        height: 55,
        marginBottom: 10,
        marginTop: 25,
        borderRadius: 5,
    },
    entrar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15
    },
    cadastro: {
        color: '#E46204',
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300,
        height: 200,
      },
      modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
      },
      modalMessage: {
        fontSize: 18,
        marginTop: 15
      },
      modalButtonText: {
        color: '#E46204',
        textAlign: 'right',
        fontSize: 20,
        marginTop: 30
      }
})