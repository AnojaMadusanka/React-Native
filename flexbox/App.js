import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App(){
  return (
    <View style={styles.block}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block : {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  containerOne : {
    flex:1,
    height:100,
    backgroundColor: 'yellow',
    
  },
  containerTwo : {
    flex:4,
    backgroundColor: 'blue',
    height:100,
  }
});