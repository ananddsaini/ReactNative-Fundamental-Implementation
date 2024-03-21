import React,{useState} from "react";
import { View,Text,TextInput, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import auth from '@react-native-firebase/auth';


const UserAuthentication=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const createUser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

return (
    <ScrollView keyboardShouldPersistTaps='always'>
     <View>
        <TextInput  
        value={email}
        style={styles.emailInput}  
        onChangeText={(value)=>{setEmail(value)}}
        placeholder="Enter email"/ >
        <TextInput  
        value={password}
        style={styles.emailInput}  
        onChangeText={(value)=>{setPassword(value)}} />
            <TouchableOpacity onPress={()=>{createUser()} }>
                <Text style={styles.createAccountButton}>Create Account </Text>
            
            </TouchableOpacity>


    </View>

    </ScrollView>

)

    


}

const styles= StyleSheet.create({

emailInput:{ height:40,
width: 160,
borderRadius:15,

},
createAccountButton:{
height: 20,
width: 100,
fontWeight:'bold'

}


})