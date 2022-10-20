import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

// Como usar: title, onPress, buttonColor es el color de fondo, titleColor es el color
// de la tipografia buttonStyle es para dar estilos diferentes tiene estilos por 
// default textStyle es para cambiar los estilos de la tipografia tal como size, weight, etc.
// simplemente importa el Button donde lo necesites.
//  CODIGO DE EJEMPLO 
// <CustomBtn
//         buttonColor="transparent"
//         titleColor="#000"
//         title="CANCEL"
//         buttonStyle={{
//           width: '40%',
//           alignSelf: 'center',
//           borderWidth: 1,
//           borderColor: '#1c1c1c',
//           borderRadius: 6,
//         }}
//         textStyle={{fontSize: 20}}
//         onPress={() => Alert.alert('Me Clickearon.')}
//       />

const CustomBtn = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || '#570e7e',
        
      }}
      onPress={onPress}>
      <Text
        style={{...styles.title, ...textStyle, color: titleColor, fontWeight: 'bold' || '#f1f1f1'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    backgroundColor: '#512DA8',
    width: 150,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});