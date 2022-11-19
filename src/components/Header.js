import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export function Header() {
  const image = require('../assets/bg.jpg');

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.coverView}>
        <Text style={styles.textHeader}>ToDo List</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  coverView: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
});
