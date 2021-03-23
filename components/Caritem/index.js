import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const Caritem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <View >
          <StyledButton 
            type="primary" 
            content="Custom Order" 
            onPress={() => {
              console.warn("Custom Order Pressed")
            }}
          />
          <StyledButton 
            type="secondary" 
            content="Existing Inventory"
            onPress={() => {
              console.warn("Existing Inventory Pressed")
            }}
          />
        </View>
      </View>
    );
}

export default Caritem;