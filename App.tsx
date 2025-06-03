import React from "react";
import { StyleSheet,Text, SafeAreaView } from "react-native";
import CommentVisualCard from "./practice/CommentVisualCard";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeview}>
    <Text>hello </Text>

<CommentVisualCard
  creator="Jax"
  content=" Här är en kommentar som är 
  ganska lång och innehåller
  mycket text för att visa hur det 
  ser ut när det är mer än en rad."
  profilePicUrl="https://reactnative.dev/img/tiny_logo.png"
  likes={["A", "B", "C"]}
/>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: 'white',
  },
});
