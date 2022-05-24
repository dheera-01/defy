//import { StatusBar } from 'expo-status-bar';
// import React from "react";
import React, { useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  TextInput,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { supabase } from "../supabase-service";

// function MyModal({ isVisible, onClick }) {
//   return (
//     <Modal
//       visible={isVisible}
//       animationType="slide"
//       presentationStyle="overFullScreen"
//       transparent={false}
//     >
//       <SafeAreaView style={styles["modal-container"]}>
//         <Text style={{ paddingTop: 20, fontSize: 22 }}>IN MODAL</Text>
//         <Button onPress={onClick} title="CLOSE"></Button>
//       </SafeAreaView>
//     </Modal>
//   );
// }

function HomeScreen({ navigation }) {
  // const [showModal, setShowModal] = React.useState(false);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button title="ADD" onPress={() => setShowModal(true)}></Button>
  //     ),
  //   });
  // }, [navigation]);

  // return (
  //   <View style={styles.container}>
  //     {/* MODAL */}
  //     <MyModal isVisible={showModal} onClick={() => setShowModal(false)} />
  //     {/* PAGE CONTENT */}
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //     <Button
  //       title="next page"
  //       onPress={() => navigation.navigate("Detail")}
  //     ></Button>
  //   </View>
  // );
  const [lat_p, onChangeLatP] = React.useState(null);
  const [log_p, onChangeLogP] = React.useState(null);
  const [lat_d, onChangeLatD] = React.useState(null);
  const [log_d, onChangeLogD] = React.useState(null);
  const [date,setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Nothing');

  const[datas, setData] = useState([]);

    useEffect(() => {
        supabase
        .from('users')
        .select('*')
        .then(({data}) => {
            if(1){
                setData(data);
            }
        });
        console.log(datas);
        console.log("checking here");
        console.log(supabase.auth.user().id);
    },[]);

  // useEffect(() => {
  //   //fetchMsg()
  //   //insertMsg()
  //   //,insertRideBroad(1,2,3,4,"2022-03-05T22:10:00.000Z")
  //   //console.log(TableData[1]);
  //   //DynamicTable(TableData);
  // },[])

  async function fetchMsg() {
    const {data} = await supabase
    .from('rides_broadcasted_pending')
    .select()
  }

  async function insertMsg() {
    const { data } = await supabase
    .from('rides')
    .insert([
    { msg: '21 March modifciation' }
    ]);
  }

  async function insertRideBroad(lat_p,log_p,lat_d,log_d,dt,userId) {  
    console.log("insertRideBroad called!!");
    const {} = await supabase
    .from('rides_broadcasted_pending')
    .insert([
    { lat_p:lat_p
      ,log_p:log_p
      ,lat_d:lat_d
      ,log_d:log_d
      ,time:dt
      ,userId:userId},
  ]);
  }

  //function called for onPress of Confirm Ride
  const scheduleRide = () => {
    //console.log("confirm button clicked!");
    date.setSeconds(0,0);
    console.log(date);
    insertRideBroad(lat_p,log_p,lat_d,log_d,'2022-03-16T13:56:00.000Z',supabase.auth.user().id);
  }

  async function insertRideBroadNow(lat_p,log_p,lat_d,log_d,dt,userID,ridePin) {  
    console.log("insertRideBroad called!!");
    const {} = await supabase
    .from('rides_broadcasted')
    .insert([
    { lat_p:lat_p
      ,log_p:log_p
      ,lat_d:lat_d
      ,log_d:log_d
      ,time:dt
    ,userID:userID
  ,ridePin:ridePin},
  ]);
  }

  //function called for onPress of Confirm Ride
  const scheduleRideNow = () => {
    //console.log("confirm button clicked!");
    date.setSeconds(0,0);
    console.log(date);
    //2022-03-16 10:47:02.499488+00
    global.ridePin =  Math.floor(100000 + (Math.random() * (999999-100000)));
    console.log(ridePin);
    if(lat_p != null && log_p != null && lat_d != null && log_d != null && ridePin >= 100000 && ridePin <= 999999){
      insertRideBroadNow(lat_p,log_p,lat_d,log_d,'2022-03-16T13:56:00.000Z',supabase.auth.user().id,ridePin);
      navigation.navigate("userScreenRideStatus");
    }else{
      window.alert("Error!");
    }
    
    // ridesBroadcastedSyncUpdate(); //function directs to new screen
    //insertMsg();
  }

  const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'default');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    console.log(tempDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  /*

const ridesBroadcasted = supabase
  .from('rides_broadcasted')
  .on('UPDATE', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
  }*/

  //subscribe function
  // function ridesBroadcastedSyncUpdate(){
  //   console.log("sync function called!");
  //   const {} = supabase
  // .from('rides_broadcasted')
  // .on('UPDATE', payload => {
  //   console.log('Change received!', payload);
  //   navigation.navigate("userScreenRideStatus");
  // })
  // .subscribe();}

  // function navigateToRideStatusScreen() {
  //   navigation.navigate("userScreenRideStatus");
  // }
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PRAVAIG</Text>
      <Text style={styles.logo}>Customer App</Text>
      <Text style={styles.heading}>SCHEDULE RIDE</Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pickup Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmBtn} onPress={() => navigateToRideStatusScreen()}>
          <Text style={styles.buttonText}>navigate Ride</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={onChangeLatP}
        value={lat_p}
        placeholder="Pickup Latitude"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogP}
        value={log_p}
        placeholder="Pickup Longitude"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeLatD}
        value={lat_d}
        placeholder="Drop Latitude"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeLogD}
        value={log_d}
        placeholder="Drop Longitude"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.confirmBtn} onPress={() => scheduleRideNow()}>
          <Text style={styles.buttonText}>Book Ride</Text>
      </TouchableOpacity>
    
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
      <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <TouchableOpacity style={styles.button} onPress={ () => showMode('date')}>
          <Text style={styles.buttonText} >Date</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => showMode('time')}>
          <Text style={styles.buttonText} >Time</Text>
        </TouchableOpacity>

      <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black'}}>Ride Schedule:</Text>
      <Text style={{fontWeight: 'normal',fontSize: 20,color: 'black'}}>{text}</Text>

      <TouchableOpacity style={styles.confirmBtn} onPress={() => scheduleRide()}>
          <Text style={styles.buttonText}>Schedule Ride</Text>
      </TouchableOpacity>


      {show && (
      <DateTimePicker
      testID = 'dateTimePicker'
      value = {date}
      mode = {mode}
      is24Hour = {true}
      display = 'default'
      onChange = {onChange}
      />)}

      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the ProfileScreen page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function HelpScreen(){
  return(
    <View style = {styles.container}>
      <Text>This is the HelpScreen page</Text>
      <StatusBar style ="auto"/>
      </View>
  )
}


