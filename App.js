import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
import { Component } from "react";
import Flag from "./src/components/Flag";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>

        <Field />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined/>
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
});
