import React from "react";
import { View, Text } from "react-native";

import P1 from "./primeiroComponente";

import Componente, { Comp1, Comp2 } from "./multiComponentes";

export default function Componente1() {
  return (
    <View>
      <Text> App-04 </Text>
      <Text> (10 + 5) "10 + 5" </Text>
      <P1 />
      <Componente> </Componente>
      <Comp1 />
      <Comp2 />
    </View>
  );
}
