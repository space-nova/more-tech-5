import { Dimensions, Platform, PixelRatio } from 'react-native';

let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const wscale = SCREEN_WIDTH / 428;
const hscale = SCREEN_HEIGHT / 926;

export default function normalize(size, based = 'width') {
  let newSize = based === 'height' ? size * hscale : size * wscale;

  if (Platform.OS === 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  else return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
