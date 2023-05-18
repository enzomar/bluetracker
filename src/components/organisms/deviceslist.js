import { View, FlatList, Text, StatusBar, Linking } from 'react-native';
import { TouchableOpacity, Fragment, RandomComponent } from "react-native";
import { DeviceItem } from '../molecules/deviceitem';
import { SwipeListView } from 'react-native-swipe-list-view';
import React, { useState } from 'react';
import { useEditModalDialog } from "./editmodaldialog";

import {
    StyleSheet,
    TouchableHighlight,
} from 'react-native';



export const DevicesList = (props) => {

    const [tracked, setTracked] = useState([]);
    const [devices, setDevices] = useState(props.devices);

    const editModalDialog = useEditModalDialog();

    const updateTracking = (key, value) => {
        console.log(key, value);
        console.log(devices);
        let objIndex = devices.findIndex((obj => obj.mac == key));
        if (objIndex >= 0){
           const newData = [...devices];
           newData[objIndex].tracking = value;
           setDevices(newData);
        }
       };

    const updateName = (key, value) => {
     console.log(key, value);
     console.log(devices);
     let objIndex = devices.findIndex((obj => obj.mac == key));
     if (objIndex >= 0){
        const newData = [...devices];
        newData[objIndex].title = value;
        setDevices(newData);
     }
    };

    function TrackingButton(props){
        if (props.isTracked){
            return <Text style={styles.backTextWhite}>Track OFF</Text>
        }else{
            return <Text style={styles.backTextWhite}>Track ON</Text>
        }
    }

    const renderHiddenItem = (data, rowMap) => (
      <View style={styles.rowBack}>
          <TouchableOpacity
              style={[styles.Btn, styles.BtnLeft]}
              onPress={() => editRow(rowMap, data.item.mac, data.item)}
          >
              <Text style={styles.backTextWhite}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.Btn, styles.BtnCenter]}
              onPress={() => toggleTracking(rowMap, data.item.mac)}
          >
            <TrackingButton isTracked={isTracked(data.item.mac)}></TrackingButton>  
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.Btn, styles.BtnRight]}
              onPress={() => onTouchMe(rowMap, data.item.mac, data.item)}>
              <Text style={styles.backTextWhite}>View</Text>
          </TouchableOpacity>
      </View>
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }

};


const editRow = (rowMap, rowKey, item) => {
    if (rowMap[rowKey]) {
        console.log(item);
        editModalDialog.show({
            title: 'Edit',
            message: item.title,
            btn_confirm: 'Save',
            btn_cancel: 'Close',
            key: item.mac,
            save: updateName,
        });
        rowMap[rowKey].closeRow();
        console.log(this);
    }
};



const isInRange = (rowKey) => {
    return true;
};

const isTracked = (rowKey) => {
    if(tracked.indexOf(rowKey) > -1){
        return true;
    }
    return false;
};

const toggleTracking = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
        if (isTracked(rowKey)){
            //remove
            setTracked(tracked.filter(item => item !== rowKey));
            updateTracking(rowKey, false);
        }else{
            //add
            setTracked(tracked.concat([rowKey]));
            updateTracking(rowKey, true);

        }
        rowMap[rowKey].closeRow();
    }
};

const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};

const onTouchMe = (rowMap, rowKey, item) => {
    console.log('You touched me: '+item.mac);
    let lat = 45.2342;
    let lng = 23.33523;
    let url = "https://maps.google.com/?q="+lat+','+lng
    Linking.openURL(url);
    closeRow(rowMap, rowKey);

}

const renderItem = data => (
  <TouchableHighlight
      style={styles.rowFront}
      underlayColor={'#AAA'}
  >
    <View>
      <DeviceItem item={data.item} />
      </View>
  </TouchableHighlight>
);


return (
  <View style={styles.container}>

 <SwipeListView
        data={devices}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={item => item.mac}
        rightOpenValue={-225}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
  </View>
  );

};

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      marginVertical: 10,
  },
  backTextWhite: {
      color: '#FFF',
  },
    rowFront: {
      backgroundColor: '#CCC',
    },
  rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
  Btn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      padding: 1,
      width: 75,
  },
  BtnLeft: {
      backgroundColor: 'blue',
      right: 150,
  },
  BtnCenter: {
    backgroundColor: 'blue',
    right: 75,
},
    BtnRight: {
      backgroundColor: 'blue',
      right: 0,
  },
});







