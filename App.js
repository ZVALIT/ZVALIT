import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#f4f4f4',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen name='portfolio' component={Portfolio} />   
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


