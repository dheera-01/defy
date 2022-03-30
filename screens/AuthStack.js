import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {View, Text, Button, StyleSheet, Alert} from "react-native";

// import { TextInput } from "react-native-gesture-handler";

import { SupabaseClient } from "@supabase/supabase-js";
import { LoginScreen } from "./LoginScreen";
import { CreateAccountScreen } from "./CreateAccountScreen";
// import { useEffect } from "react/cjs/react.production.min";

const AuthStack = createNativeStackNavigator();
export function AuthScreenStack(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name = "Login" component ={LoginScreen}/>
      <AuthStack.Screen name = "CreateAccount" component ={CreateAccountScreen}/>

    </AuthStack.Navigator>
  )
}

export const styles = StyleSheet.create({
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
      }
});