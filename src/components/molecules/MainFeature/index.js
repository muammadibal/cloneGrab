import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MainFeature = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: '25%', alignItems: 'center'}}>
      <Image style={styles.icMainFeature} source={icon} />
      <Text style={styles.textMainFeature}>{title}</Text>
    </TouchableOpacity >
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  wrapperMainFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  icMainFeature: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  textMainFeature: {
    textAlign: 'center',
    marginTop: 4,
  },
});
