import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

class CenterTab extends React.Component {
  resetNotifications = () => {
    console.log('resetNotifications...')
  }
  render () {
    const { notifications, focused } = this.props

    return (
      <View style={{
        zIndex: 0,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center'}}>
        <Icon
          name={'ios-apps'}
          style={{ color: focused ? 'red' : '#7e7e7e', fontSize: 20 }}/>
        {notifications.length > 0
          ? <View style={{
            position: 'absolute',
            top: -5,
            right: '20%',
            borderRadius: 15,
            backgroundColor: 'red',
            paddingVertical: 5,
            paddingHorizontal: 2,
            minWidth: 27,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2}}>
            <Text style={{color: 'white'}}>{notifications.length}</Text>
          </View>
          : undefined}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(CenterTab)

CenterTab.defaultProps = {
  notifications: [],
  focused: false
}

CenterTab.propTypes = {
  notifications: PropTypes.array,
  focused: PropTypes.bool
}
