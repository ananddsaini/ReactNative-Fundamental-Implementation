import React,{useState} from "react";
import { View,Text,TextInput, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import auth from '@react-native-firebase/auth';


 const UserAuthentication=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const  createUser=()=>{
    console.log(password);
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
    <ScrollView >
     <View>
        <TextInput  
        value={email}
        style={styles.emailInput}  
        onChangeText={(value)=>{setEmail(value)}}
        placeholder="Enter email"/ >
        <TextInput  
        value={password}
        style={styles.emailInput}  
        onChangeText={(value)=>{setPassword(value)}}
        placeholder="Enter Password"
        />
        
            <TouchableOpacity onPress={()=>{createUser()} }>
                <Text style={styles.createAccountButton}>Create Account </Text>
            
            </TouchableOpacity>


    </View>

    </ScrollView>

)

    


}
export default UserAuthentication;

const styles= StyleSheet.create({

emailInput:{ height:40,
width: 160,
borderRadius:15,
backgroundColor:'#f08080',
padding:10,
margin:10,

},
createAccountButton:{
height: 40,
width: 100,
fontWeight:'bold',
backgroundColor:'#f08080',
padding:10,
margin:10,

}


})