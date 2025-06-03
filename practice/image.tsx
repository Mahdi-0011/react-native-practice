import React from "react";
import { StyleSheet,Text, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeview}>
    <Text>hello</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});
