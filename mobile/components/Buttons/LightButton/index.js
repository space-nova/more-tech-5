import { View, TouchableOpacity, Text } from 'react-native';
import * as React from 'react';

import normalize from '../../../utils/normolize';

import styles, { colors } from '../../../assets/styles';

export default ({
  title,
  onPress,
  children,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginVertical = 0,
  marginHorizontal = 0,
  paddingVertical = 0,
  paddingHorizontal = 0,
  color = colors.blue,
  backgroud = colors.lightBlue,
  insidePaddingVertical = 18,
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
          ...styles.light_button_wrapper,
          borderColor: color,
          backgroundColor: backgroud,
          paddingVertical: normalize(insidePaddingVertical, 'height'),
        }}
        onPress={onPress}
      >
        {children ? children : <Text style={{ ...styles.light_button_text, color }}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
};
