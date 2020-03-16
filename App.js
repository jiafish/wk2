import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './sourse/components/Header.js';
import Album from './sourse/components/Album.js';


const App = () => {
  return (
   

    <View>
      <Header/>

      <Album/>
     
    </View>
    
  );
};

const styles = StyleSheet.create({

});

export default App;