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

function HomeScreen({ navigation }) {

  const[datas, setData] = useState([]);

    useEffect(() => {
        supabase
        .from('rides_broadcasted')
        .select('*')
        .then(({data}) => {
            if(1){
                setData(data);
            }
        });
        console.log(datas);
    },[]);

    function navigateToDriverStatusScreen(itemid) {
      global.rideid = itemid;
      updateDriverIDStatus(itemid);
      navigation.navigate("driverAcceptRideStatus",{itemid : itemid,});
    }

    async function updateDriverIDStatus(itemid) {
      console.log("hello");
      const { data, error } = await supabase
      .from('rides_broadcasted')
      .update({ driverID: supabase.auth.user().id })
      .eq('id', itemid)
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PRAVAIG</Text>
      <Text style={styles.logo}>Driver App</Text>
      <Text style={styles.heading}>CHOOSE RIDE</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={datas}
        renderItem={({ item }) => 
        
        (<View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.confirmBtn} onPress={() => navigateToDriverStatusScreen(item.id)}>
          <Text style={styles.buttonText}>ACCEPT</Text>
          </TouchableOpacity>
          <Text style={styles.item}>{item.created_at}</Text>
        <Text style={styles.item}>{item.lat_p}</Text>
        <Text style={styles.item}>{item.log_p}</Text>
        <Text style={styles.item}>{item.lat_d}</Text>
        <Text style={styles.item}>{item.log_d}</Text>
        </View>)}
      />
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
export function DrawerScreenStack1() {
  return (
    <DrawerStack.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent{...props} />}
    >
      <DrawerStack.Screen name="Home" component={HomeScreen}/>
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
    width:"20%",
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
    backgroundColor: 'grey',
    color: 'white',
    fontWeight:'bold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
}
);

// export default ride_id;