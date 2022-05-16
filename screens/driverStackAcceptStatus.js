import React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react/cjs/react.production.min';
import { supabase } from '../supabase-service';

export default function driverS() {
    const navigation = useNavigation();

    function navigateToDriverStatusOngoingScreen() {
        updateRideIDStatus(rideid);
        navigation.navigate("driverGoRideStatus");
    }

    //update the ride_status to ongoing
    async function updateRideIDStatus(itemid) {
      console.log(itemid);
      console.log("hello_ride_ongoing");
      const { data, error } = await supabase
      .from('rides_broadcasted')
      .update({ rideStatus: "ONGOING" })
      .eq('id', itemid)
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