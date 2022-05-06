//import React
import React from 'react';

//navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components import
import RandScreen from './components/RandScreen';
import SearchScreen from './components/SearchScreen';
import AboutProjectScreen from './components/AboutProjectScreen';

//icons import
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//App function
export default function App(){
  return(
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={
        ({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 100,
          paddingTop: 10
        },
        tabBarIcon: () => {
          let iconName;
          if(route.name === 'about project'){
            iconName = <AntDesign name='home' size={26} color='white'></AntDesign>
          }else if(route.name === 'search'){
            iconName = <FontAwesome name='search' size={26} color='white'></FontAwesome>
          }else{
            iconName = <FontAwesome5 name='dice' size={26} color='white'></FontAwesome5>
          } 
          return iconName;
        }})
    }>
        <Tab.Screen
        name='about project' 
        component={AboutProjectScreen}
        />
        <Tab.Screen 
        name='search' 
        component={SearchScreen}
        />
        <Tab.Screen 
        name='randomizer' 
        component={RandScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
