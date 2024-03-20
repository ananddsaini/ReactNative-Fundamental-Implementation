// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, //like div in the web
} from 'react-native';
import FancyCard from './Components/FancyCard';
import React from 'react';
import Flatcard from './Components/FlatCard';
import ScrollCard from './Components/ScrollCard';
import ActionCard from './Components/Action';
import PasswordGenerator from './Components/PasswordGenrator';

function App() {
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
    
    <ScrollCard/>
    <Flatcard/>
    <ActionCard/>

    <FancyCard/>
    <PasswordGenerator/>
     
     </ScrollView>
     
)}
export default App;
