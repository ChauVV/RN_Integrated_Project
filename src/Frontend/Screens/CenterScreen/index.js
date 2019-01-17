import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actionsType } from 'utils/globalConstants'

class CenterScreen extends React.Component {
  componentDidMount () {
    if (this.props.notifications.length > 0) {
      // this.props.reCountNotifications()
    }
  }
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Center Screen'}</Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  notifications: state.notifications
})
const mapactionsTypeToProps = (dispatch) => ({
  reCountNotifications: () => dispatch({ type: actionsType.SET_NOTIFICATIONS, payload: [] })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(CenterScreen)

CenterScreen.defaultProps = {
  reCountNotifications: () => {}
}

CenterScreen.propTypes = {
  reCountNotifications: PropTypes.func
}
