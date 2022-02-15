import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'http://images4.fanpop.com/image/answers/1731000/1731042_1310194857943.13res_468_300.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Username</Text>
              <Text style={styles.info}>Personal Information</Text>
              <Text style={styles.description}>Verify your details</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Phone Number</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Email</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Country</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>City/Town</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Change Password</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: "black",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:30,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:10,
  },
  name:{
    fontSize:28,
    color: "#696969",
    position: 'absolute',
    fontWeight: "600",
    marginTop:20
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    position: 'absolute',
    marginTop:80
  },
  description:{
    fontSize:16,
    color: "green",
    marginTop:100,
    alignSelf:'center',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:50,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:-30,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
