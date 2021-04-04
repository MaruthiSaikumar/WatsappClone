import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text } from "react-native";
import { ColorSchemeName } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor:'#128C7E',
        shadowOpacity:0,
        elevation:0
      },
      headerTintColor:'white',
      headerTitleStyle:{
        fontWeight:'bold',
        
          
      }
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} 
      options={{
                title:"WhatsApp",
                headerRight:()=>(
                  <View style={{ flexDirection:"row", width:60 , justifyContent:'space-between', marginRight:10}} >
                      <AntDesign name="search1" size={22} color="white" />
                      <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                  </View>
                )
                    } } />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
