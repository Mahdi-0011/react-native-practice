import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <>
    <SafeAreaView>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>

      <View style={styles.view1}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello this is me</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
            <View style={styles.view1}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello this is me</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
            <View style={styles.view1}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello this is me</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
            <View style={styles.view1}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello this is me</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
    </View>
          </ScrollView>
    </SafeAreaView>
  </SafeAreaView>
 </>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 1000, 
    backgroundColor: 'blue',
    padding: 2,
    

    flexDirection: 'column',
  },
  view1: {
    flex: 2,
    backgroundColor: '#eee',
        alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#fcc',
  },
  view3: {
    flex: 2,
    backgroundColor: 'orange',
  },
  view4: {
    flex: 3,
    backgroundColor: 'skyblue',
  },
});
