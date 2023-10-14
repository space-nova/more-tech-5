import { View, Image } from 'react-native';

export default ({
  focused,
  greyImage,
  blueImage
}) => {
  return (
    <View>
      {focused &&
        <Image
          source={blueImage}
          resizeMode="contain"
          style={{ width: 25 }}
        />
      }
      {!focused &&
        <Image
          source={greyImage}
          resizeMode="contain"
          style={{ width: 25 }}
        />
      }
    </View>
  )
}
