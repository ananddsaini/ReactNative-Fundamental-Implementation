import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

 function FancyCard() {
  return (
    <View>
      <Text>Adiyogi</Text>
      <Image source={{uri:'https://t3.ftcdn.net/jpg/04/07/58/18/360_F_407581874_mKNEdzyrTzNBLQEP099y3TPCEaD7do3F.jpg'}}
      style={styles.cardImage}
      />
    </View>
  )
}
export default FancyCard;

const styles=StyleSheet.create({
 cardImage:{
  height:200,
  
  borderRadius:10,
  marginHorizontal:10,
  marginVertical:10,
}


})