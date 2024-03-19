import React from 'react';
import {Linking, StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';

function ActionCard() {
    function openWebsite(websitelink: string){
        Linking.openURL(websitelink);
}
  

  return (
    <View >
      <Text style={styles.headingText}>Action Card Preview</Text>
      <View>
        <Text style={[styles.cardParagraph, styles.cardElevated]}>
          This is going to open an URL{' '}
        </Text>
      </View>
      <View >
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy6fRzSr8IYiSyl_s9EHncMMBGPRSuhA0OuDwANJIiw&s'}}
          style={styles.cardImage}
        />
      </View>
      <View>
        <Text style={styles.bodyContainerText} numberOfLines={2}>
        Contrary to popular belief, Lorem Ipsum is not 
        simply random text. It has roots in a piece of classical Latin literature 
        from  BC, making it over 2000 years old. Richard McClintock, a Latin professor 
        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passa
        ge, and going through the cites of the word 
        </Text>

        <TouchableOpacity style={styles.bodyContainerTouchableOpacity}
        onPress={()=>{ openWebsite('https://github.com/ananddsaini')  }}
        
        ><Text>Click here for Github Profile</Text></TouchableOpacity>
        
              

      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
    actionCardView:{textAlign:'center',},
  headingText: {},
  cardParagraph: {},
  cardElevated: {},
  cardImage: {
    height:180,
    width:200,
    borderRadius:60,
    overflow: 'hidden',
},
cardImageContainer:{textAlign:'center'},
  bodyContainerText:{},
  bodyContainerTouchableOpacity:{
    
  }
});
export default ActionCard;
