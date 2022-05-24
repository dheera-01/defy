import React from 'react';
import { useState,useEffect } from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react/cjs/react.production.min';
import { supabase } from '../supabase-service';

export default function driverS() {
    const [ridePin, onChangeRidePin] = React.useState(null);
    const[fetchedPin, setFetchedPin] = useState();

    useEffect(() => {
      supabase
      .from('rides_broadcasted')
      .select('ridePin')
      .eq('id',rideid)
      .then(({data}) => {setFetchedPin(data)});
  });

    const navigation = useNavigation();

    function navigateToDriverStatusOngoingScreen() {
        // fetchRidePin(rideid);
        // console.log("comparing ride pin");
        // console.log(ridePin);
        // console.log(fetchedPin[0].ridePin);
        if(fetchedPin[0].ridePin == ridePin){
          updateRideIDStatus(rideid);
          navigation.navigate("driverGoRideStatus");
        }else{
          console.log("Ride Pin is wrong!");
          window.alert("Ride Pin is wrong!");
        }     
    }

    //fetch the pin from server
    // async function fetchRidePin(itemid){
    //     supabase
    //   .from('rides_broadcasted')
    //   .select('ridePin')
    //   .eq('id',itemid)
    //   .then(({data}) => {setFetchedPin(data)});
    // }

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
    <TextInput
        onChangeText={onChangeRidePin}
        value={ridePin}
        placeholder="Enter the RIDE PIN"
        keyboardType="numeric"
    />

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