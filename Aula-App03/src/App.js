import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function App03() {
  return (
    <View style={estilo.App}>
      <Text style={estilo.Texto}> App-03 </Text>
      <Text> Meu nome </Text>
      <Text style={estilo.Botao}> 9 </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  App: {
    fontSize: 24,
    backgroundColor: "#A7FFEB",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },

  Texto: {
    fontSize: 24
  },

  Botao: {
    fontSize: 40,
    backgroundColor: "#888",
    padding: 10,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    textAlign: "center"
  },

  BotaoLinha: {
    flexDirection: "row"
  }
});
