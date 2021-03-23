import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const {type, content, onPress} = props;
    const bgColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const fontColor = type !== 'primary' ? '#171A20' : '#FFFFFF';

    return (
      <View style={styles.container}>
        <Pressable style={[styles.button, {backgroundColor:bgColor}]} onPress={() => onPress()}>
          <Text style={[styles.text, {color: fontColor}]}>{content}</Text>
        </Pressable>
      </View>
    );
}


export default StyledButton;