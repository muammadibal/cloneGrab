import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { IcPay, IcReward, IcTopUp } from '../../../assets';

const OvoComponent = () => {
    return (
      <View style={styles.wrapperPay}>
        <View>
          <Image style={styles.ovoFeatureImage} source={IcPay} />
          <Text style={{alignSelf: 'center', marginTop: 5}}>Pay</Text>
        </View>
        <View>
          <Image style={styles.ovoFeatureImage} source={IcTopUp} />
          <Text style={{alignSelf: 'center', marginTop: 5}}>Top Up</Text>
        </View>
        <View>
          <Image style={styles.ovoFeatureImage} source={IcReward} />
          <Text style={{alignSelf: 'center', marginTop: 5}}>Rewards</Text>
        </View>
      </View>
    );
}

export default OvoComponent;

const styles = StyleSheet.create({
    wrapperPay: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ovoFeatureImage: {
        height: 45,
        width: 45,
        marginTop: 17,
        marginHorizontal: 38
    }
})
