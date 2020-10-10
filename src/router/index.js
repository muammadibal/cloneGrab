import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Account, Activity, Food, Home, Inbox, Login, Payment, Splash, VerifyOtp } from '../pages';
import {IcActivity, IcActivityActive, IcHome, IcHomeActive, IcInbox, IcInboxActive, IcNavAccount, IcNavAccountActive, IcPayment, IcPaymentActive} from '../assets'
import { CheckAuth } from '../components/molecules';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckAuth"
        component={CheckAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTab"
        component={MyTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyTab = () => {
      return (
        <Tab.Navigator
          shifting={false}
          barStyle={{backgroundColor: 'white', borderWidth: .3, borderColor: 'lightgrey'}}
          activeColor="#09ab54"
          inactiveColor="#676767">

          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                  {color === '#09ab54' ? (
                    <Image
                      source={IcHomeActive}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image source={IcHome} style={{width: 30, height: 30}} />
                  )}
                </View>
              ),
            }}
          />

          <Tab.Screen name="Activity" component={Activity} 
            options={{
              tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                  {color === '#09ab54' ? (
                    <Image
                      source={IcActivityActive}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image source={IcActivity} style={{width: 30, height: 30}} />
                  )}
                </View>
              ),
              tabBarBadge: 1,
            }}
          />

          <Tab.Screen name="Inbox" component={Inbox} 
            options={{
              tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                  {color === '#09ab54' ? (
                    <Image
                      source={IcInboxActive}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image source={IcInbox} style={{width: 30, height: 30}} />
                  )}
                </View>
              ),
            }}
          />

          <Tab.Screen name="Payment" component={Payment} 
            options={{
              tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                  {color === '#09ab54' ? (
                    <Image
                      source={IcPaymentActive}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image source={IcPayment} style={{width: 30, height: 30}} />
                  )}
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                  {color === '#09ab54' ? (
                    <Image
                      source={IcNavAccountActive}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image source={IcNavAccount} style={{width: 30, height: 30}} />
                  )}
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      );
}



export default Router

const styles = StyleSheet.create({})
