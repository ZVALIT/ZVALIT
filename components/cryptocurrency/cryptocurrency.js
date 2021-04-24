import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Cryptocurrency() {
  return (
    <View>
      <Text style={style.Cryptocurrency}>Cryptocurrency</Text>
    </View>
  );
}
const style=StyleSheet.create({
    Cryptocurrency:{
        textAlign: 'center'
    }
})