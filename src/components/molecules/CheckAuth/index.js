import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const CheckAuth = ({navigation}) => {
    useEffect(() => {
      const _validasiSession = async () => {
        const isLogin = await AsyncStorage.getItem('session_id');
        if (isLogin) {
          navigation.replace('MyTab');
          // setTimeout(() => {
          // }, 3000);
        } else {
          navigation.navigate('Login');
        }
      };
      _validasiSession();
    }, []);
    
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color="#09ab54" />
      </View>
    );
}

export default CheckAuth

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
})
