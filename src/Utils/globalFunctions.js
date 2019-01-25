import { Dimensions, Platform } from 'react-native'

export function randomColor () {
  const values = [...new Array(3)].map(() => Math.random() * 256).join(',')

  return `rgb(${values})`
}
export function isIphoneX () {
  let dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
  )
}

export function ifIphoneX (iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  } else {
    return regularStyle
  }
}
