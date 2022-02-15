// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
// } from 'react-native';

// // const App = () => {
// //   const [name, setName] = useState('Style Test')

// //   const onClickHandler = () => {
// //     setName('Style Test is done')
// //   }
//   return (
//     <View style={styles.body}>
//       <Text style={styles.text}>{name}</Text>
//       <Button title='Update State' onPress={onClickHandler}></Button>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#000000',
//     fontSize: 20,
//     fontStyle: 'italic',
//     margin: 10,
//   },
// });

// export default App;
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, Button } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
    username: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Pravaig</Text>
        <Text style={styles.logo}>Create New Account using</Text>
        <View style={styles.rdb}>
          {/* <Text style={styles.inputText} onPress={() => Linking.openURL('https://google.com')} >Google</Text>
          <Text style={styles.inputText} onPress={() => Linking.openURL('https://facebook.com')} >Facebook</Text>
          <Text style={styles.inputText} onPress={() => Linking.openURL('https://twitter.com')} >Twitter</Text>
           */}
          <Button title={'Sign in with Google'} onPress={() => {
            GoogleSignin.configure({
              androidClientId: '82525711662-nvj12b200pufbgdabd9g2cej5r82ke36.apps.googleusercontent.com',
            });
            GoogleSignin.hasPlayServices().then((hasPlayService) => {
              if (hasPlayService) {
                GoogleSignin.signIn().then((userInfo) => {
                  console.log(JSON.stringify(userInfo))
                }).catch((e) => {
                  console.log("ERROR IS: " + JSON.stringify(e));
                })
              }
            }).catch((e) => {
              console.log("ERROR IS: " + JSON.stringify(e));
            })
          }} />
          {/* <Text>Google</Text>
          <Text>Facebook</Text>
          <Text>Twitter</Text> */}

          {/* <TouchableOpacity
            style={styles.roundButton1}>
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundButton1}>
            <Text>Twitter</Text>
          </TouchableOpacity>
          </View> */}
        </View>
        <Text style={styles.loginText}>Or use your email for registration</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ username: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    backgroundColor: "#003f5c",
    marginTop: 10,
    marginBottom: 10
  },
  // roundButton1: {
  //   flex: 1,
  //   flexDirection: "row",
  //   width: 100,
  //   height: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 100,
  //   backgroundColor: 'orange',
  //   justifyContent: 'space-between',
  // },

  rdb: {

    justifyContent: 'space-between',
    width: 240,
    height: 50,

  }
});