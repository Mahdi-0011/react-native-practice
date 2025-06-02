import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.header}>
          <Text style={styles.title}>Header</Text>
        </View>

        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.title}>body</Text>
          {children}
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.title}>footer</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#b0c4de",
    flex: 1,
  },
  header: {
    backgroundColor: "#faf0e6",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "rgb(234, 214, 179)",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 80,
  },
  footer: {
    backgroundColor: "plum",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
