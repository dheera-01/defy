import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreenStack } from "./screens/HomeStack";
import { HomeScreenStack1 } from "./screens/HomeStack1";
import {AuthScreenStack} from "./screens/AuthStack";
import { Text } from "react-native";


import { supabase } from "./supabase-service";
import 'react-native-url-polyfill/auto';

export default function App() {

  const[auth,setAuth] = useState(false);
  const[isDriver,setDriverState] = useState(false);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    setAuth(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event,session)=>{
      console.log(session)
      setAuth(session);
    });
    
    if(auth){
      console.log("hello");
      fetchMsg();
    }
 
  });

  async function fetchMsg() {

    const id = supabase.auth.user().id;
    const {data} = await supabase
    .from('profiles')
    .select('*')
    .eq('id',id);
    console.log(data[0].isDriver);
    setDriverState(data[0].isDriver);
  }

  return (
    <NavigationContainer>
      {auth?[isDriver?<HomeScreenStack1/>:<HomeScreenStack/>]:<AuthScreenStack/>}
    </NavigationContainer>
  );
}

<HomeScreenStack/>
