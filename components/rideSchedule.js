import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Button, Platform,TouchableOpacity} from 'react-native';

export default function App() {

  const [date,setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Nothing');

  const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'default');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PRAVAIG</Text>
      <Text style={styles.heading}>SCHEDULE RIDE</Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pickup Location</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => showMode('date')}>
          <Text style={styles.buttonText} >Date</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => showMode('time')}>
          <Text style={styles.buttonText} >Time</Text>
        </TouchableOpacity>

      <Text style={{fontWeight: 'bold',fontSize: 20,color: 'white'}}>Ride Schedule:</Text>
      <Text style={{fontWeight: 'normal',fontSize: 20,color: 'white'}}>{text}</Text>

      <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.buttonText}>Confirm Ride</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  heading:{
    fontWeight:"normal",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:20
  },
  button:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
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
    marginTop:40,
    marginBottom:10
  }
});
