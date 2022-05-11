import React from 'react';
import { Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// function navigateToDriverStatusOngoingScreen() {
//     navigation.navigate("driverGoRideStatus");
// }

export default function driverGoS() {
    const navigation = useNavigation();

    // function navigateBack() {
    //     navigation.navigate('DrawerStack1');
    // }
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Ride ongoing</Text>
    <TouchableOpacity style = {styles.confirmBtn} onPress={() => navigation.popToTop()}>
    <Text style = {styles.buttonText}>Stop</Text>
    </TouchableOpacity>
    </View>
    
    );
}

const styles = StyleSheet.create({
    confirmBtn:{
        width:"4%",
        backgroundColor:"#ff0000",
        borderRadius:25,
        borderColor:"#ffffff",
        borderWidth:1,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        // marginTop:9,
        // marginBottom:9
        margin:9,
      },
      buttonText:{
        fontWeight:'bold',
        color:"white"
      },
});