import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cryptocurrency from '../cryptocurrency/cryptocurrency';
import Derivatives from '../derivatives/derivatives';
import Exchanges from '../exchanges/exchanges';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
        activeTintColor: '#8bdc84',
        inactiveTintColor:'black',
        labelStyle: { fontSize: 12,fontWeight:'bold' },
        style: { backgroundColor: 'white'},
        allowFontScaling:true,
        indicatorStyle:{borderBottomWidth:2,borderBottomColor:'#8bdc84'}
        }}
    >
      <Tab.Screen
        name="Feed"
        component={Cryptocurrency}
        options={{ tabBarLabel: 'Cryptocurrency'}}
      />
      <Tab.Screen
        name="Notifications"
        component={Derivatives}
        options={{ tabBarLabel: 'derivatives' }}
      />
      <Tab.Screen
        name="Profile"
        component={Exchanges}
        options={{ tabBarLabel: 'exchanges' }}
      />
    </Tab.Navigator>
  );
}

