import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function Card() {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/SadCat.jpg')}></Image>
        <Text style={styles.textSub} >Sad Cat</Text>
        <Text style={styles.textSub} >Rp 500.000</Text>
        <Button color="#153448" title="Buy"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 310,
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 225,
    padding: 10,
    alignSelf: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
  textSub: {
    padding: 5,
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
});
