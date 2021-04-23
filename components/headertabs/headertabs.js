import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cryptocurrency from '../cryptocurrency/cryptocurrency';
import Derivatives from '../derivatives/derivatives';
import Exchanges from '../exchanges/exchanges';
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width;
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  const [fontSize, setFontSize] = React.useState(15)
  React.useEffect(() => {
    if (deviceWidth == 320) {
      setFontSize(8)
    } else if (deviceWidth == 360) {
      setFontSize(10)
    } else if (deviceWidth == 411.42857142857144 || deviceWidth == 392.72727272727275) {
      setFontSize(11)
    } else {
      setFontSize(12)
    }
  });
  return (
    <Tab.Navigator
      initialRouteName="Cryptocurrency"
      tabBarOptions={{
      activeTintColor: '#8bdc84',
      inactiveTintColor: 'black',
      labelStyle: { fontSize: fontSize, fontWeight: 'bold' },
      style: {borderColor:'#dcdcdc', marginTop: 10, borderBottomWidth:1, borderTopWidth:1, flex: 1},
      indicatorStyle: { borderBottomWidth: 2, borderBottomColor: '#8bdc84' }
      }}
    >
      <Tab.Screen
        name="Cryptocurrency"
        component={Cryptocurrency}
        options={{ tabBarLabel: 'Currency' }}
      />
      <Tab.Screen
        name="derivatives"
        component={Derivatives}
        options={{ tabBarLabel: 'derivatives' }}
      />
      <Tab.Screen
        name="exchanges"
        component={Exchanges}
        options={{ tabBarLabel: 'exchanges' }}
      />
    </Tab.Navigator>
  );
}

