import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, ScrollView } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

export default function Cadastro({ setLogado, setCadastro, }) {

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [campo, setCampo] = useState(false);
  const [incorreto, setIncorreto] = useState(false);
  const [cadastrado, setCadastrado] = useState(false);

  const handleSubmit = () => {
    if (!nomeCompleto || !email || !celular || !senha || !confirmarSenha) {
      setCampo(true);
      return;
    }
    if (senha !== confirmarSenha) {
      setIncorreto(true);
      return;
    }
    setCadastrado(true);
  };

  const alertCadastrado = () => {
    setCadastrado(false);
  };

  const alertCampo = () => {
    setCampo(false);
  };

  const alertIncorreto = () => {
    setIncorreto(false);
  };

  function Cadastrar() {
    setCadastro(false);
    setLogado(false);
  }

  function Voltar() {
    setCadastro(false);
    setLogado(false);
  }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={css.view}>
      <Header />
      <StatusBar backgroundColor="#FF994F" />
      
      <Text style={css.nome}>CADASTRE-SE JÁ!</Text>
      <Text style={css.label}>NOME COMPLETO</Text>      
            <TextInput
              style={css.input}
              value={nomeCompleto}
              onChangeText={setNomeCompleto}
            />
            <Text style={css.label}>EMAIL</Text>
            <TextInput
              style={css.input}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={css.label}>CELULAR</Text>
            <TextInput
              style={css.input}
              value={celular}
              onChangeText={setCelular}
            />
            <Text style={css.label}>SENHA</Text>
            <TextInput
              style={css.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <Text style={css.label}>CONFIRMAR SENHA</Text>
            <TextInput
              style={css.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
      <TouchableOpacity onPress={Cadastrar}>
        <LinearGradient
          colors={['#E46204', '#FF7300', '#FAA04C']}
          style={css.botao}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          <Text style={css.entrar} onPress={handleSubmit}>CADASTRAR</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={Voltar}>
        <Text style={css.voltar}>VOLTAR</Text>
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
            <Text style={css.modalTitle}>As senhas não coincidem!</Text>
            <Text style={css.modalMessage}>Tente Novamente</Text>
            <TouchableOpacity style={css.modalButton} onPress={alertIncorreto}>
              <Text style={css.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={cadastrado}
        onRequestClose={alertCadastrado}>
        <View style={css.modalContainer}>
          <View style={css.modalContent}>
            <Text style={css.modalTitle}>Cadastro realizado com sucesso!</Text>
            <Text style={css.modalMessage}>Seja bem-vindo(a)</Text>
            <TouchableOpacity style={css.modalButton} onPress={alertCadastrado}>
              <Text style={css.modalButtonText} >OK</Text>
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
  nome: {
      width: '60%',
      marginTop: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white',
      backgroundColor: '#E46204',
      borderRadius: 5,
  },
  label: {
      width: '40%',
      marginTop: 15,
      marginRight: 120,
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
  voltar: {
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