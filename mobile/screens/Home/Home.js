import { View, Text } from 'react-native';
import {YaMap} from 'react-native-yamap';

export default () => {
  return (

      <YaMap
        initialRegion={{
          lat: 57.6299,
          lon: 39.8737,
          zoom: 11,

        }}
        style={{ flex: 1 }}
      >
        
      </YaMap>
  )
}
