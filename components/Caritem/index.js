import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

export default Caritem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View>
    );
}