import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView

} from 'react-native'

function CustomApp():JSX.Element{  //JSX.element is used to make the fuction return JSX element incase other (lie return ("hi")) it will show error.
const isDarkMode=useColorScheme()==='dark'


    return ( 
    <SafeAreaView>
        <View style={styles.container}>
    <Text>hi</Text>


        </View>
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }




})
export default CustomApp;