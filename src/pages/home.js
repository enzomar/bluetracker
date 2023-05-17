import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect, useState, NativeModules} from 'react';
import { DevicesList } from "../components/organisms/deviceslist";
import { Button } from 'react-native-elements';
import useBLE from '../services/useBLE';



export const Home = (props) => {


  const DATA = [
    {
      title: 'First Item',
      mac: '01:00:0C:CC:CC:CC',
      distance: 9,

    },
    {
      title: 'Second Item',
      mac: '01:80:C2:00:00:00',
      tracking: 'false',
      distance: 5,


    },
    {
      title: 'Third Item',
      mac: '00-B0-D0-63-C2-26',
      tracking: 'true',
      distance: 20,

    },
  ];

  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
  } = useBLE();

  const discoverDevices = () => {
    console.log(allDevices);
    console.log('discoverDevices');
    requestPermissions(isGranted => {
      console.log('requestPermissions');
      console.log(isGranted);
      if (isGranted) {
        console.log('scanForPeripherals');
        scanForPeripherals();
        console.log(allDevices);
      }
    });
  };


  return (
    <View style={styles.container}>
        <View onStartShouldSetResponder={
          () => props.navigation.navigate('MainNavigator')
          }> 
        <Text>BANNER</Text>

        <DevicesList devices={DATA}></DevicesList>

        <Button title="Discover Devices" onPress={discoverDevices} />
        {allDevices.map((device)=> (
          <Text key={device.id}>{device.name}</Text>
        ))}
        </View>
    </View>

    );
  }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    }
  
  });