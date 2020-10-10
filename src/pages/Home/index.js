import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  imgAyamPenyet,
  imgBakso,
  imgBanner,
  imgRendang,
  imgSate,
  imgSoto,
  imgTumpeng,
  IcBike,
  IcCar,
  IcDoctor,
  IcFood,
  IcMore,
  IcPulsa,
  IcSend,
  IcSubscribe,
} from '../../assets';
import {MainFeature, OvoComponent, PromoItems} from '../../components/molecules';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={imgBanner} style={styles.imgBanner} />
      <Text style={styles.greetingText}>Selamat Siang</Text>

      <View style={styles.warpperOvo}>
        <View style={styles.textOvo}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
            Ovo Balance
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
            Rp. 1.000.000
          </Text>
        </View>

        <View style={styles.line} />

        <OvoComponent />
      </View>

      <View style={styles.mainFeature}>
        <MainFeature icon={IcFood} title="Food" onPress={() => navigation.navigate('Food')}/>
        <MainFeature icon={IcBike} title="Bike" />
        <MainFeature icon={IcCar} title="Car" />
        <MainFeature icon={IcSend} title="Delivery" />
        <MainFeature icon={IcSubscribe} title="Subscription" />
        <MainFeature icon={IcDoctor} title="Doctor" />
        <MainFeature icon={IcPulsa} title="Pulsa/Token" />
        <MainFeature icon={IcMore} title="More" />
      </View>

      <View style={styles.divider} />

      <View style={styles.containerPromoItems}>
        <PromoItems expiredDiskon="Until 19 Okt"
          title="Rendang Makanan Khas Padang"
          image={imgRendang}
          diskon="Diskon 40%"
        />
        <PromoItems expiredDiskon="Until 19 Okt"
          title="Sate Pak Dadang Selalu di Hati"
          image={imgSate}
          diskon="Diskon 40%"
        />
        <PromoItems expiredDiskon="Until 19 Okt" title="Nyoto adalah teman dikala hujan" image={imgSoto} />
        <PromoItems expiredDiskon="Until 19 Okt" title="Syukuran tuh pake tumpeng" image={imgTumpeng} />
        <PromoItems expiredDiskon="Until 19 Okt"
          title="Gwaahhhh Pedesnya bikin Nagihhh"
          image={imgAyamPenyet}
          diskon="Diskon 40%"
        />
        <PromoItems expiredDiskon="Until 19 Okt" title="Bakso baksooooo" image={imgBakso} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  imgBanner: {
    height: 140,
    width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40,
    color: '#383838',
    width: width,
    textAlign: 'center',
  },
  warpperOvo: {
    backgroundColor: 'white',
    height: 145,
    marginHorizontal: 18,
    marginTop: -60,
    elevation: 4,
    borderRadius: 10,
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  line: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  divider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
  mainFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
    width: '100%',
  },
  containerPromoItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginHorizontal: 18,
  },
});
