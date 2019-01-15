import React from 'react'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import Screen1 from './SharedElements1'
import Screen2 from './SharedElements2'
import Screen3 from './SharedElements3'

const Navigator = createFluidNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 }
}, {
  navigationOptions: { gesturesEnabled: true }
})

class SharedElements extends React.Component {
  static router = Navigator.router;

  render () {
    const { navigation } = this.props
    return (
      <Navigator navigation={navigation} />
    )
  }
}

export default SharedElements
