import React from "react";
import { View, Text, StyleSheet } from "react-native";

import E from "./estilo";

export default function App08() {
  let num = cadastrar();
    //Quanto vale o num nesta linha?
  let inserir = inserirAluno();

  let inserir2 = () =>{
    return(
      <Text>ArrowFunction 1</Text>
    )
  }

  return (
    <View style={E.app}>
      <Text style={E.titulo}>App-08</Text>
      <Text style={E.texto}>{num}</Text>
      <Text style={E.texto}>{inserir}</Text>
      <Text style={E.texto}>{inserir2}</Text>
    </View>
  );
  //<Text style={E.texto}>Exemplo de texto: {num}</Text>
}

function inserirAluno(){
  return(
    <Text>Inserir aluno X</Text>
  )
}

function cadastrar() {
  let x = 2;
  return (
    <View>
      <Text>Valor de X: </Text>
    </View>
  )
}
