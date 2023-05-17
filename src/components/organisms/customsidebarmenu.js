// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
// https://dblazeski.medium.com/react-native-drawer-custom-one-8e03510b8cc1

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Switch
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { useState } from 'react';

import SwitchSelector from "react-native-switch-selector";
import RadioGroup from 'react-native-radio-buttons-group';


const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const profileImage = 'react_logo.png';

    const switchoptions = [
      { label: "EN", value: "en-EN" }, //0
      { label: "IT", value: "it-IT" }, //1
      { label: "FR", value: "fr-FR" }, //2 
      { label: "ES", value: "es-ES" }, //3
      { label: "DE", value: "de-DE" }  //4
    ]; 
    let initial = 0


  const [radioButtons, setRadioButtons] = useState([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'disabled',
        value: 'NONE',
        selected: true,
        color: 'rgb(255,100,100)',
    },
    {
        id: '2',
        label: 'NFC',
        value: 'NCF'
    }
    ,
    {
        id: '3',
        label: 'GPS',
        value: 'GPS'
    }
    ,
    {
        id: '4',
        label: 'Bluetooth',
        value: 'Bluetooth'
        
    }
  ]);


  function onPressLanguageSelector(value, radioButtons){

    // update the precomutped translations
    let radioButtonsArray = radioButtons["radioButtons"]
    
    let obj = radioButtonsArray.find((o, i) => {
      if (o.id === '1') {
        radioButtonsArray[i] = { 
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'disabled',
            value: 'NONE',
            selected: o.selected,
            color: 'rgb(255,100,100)',
          };
          return true; // stop searching
      }
    });
    setRadioButtons(radioButtonsArray);

    // refresh the components
    forceUpdate();

  }

  function onPressRadioButton(radioButtonsArray) {
    
    
    let obj = radioButtonsArray.find((o, i) => {
      if (o.selected ) {
          //check sensors
          return true; // stop searching
      }
    });
    
    
    setRadioButtons(radioButtonsArray);
  }

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image  
      style={styles.iconStyle}
      style={styles.sideMenuProfileIcon}
      */}
      <View
            style={styles.sideMenuProfileIcon}
          >
            <Text style={styles.header}
>BlueTracker</Text>
            </View>
      <DrawerContentScrollView {...props}>


      <Text style = {styles.itemLabel}>{'language'}</Text>
      <SwitchSelector
            options={switchoptions}
            initial={initial} // todo
            style = {styles.switchItem}
            buttonColor="rgb(40, 80, 100)"
            selectedColor="white"
            borderColor="blue"
            textColor="black"
            onPress={(value) => {
              onPressLanguageSelector(value, {radioButtons})
            }}
          />


        <Text style = {styles.itemLabel}>{'mode'}</Text>
        <RadioGroup
            radioButtons={radioButtons} 
            onPress={onPressRadioButton}
            containerStyle={styles.radioGroup}
        /> 
   
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

/*

     <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
 
        </View>
*/

const styles = StyleSheet.create({
  header:{
    marginTop: 40,
    marginLeft: 30,
    fontSize: 24,
    fontWeight: "700",
    color: 'white'

  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: '100%',
    height: 80,
    alignSelf: 'center',
    backgroundColor: 'rgb(0, 149, 169)',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchItem: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 10,
  },
  radioGroup: {

    alignItems: 'stretch',
    paddingVertical: 8,
    paddingLeft: 5

  },
  itemLabel: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    paddingLeft: 15,
    marginTop: 5,
  }

});

export default CustomSidebarMenu;
