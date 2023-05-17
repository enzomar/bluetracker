import { Home } from "../pages/home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from "../components/organisms/customsidebarmenu";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useModalDialog } from "../components/organisms/modaldialog";
import DrawerItemList from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
    const qrModalDialog = useModalDialog();

    return (

<NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'left',
            drawerHideStatusBarOnOpen: false,
            headerStyle: {
              backgroundColor: 'rgb(254, 254, 254)'
            },
            headerTintColor: 'rgb(40, 80, 100)'
          }}  
          drawerContent={ (props) => 
            <CustomSidebarMenu {...props} />
            }
        >
        <Drawer.Screen 
        name='BlueTracker' 
        component={Home} />
        </Drawer.Navigator> 

      </NavigationContainer>
    );

  }

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      padding: 10
    }
  });
  