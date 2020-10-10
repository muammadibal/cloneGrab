import React, { useEffect } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { imgSplash } from '../../assets'

const {height, width} = Dimensions.get('window')

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('CheckAuth')
        }, 3000);
    }, [])

    return (
        <ImageBackground source={imgSplash} style={styles.page}/>
    );
}

export default Splash

const styles = StyleSheet.create({
    page: {
        height: height,
        width: width
    }
})
