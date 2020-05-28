// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>
        DetailsScreen
      </Text>
      <Button title="Go to details screen again..." onPress={()=>navigation.push("Details")}/>
      <Button title="Go to home" onPress={()=>navigation.navigate("Home")}/>
      <Button title="Go back" onPress={()=>navigation.goBack()}/>
      <Button title="Go to the first screen" onPress={()=>navigation.popToTop()}/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyles: {
            fontWeight: 'bold',
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:'Overview'
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;