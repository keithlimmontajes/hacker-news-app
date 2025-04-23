import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {styles} from './styles';

/** Screens */
import HomeScreen from '../../screens/Home';
import DetailsScreen from '../../screens/Details';

const Stack = createStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={styles}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Hacker News'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Hacker Details', headerBackTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
