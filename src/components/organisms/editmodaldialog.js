import { View, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { createUseModal } from "react-native-use-modal"
import { ModalResultType } from 'react-native-use-modal';
import React, { useState } from 'react';




export  {ModalResultType};

export const useEditModalDialog = 
  createUseModal(({ confirm, cancel, param }) => {

    const [text, onChangeText] = useState(param.message);

    const save = () => {
        if (text){
            param.save(param.key, text);
        }
        confirm();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{param.title}</Text>

        <TextInput 
            style={styles.messageText} 
            defaultValue={param.message}
            onChangeText={onChangeText}
            editable={true}
            />

        <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonClose} onPress={cancel}>
            <Text style={styles.buttonText}>{param.btn_cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={save}>
            <Text style={styles.buttonText}>{param.btn_confirm}</Text>
            </TouchableOpacity>

        </View>
      </View>
    )
  });


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 16,
      margin: 16,
      borderRadius: 11,
      flexDirection: 'column',
      width: 300, 
      height: 300

    },
    titleText: {
      fontSize: 20,
      fontWeight: "600",
      alignSelf: 'center',
    },
    messageText: {
      fontSize: 24,
      marginTop: 4,
      borderColor: '#5588fb',
      borderWidth: 3,
      height: 55,
    },
    buttons: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
      alignSelf: 'center',
      backgroundColor: '#2a9d8f',
      paddingVertical: 8,
      paddingHorizontal: 24,
      marginTop: 16,
      borderRadius: 8,
      height: 85

    },
    buttonClose: {
        alignSelf: 'center',
        backgroundColor: 'red',
        paddingVertical: 8,
        paddingHorizontal: 24,
        marginTop: 16,
        borderRadius: 8,
        height: 85
    },
    buttonText: {
      color: '#fff',
      alignContent: 'center'
    },
    image: {
      color: '#fff',
      width: '100%',
      height: undefined,
      aspectRatio: 1, 
    },
 
  });




