import { View, Text } from 'react-native';
import { YaMap, Marker } from 'react-native-yamap';
import React from 'react';
import Branches from '../Branches/Branches';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default ({ navigation }) => {

  return (
    <YaMap
      initialRegion={{
        lat: 57.6299,
        lon: 39.8737,
        zoom: 11,
      }}
      style={{ flex: 1 }}
    >
      <Marker
        point={{
          lat: 57.6299,
          lon: 39.8737
        }}
        scale={3}
        onPress={() => navigation.navigate('branches')}
      />
    </YaMap>
  )
}
