import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
import NewDetailsScreen from './src/screens/Details/NewDetailsScreen';
import CoffeesScreen from './src/screens/Coffees/CoffeesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'none'}}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={NewDetailsScreen}
          options={{animation: 'none'}}></Stack.Screen>
          <Stack.Screen
          name="Coffees"
          component={CoffeesScreen}
          options={{animation: 'none'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
