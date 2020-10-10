import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'

const {height, width} = Dimensions.get('window');

const VerifyOtp = ({navigation, route}) => {
  const {nomorHp, kodeOtp} = route.params;
  const [verifyCodeOtp, setVerifyCodeOtp] = useState();
  const [warningError, setWarningError] = useState('');

  const proses = (verifyCodeOtp) => {
    if (verifyCodeOtp.length > 5 && !isNaN(verifyCodeOtp)) {
      if (verifyCodeOtp == kodeOtp) {
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
              if (responseJson.token) {
                  AsyncStorage.setItem('session_id', 'session_id'+Math.random())
                navigation.replace('MyTab');
              }
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        setWarningError('INVALID CODE');
      }
    } else {
      setWarningError('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09ab54" />
      <View style={styles.wrapper}>
        <Text style={styles.titHeader}>Verivikasi</Text>
        <Text style={styles.subTitHeader}>Enter the 6-digit code sent to</Text>
        <Text style={styles.subTitHeader1}>{`0${nomorHp}`}</Text>

        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Enter Code"
            maxLength={13}
            onChangeText={(verifyCodeOtp) => {
              setVerifyCodeOtp(verifyCodeOtp);

              if (verifyCodeOtp.length > 5) {
                proses(verifyCodeOtp);
              }
            }}
            keyboardType="numeric"
            // onFocus={onFocusForm}
            // onBlur={onBlurForm}
            value={verifyCodeOtp}
          />
        </View>
      </View>
      <View style={styles.wrapperInvalidCode}>
        <Text style={styles.invalidCode}>{warningError}</Text>
      </View>
    </View>
  );
};

export default VerifyOtp;

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
  wrapperInvalidCode: {
    padding: 20,
  },
  invalidCode: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
});
