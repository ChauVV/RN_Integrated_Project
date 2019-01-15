
import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { ISIOS } from 'utils/globalStyles'
import { actionsType, RouteKey } from 'utils/globalConstants'
import { HomeView } from './HomeView'
import PropTypes from 'prop-types'

class HomeScreen extends Component {
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
    this.props.fetchClients()
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
    console.log('activeRoute: ', activeRoute)
    if (activeRoute.routeName === RouteKey.HomeScreen || activeRoute.routeName === RouteKey.Login) {
      BackHandler.exitApp()
      return true
    } else {
      this.props.close()
      return true
    }
  }
  render () {
    const { clientState, gotoDetail } = this.props

    return (
      <HomeView
        navigation={this.props.navigation}
        clientState={clientState}
        gotoDetail={gotoDetail}
      />
    )
  }
}
const mapStateToProps = (state) => ({
  clientState: state.clientState,
  navigate: state.navigate
})
const mapactionsTypeToProps = (dispatch) => ({
  gotoDetail: (client) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { client } }),
  fetchClients: () => dispatch({ type: actionsType.FETCH_CLIENT, payload: { clients: [], isLoading: true } }),
  close: () => dispatch({ type: 'pop' })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

HomeScreen.defaultProps = {
  fetchClients: () => {},
  navigation: {},
  gotoDetail: (client) => {},
  clientState: null,
  navigate: null,
  close: () => {}
}

HomeScreen.propTypes = {
  fetchClients: PropTypes.func,
  navigation: PropTypes.object,
  gotoDetail: PropTypes.func,
  clientState: PropTypes.any,
  navigate: PropTypes.any,
  close: PropTypes.func
}
