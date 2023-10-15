import { View, Image } from 'react-native';

export default ({ source }) => {
  return (
    <View>
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: 25 }}
      />
    </View>
  )
}
