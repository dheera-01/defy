import React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react/cjs/react.production.min';


export default function driverS() {
    const navigation = useNavigation();

    function navigateToDriverStatusOngoingScreen() {
        navigation.navigate("driverGoRideStatus");
    }

    return (
            
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {/* <Text>{itemid}</Text> */}
    <TouchableOpacity style={styles.confirmBtn} onPress={() => navigateToDriverStatusOngoingScreen()}>
    <Text style = {styles.buttonText}>Go</Text>
    </TouchableOpacity>
    </View>
    
    );
}

const styles = StyleSheet.create({
    confirmBtn:{
        width:"4%",
        backgroundColor:"#0047ab",
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