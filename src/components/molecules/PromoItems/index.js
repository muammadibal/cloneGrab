import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window')

const PromoItems = ({image, title, diskon, expiredDiskon}) => {
  return (
      <TouchableOpacity style={styles.wrapper}>
        <Image style={styles.promoImage} source={image} />
        <View style={styles.textPromo}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{title}</Text>
        </View>

        {diskon && (
          <TouchableOpacity style={styles.diskon}>
            <Text>{diskon}</Text>
          </TouchableOpacity>
        )}

        <View style={{ marginLeft: 10, marginBottom: 8, flexDirection: 'row' }}>
          <Icon name="ios-calendar" size={20} color="#575757"/>
        <Text style={{ marginLeft: 8, fontSize: 13, color: '#575757', textAlignVertical: 'center' }}>{expiredDiskon}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default PromoItems;

const styles = StyleSheet.create({
    wrapper: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 8,
    width: width / 2-27,
    marginRight: 18,
    marginBottom: 18,
  },
  promoImage: {
      width: width/2-27,
      height: width/2-27,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
  },
  textPromo: {
      marginLeft: 10,
      marginVertical: 10
  },
  diskon: {
      position: 'absolute',
      top: 10,
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 3,
      left: 5
  }
});
