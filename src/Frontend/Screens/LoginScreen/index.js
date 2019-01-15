
import BaseView from 'frontend/Containers/BaseView'
import React, { Component } from 'react'
import {
  BackHandler, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { COLORS, height, ISIOS, width } from 'utils/globalStyles'
import { actionsType, RouteKey } from 'utils/globalConstants'
import PropTypes from 'prop-types'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentDidMount () {
    if (ISIOS) {
      SplashScreen.hide()
    } else {
      setTimeout(() => SplashScreen.hide(), 100)
    }
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  getActiveScreen = (navigationState) => {
    if (navigationState.index !== undefined) {
      return this.getActiveScreen(navigationState.routes[navigationState.index])
    } else {
      return navigationState
    }
  }
  onBackPress = () => {
    const { navigate } = this.props

    const activeRoute = this.getActiveScreen(navigate)
    if (activeRoute.routeName === RouteKey.HomeScreen || activeRoute.routeName === RouteKey.Login) {
      BackHandler.exitApp()
      return true
    } else {
      this.props.close()
      return true
    }
  }
  render () {
    const { login } = this.props

    return (
      <BaseView >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => login()}
            style={styles.btnLogin}>
            <Text style={styles.txtBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </BaseView>
    )
  }
}

const mapStateToProps = (state) => ({
  navigate: state.navigate
})
const mapactionsTypeToProps = (dispatch) => ({
  login: () => dispatch({ type: actionsType.LOGIN }),
  close: () => dispatch({ type: 'pop' })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(LoginScreen)

LoginScreen.defaultProps = {
  login: () => {},
  navigate: {},
  close: () => {}
}

LoginScreen.propTypes = {
  login: PropTypes.func,
  navigate: PropTypes.any,
  close: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f2f1'
  },
  btnLogin: {
    width: width(50),
    height: height(10),
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBtn: {
    color: COLORS.TEXT
  }
})
