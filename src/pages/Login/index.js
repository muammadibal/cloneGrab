import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'


const {height, width} = Dimensions.get('window')

const Login = ({navigation}) => {
  const [displaySosmed, setDisplaySosmed] = useState('flex');
  const [nomorHp, setNomorHp] = useState();
  const [ButtonSosmed, setButtonSosmed] = useState('Or Continue with a social media...');

  const onFocusForm = () => {
    setDisplaySosmed('none')
    setButtonSosmed('Continue');
  }
  
  const onBlurForm = () => {
    setDisplaySosmed('flex')
    setButtonSosmed('Or Continue with a social media...')
  }

  const setChange = (nomorHp) => {
    setNomorHp(nomorHp);

    if (nomorHp.length > 9 && nomorHp.length < 12 && nomorHp.substr(0,1) == '8' && !isNaN(nomorHp)) {
      setButtonSosmed('Continue');
    } else {
      setButtonSosmed('Or Continue with a social media...');
    }
  };

  const proses = () => {
      if (
        nomorHp.length > 9 &&
        nomorHp.length < 12 &&
        nomorHp.substr(0, 1) == '8' &&
        !isNaN(nomorHp)
      ) {

        try {
          fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'eve.holt@reqres.in',
              password: 'password',
            }),
          })
          .then((response) => response.json())
          .then((responseJson) => {
            // console.log(responseJson)
            navigation.navigate('VerifyOtp', {nomorHp, kodeOtp: 123456} )
          })
  
        } catch (err) {
          console.log(err)
        }
      } 
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09ab54" />
      <View style={styles.wrapper}>
        <Text style={styles.titHeader}>Greb</Text>
        <Text style={styles.subTitHeader}>Welcome</Text>
        <Text style={styles.subTitHeader1}>
          Enter your mobile number to continue
        </Text>

        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="87654321"
            maxLength={13}
            onChangeText={(nomorHp) => setChange(nomorHp)}
            keyboardType="numeric"
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            value={nomorHp}
          />
        </View>
      </View>

      <TouchableRipple style={styles.wrapperContinueSocial} onPress={proses}>
        <Text style={styles.titContinueSocial}>{ButtonSosmed}</Text>
      </TouchableRipple>

      <View style={styles.wrapperBtnContinue(displaySosmed)}>
        <TouchableRipple style={styles.btnFacebook}>
          <Text style={styles.titBtnFacebook}>
            <Icon name="logo-facebook" color="white" /> Facebook
          </Text>
        </TouchableRipple>

        <TouchableRipple style={styles.btnGoogle}>
          <Text style={styles.titBtnGoogle}>
            <Icon name="logo-google" color="green" />
            Google
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: '#09ab54',
  },
  wrapper: {
    marginHorizontal: 18,
    flex: 1,
  },
  titHeader: {
    fontSize: 50,
    color: 'white',
    marginTop: 20,
  },
  subTitHeader: {
    fontSize: 25,
    color: 'white',
    marginTop: 80,
  },
  subTitHeader1: {
    fontSize: 15,
    color: 'white',
  },
  wrapperInput: {
    width: 300,
    height: 53,
    backgroundColor: 'white',
    marginTop: 10,
  },
  input: {
    fontSize: 25,
  },
  wrapperContinueSocial: {
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 20,
  },
  titContinueSocial: {
    color: 'white',
    fontSize: 15,
  },
  wrapperBtnContinue: (displaySosmed) => ({
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: displaySosmed,
  }),
  btnFacebook: {
    backgroundColor: '#2166b0',
    width: 110,
    height: 50,
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 4,
  },
  titBtnFacebook: {
    color: 'white',
    textAlign: 'center',
  },
  btnGoogle: {
    backgroundColor: 'white',
    width: 110,
    height: 50,
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 4,
  },
  titBtnGoogle: {
    color: 'grey',
    textAlign: 'center',
  },
});