function CustomDrawerContent(props) {
  return (
    <>

      <DrawerContentScrollView{...props}>
        <View style = {styles.drawerHeader}>
          <Text style = {{margin:8,fontWeight:"bold"}}>{supabase.auth.user()?.email}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style = {{marginBottom:30}}>
        <Button title="LOGOUT" onPress={async() => {
          props.navigation.closeDrawer();
          //do logout code here
          await supabase.auth.signOut();
        }}></Button>
      </View>
    </>
  );
}


const DrawerStack = createDrawerNavigator();
export function DrawerScreenStack() {
  return (
    <DrawerStack.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent{...props} />}
    >
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen name="Profile" component={ProfileScreen} />
      <DrawerStack.Screen name="Help" component={HelpScreen}/>
    </DrawerStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  "modal-container": {
    flex: 1,
    alignItems: "center",
    borderRadius: 18,
  },
  drawerHeader:{
    height:100,
    backgroundColor:"#f1f1f1",
    margin:10,
    marginTop:0,
    marginBottom:8,
    borderRadius:8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:9
  },
  heading:{
    fontWeight:"normal",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:9
  },
  button:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:9,
    marginBottom:9
  },
  buttonText:{
    fontWeight:'bold',
    color:"white"
  },
  confirmBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:9,
    marginBottom:9
  },
  input: {
    height: 40,
    width: "80%",
    margin: 9,
    borderWidth: 3,
    padding: 10,
  },
  item: {
    backgroundColor: '#fb5b5a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
}
);