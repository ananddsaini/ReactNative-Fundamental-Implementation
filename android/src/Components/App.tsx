import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, //like div in the web
} from 'react-native';
import FancyCard from './FancyCard';
import React from 'react';
import Flatcard from './FlatCard';
import ScrollCard from './ScrollCard';
import ActionCard from './Action';
//import PasswordGenerator from './Components/PasswordGenrator';
import CopyPassgen from'./CopyPassgen';
import UserAuthentication from './UserAuthentication';
// Screens
import Home from './screens/Home';
import Details from './screens/Details';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Type checking  optional (really doesn't require)
export type RootStackParamList={
  Home:undefined;
  Details:{productId:string} //

};

// For type checking and type safety
const Stack=createNativeStackNavigator<RootStackParamList>()







function App():JSX.Element {
  return (
    // Inside navigation container we are going to write which
    //type of navigation we are going to use (like- drawer or stack...)
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={
          {
            title:'Trending Products'
          }
        }
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={
          {
            title: 'Product Detail',
          }
        }
        />

      </Stack.Navigator>




    </NavigationContainer>
    
    
    
     
    
     
)}
export default App;
