import { StyleSheet, Text, View, Image } from 'react-native';



type DeviceItemProps = {
    id: string,
    name: String,
    mac: String,
    tracking: Boolean,
    distance: Number,
};


export const DeviceItem = (props: DeviceItemProps) => {
    console.log(props);
    let t = props.item.tracking;
    let o = false; // out or range

    return (
        
        <View style={t ? o ? styles.containerTrackingOut : styles.containerTrackingIn : styles.container }>        
             <View style={styles.containerLeft}>
                <Text style={styles.name}>{props.item.title}</Text>
                <Text style={styles.mac}>{props.item.mac}</Text>
             </View>
             <View style={styles.containerRight}>
                <Text style={styles.distance}>{props.item.distance}</Text>
            </View>
        </View>
    );
  }


  const styles = StyleSheet.create({

    container: {
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingVertical: 10,
        marginVertical: 1
    },
    containerTrackingIn: {
        backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingVertical: 10,
        marginVertical: 1
    },
    containerTrackingOut: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingVertical: 10,
        marginVertical: 1
    },

    containerLeft: {
        flexDirection: 'column',
        flex: 1
    },


    containerRight: {
        flex: 1,
        flexDirection: 'row-reverse',
        paddingEnd: 10
    },

    name: {
        fontSize: 12,
        fontWeight: "600",
        textTransform: 'uppercase',
        color: 'white'

    },
    mac: {
        fontWeight: "400",
        color: 'white',

    },
    distance:{ 
        flex: 1,
        fontSize: 18,
        color: 'white',
        textAlign: 'right',


    }

  });