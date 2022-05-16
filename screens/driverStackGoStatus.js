import React from 'react';
import { Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../supabase-service';

// function navigateToDriverStatusOngoingScreen() {
//     navigation.navigate("driverGoRideStatus");
// }

export default function driverGoS() {
    const navigation = useNavigation();

    function navigateToHomeScreen() {
      updateRideIDStatus(rideid);
      navigation.popToTop()
  }

  //update the ride_status to ongoing
  async function updateRideIDStatus(itemid) {
    console.log(itemid);
    console.log("hello_ride_completed");
    const { data, error } = await supabase
    .from('rides_broadcasted')
    .update({ rideStatus: "COMPLETED" })
    .eq('id', itemid)
  }

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Ride ongoing</Text>
    <TouchableOpacity style = {styles.confirmBtn} onPress={() => navigateToHomeScreen()}>
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