import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { createUseModal } from "react-native-use-modal"
import { ModalResultType } from 'react-native-use-modal';



export  {ModalResultType};

export const useModalDialog = 
  createUseModal(({ confirm, cancel, param }) => {

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{param.title}</Text>
        <Text style={styles.messageText}>{param.message}</Text>
        { param.image ? (
        <Image style={styles.image}
          resizeMode={"cover"}
          source = {param.image}
          />):''}
          
        <TouchableOpacity style={styles.confirmButton} onPress={confirm}>
          <Text style={styles.confirmButtonText}>{param.btn_confirm}</Text>
        </TouchableOpacity>
        {param.btn_cancel ? (

        <TouchableOpacity style={styles.confirmButton} onPress={cancel}>
          <Text style={styles.confirmButtonText}>{param.btn_cancel}</Text>
        </TouchableOpacity>):''}
      </View>
    )
  });


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 16,
      margin: 16,
      borderRadius: 14,
    },
    titleText: {
      fontSize: 20,
      alignSelf: 'center',
    },
    messageText: {
      fontSize: 14,
      marginTop: 4,
    },
    confirmButton: {
      alignSelf: 'center',
      backgroundColor: '#2a9d8f',
      paddingVertical: 8,
      paddingHorizontal: 24,
      marginTop: 16,
      borderRadius: 8,
    },
    confirmButtonText: {
      color: '#fff',
    },
    image: {
      color: '#fff',
      width: '100%',
      height: undefined,
      aspectRatio: 1, 
    },
 
  });




