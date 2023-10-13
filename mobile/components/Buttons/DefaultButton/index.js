import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import * as React from 'react';

import normalize from '../../../utils/normolize';

import styles from '../../../assets/styles';

export default ({
  title,
  onPress,
  disabled = false,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginVertical = 0,
  marginHorizontal = 0,
  paddingVertical = 0,
  paddingHorizontal = 0,
  insidePaddingVertical = 12,
}) => {
  return (
    <View
      style={{
        marginTop: normalize(marginVertical ? marginVertical : marginTop, 'height'),
        marginBottom: normalize(marginVertical ? marginVertical : marginBottom, 'height'),
        marginLeft: normalize(marginHorizontal ? marginHorizontal : marginLeft, 'width'),
        marginRight: normalize(marginHorizontal ? marginHorizontal : marginRight, 'width'),
        paddingVertical: normalize(paddingVertical, 'height'),
        paddingHorizontal: normalize(paddingHorizontal, 'width'),
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.default_button_wrapper,
          paddingVertical: normalize(insidePaddingVertical, 'height'),
        }}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.default_button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
