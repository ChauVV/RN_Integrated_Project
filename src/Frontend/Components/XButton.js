/**
 * Prevent multibel touch in a short time
 */
import React from 'react'
import { debounce } from 'lodash'
import { TouchableOpacity } from 'react-native'

const DELAY_TIME = 300 // 300 milliseconds separate each touch

const withPreventDoubleClick = (WrappedComponent) => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress()
    }

    onPress = debounce(this.debouncedOnPress, (this.props.delayTime || DELAY_TIME), { leading: true, trailing: false });

    render () {
      return <WrappedComponent {...this.props} onPress={this.onPress} />
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`
  return PreventDoubleClick
}

const XButton = withPreventDoubleClick(TouchableOpacity)

export default XButton
