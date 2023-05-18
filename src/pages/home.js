import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect, useState, NativeModules} from 'react';
import { DevicesList } from "../components/organisms/deviceslist";
import { Button } from 'react-native-elements';
import useBLE from '../services/useBLE';



export const Home = (props) => {

/*
id
name
rssi
mtu
manufacturerData
localName
*/
  const trackedDevices = [
    {
      title: 'First Item',
      mac: '01:00:0C:CC:CC:CC',
      distance: 9,

    },
    {
      title: 'Second Item',
      mac: '01:80:C2:00:00:00',
      tracking: false,
      distance: 5,


    },
    {
      title: 'Third Item',
      mac: '00-B0-D0-63-C2-26',
      tracking: true,
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
    <View style={styles.container} >
       <View style={styles.content}>
          <Text>BANNER</Text>
          
          <DevicesList devices={trackedDevices}></DevicesList>
          {allDevices.map((device)=> (
          <Text key={device.id}>{device.name}</Text>
          ))}
          </View>
          <View style={styles.footer}>
            <Button style={styles.footer} title="Discover Devices" onPress={discoverDevices} />
          </View>
        </View>
  

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
    },
    content: {
      flex: 1
    },
    footer: {
      backgroundColor: "white",
      padding: 3
    }
  });
  