import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MyCart from '../MyCart';
import Productinfo from '../Productinfo'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens

import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
const Stack = createNativeStackNavigator();

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Productinfo" component={Productinfo} />
      </Stack.Navigator>
  );
}

function MainContainer() {
  return (
   <NavigationContainer>
  
     
      
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeStackScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

export default MainContainer;