import { StyleSheet, Platform } from 'react-native';

import normalize from './../../utils/normolize';

export const colors = {
  white: '#ffffff',
  blue: '#2D78EA',
};

export default StyleSheet.create({
  // general
  flex1: {
    flex: 1,
  },
  flex_row: {
    flexDirection: 'row',
  },

  login_page: {
    header: {
      wrapper: (StatusBarHeight) => ({
        marginTop: Platform.OS == 'ios' ? 0 : StatusBarHeight,
        paddingTop: Platform.OS == 'ios' ? StatusBarHeight : 0,
        height: Platform.OS == 'ios' ? normalize(84 + StatusBarHeight, 'height') : normalize(84, 'height'),
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
      }),
      title: {
        fontFamily: 'ResistSansDisplay-Regular',
        color: colors.white,
        fontWeight: 'bold',
        lineHeight: normalize(25, 'width'),
        fontSize: normalize(23, 'width'),
      },
    },
  },
});
