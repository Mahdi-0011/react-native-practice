import React from "react";
import { StyleSheet,Text, SafeAreaView } from "react-native";
import CommentVisualCard from "./practice/CommentVisualCard";
import { CommentListWidget } from "./practice/CommentListWidget";

const comments = [
  {
    creator: 'A',
    content: 'mycket bra!',
    profilePicUrl: 'https://i.pravatar.cc/150?img=1',
    likes: ['user1', 'user2'],
  },
  {
    creator: 'B',
    content: 'jag gillar det.',
    profilePicUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    creator: 'C',
    content: 'nice👌',
    profilePicUrl: 'https://i.pravatar.cc/150?img=3',
    likes: ['user4'],
  },
];


export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeview}>
    {/* <Text>hello </Text>

<CommentVisualCard
  creator="Jax"
  content=" Här är en kommentar som är 
  ganska lång och innehåller
  mycket text för att visa hur det 
  ser ut när det är mer än en rad."
  profilePicUrl="https://reactnative.dev/img/tiny_logo.png"
  likes={["A", "B", "C"]}
/> */}

<CommentListWidget comments={comments} />
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
