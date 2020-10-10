import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Account = ({navigation}) => {

    const _logout = async () => {
        try {
            await AsyncStorage.removeItem('session_id')
            navigation.replace('Login')
        } catch (err) {
            
        }
    }

    return (
        <View style={styles.page}>
            <TouchableOpacity style={styles.btnLogout} onPress={_logout}>
                <Text style={styles.titLogout}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center'
    },
    btnLogout: {
        backgroundColor: 'lightblue',
        height: 40,
        width: 100, 
        alignSelf: 'center',
        justifyContent: 'center'
    },
    titLogout: {
        fontSize: 15,
        alignSelf: 'center'
    }
})
