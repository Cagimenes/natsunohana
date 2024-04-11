import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

export default function Cadastro({ setLogado, setCadastro }) {

  const[ erro, setErro ] = useState( null );

  function Cadastrar() {

    setErro( "Senhas não conferem" );
    //setCadastro(false);
    //setLogado(false);
  }

  function Voltar() {
    setCadastro(false);
    setLogado(false);
  }

  return (
    <View style={css.view}>
      <Header />
      <StatusBar backgroundColor="#FF994F" />
      <Text style={css.nome}>CADASTRE-SE JÁ!</Text>
      <Text style={css.label}>NOME COMPLETO</Text>
        { erro && <Text>{erro}</Text>}
            <TextInput
              style={css.input}
            />
            <Text style={css.label}>EMAIL</Text>
            <TextInput
              style={css.input}
            />
            <Text style={css.label}>CELULAR</Text>
            <TextInput
              style={css.input}
            />
            <Text style={css.label}>SENHA</Text>
            <TextInput
              style={css.input}
            />
            <Text style={css.label}>CONFIRMAR SENHA</Text>
            <TextInput
              style={css.input}
            />
      <TouchableOpacity onPress={Cadastrar}>
        <LinearGradient
          colors={['#E46204', '#FF7300', '#FAA04C']}
          style={css.botao}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          <Text style={css.entrar}>CADASTRAR</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={Voltar}>
        <Text style={css.voltar}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
  view: {
      flex: 1,
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
})