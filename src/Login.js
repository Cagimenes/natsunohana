import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Keyboard } from 'react-native'

export default function Login({ setLogado }) {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email == "julia.menegass159@gmail.com" && senha == "123") {
            setLogado(true);
        }
    }

    return (
        <View style={css.view}>
            <TextInput 
                onChangeText={ (digitado) => setEmail(digitado)}
                value={email}
                style ={css.input}
            />
            <TextInput 
                onChangeText={ (digitado) => setSenha(digitado)}
                value={senha}
                style ={css.input}
            />
            <TouchableOpacity 
                style= {css.btn} 
                onPress={Login}>
                <Text style={css.text}>ENTRAR</Text>
            </TouchableOpacity> 
        </View>
    )
}
const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 295,
        height: 55,
        borderWidth: 2,
        marginTop: 25,
        borderRadius: 4,
        borderColor: "#DC650E"
    },
    btn: {
        width: 295,
        height: 55,
        backgroundColor: "#DC650E",
        marginTop: 20,
        borderRadius: 4,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 12
    }
})