import React from 'react';
import { Dimensions, FlatList, ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './styles';
import cars from './cars';
import Caritem from '../Caritem';

const CarsList = (props) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={({item}) => <Caritem car={item}/>}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('screen').height}
        />
      </View>
    );
}


export default CarsList;