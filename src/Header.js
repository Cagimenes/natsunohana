import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={css.header}>
      <Image style={css.image} source={require( "../assets/logo.png" ) } />
    </View>
  )
}

const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 130,
        backgroundColor: "#FF994F",
        display: "flex",
        justifyContent: 'center',
        padding: 20
    },
    image: {
        marginTop: 20,
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
})