import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Caritem from './components/Caritem';

export default function App() {
  return (
    <View style={styles.container}>
      <Caritem 
        name={"Model 3"} 
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/Model3.jpeg')}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width:'100%',
    height:'100%'
  },
  titles:{
    marginTop:'30%',
    width:'100%',
    alignItems:"center"
  },
  title:{
    fontSize:40,
    fontWeight:"500"
  },
  subtitle:{
    fontSize:16,
    color:"#5c5e62"
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:"absolute"
  }

});
