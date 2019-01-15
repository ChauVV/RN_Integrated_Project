import { Dimensions, Platform, StyleSheet } from 'react-native'

const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

export const width = (num) => MYWIDTH * (num / 100)
export const height = (num) => MYHEIGHT * (num / 100)
export const scale = (size) => MYWIDTH / guidelineBaseWidth * size
export const verticalScale = (size) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = (num) => MYHEIGHT * (num * MYSCALE / 100)
export const ISIOS = Platform.OS === 'ios'

export const FONT = {
  OSWALD_LIGHT: 'Oswald-Light',
  OSWALD_LIGHT_ITALIC: 'Oswald-LightItalic',
  OSWALD_BOLD: 'Oswald-Bold',
  OSWALD_REGULAR: 'Oswald-Regular'
}

export const txtDefault = {
  color: 'white',
  fontSize: width(4),
  backgroundColor: 'transparent',
  fontFamily: FONT.OSWALD_LIGHT
}

export const COLORS = {
  RED: '#C21B17',
  BACKGROUND_COLOR: '#FF7043',
  LINE: '#a5abaf',
  TEXT: 'white',
  PING: '#FF7043'
}
export const THEME_DEFAULT = {
  // FONT
  // family
  fontRegular: 'Roboto-Regular',
  fontRegularItalic: 'Roboto-Italic',
  fontBold: 'Roboto-Bold',
  fontBoldItalic: 'Roboto-BoldItalic',
  fontLight: 'Roboto-Light',
  fontLightItalic: 'Roboto-LightItalic',
  // size
  fontSizeTiny: width(1.2),
  fontSizeLight: width(1.5),
  fontSize: width(2),
  fontSizeLarge: width(3),
  fontSizeMedium: width(4),

  // COLORS
  colorPrimary: 'white', // primary color for your app, usually your brand color.
  colorAccent: 'black', // secondary color for your app which complements the primary color.
  colorBackground: '#e0f2f1', // background color for pages, such as lists.
  colorSurface: 'black', // background color for elements containing content, such as cards.
  colorText: 'black', // text color for content.
  colorTextTitle: 'black', // text color for title.
  colorInfo: 'black',
  colorSuccess: 'green',
  colorDanger: 'red',
  colorWarning: 'yellow',
  colorDisabled: 'gray', // color for disabled elements.
  colorPlaceholder: 'gray' // color for placeholder text, such as input placeholder.
}
export const THEME = {
  light: THEME_DEFAULT,
  pink: {...THEME_DEFAULT, colorBackground: 'pink', colorText: 'white'}
}
const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
})

export default styles
