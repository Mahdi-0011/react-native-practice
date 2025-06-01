import { View, Text, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import React from "react";

export default function App () {
  return <>
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <TextInput 
          style={styles.input}
          placeholder="your input is ready...">
          </TextInput>
          <View style={styles.btn}>
          <Button title={"Add"}
          />
          </View>
        </View>
      </ScrollView>
    </View>
  </>
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 70,
    margin: 1,
    backgroundColor: 'skyblue',
  },
  form: {
    flexDirection: 'row',
    height: 300,
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: 'orange',
    marginLeft: 20,
    padding: 15,
    borderRadius:15,
  },
  btn: {
    width: 90,
    height: 50,
    backgroundColor: 'yellow',
    padding: 2,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: 'center',
  }
});