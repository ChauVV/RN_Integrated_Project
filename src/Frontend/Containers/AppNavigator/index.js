import Authen from 'frontend/Containers/Authen'
import Detail from 'frontend/Screens/Detail'
import DrawerContent from 'frontend/Screens/DrawerContent'
import HomeScreen from 'frontend/Screens/HomeScreen'
import LoginScreen from 'frontend/Screens/LoginScreen'
import Setting from 'frontend/Screens/Setting'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'
import transition from './transitions'

import SharedElements from 'frontend/Screens/AnimationTranslation/SharedElements'
import AppearingElements from 'frontend/Screens/AnimationTranslation/AppearingElements'
import ImageTransition from 'frontend/Screens/AnimationTranslation/ImageTransition'
import LayoutTransition from 'frontend/Screens/AnimationTranslation/LayoutTransition'
import Onboarding from 'frontend/Screens/AnimationTranslation/Onboarding'
import ShoeShop from 'frontend/Screens/AnimationTranslation/ShoeShop'
import FlatList from 'frontend/Screens/AnimationTranslation/FlatList'
import AnimatedProperty from 'frontend/Screens/AnimationTranslation/AnimatedProperty'
import animationScreen from 'frontend/Screens/AnimationTranslation'

import {BaseNavigator} from 'frontend/Screens/CustomTabbar/navigation'
import WaveAnimationScreen from 'frontend/Screens/WaveAnimationScreen'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigate
)

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Detail: { screen: Detail }
  }, {
    headerMode: 'none',
    transitionConfig: transition
  }
)

const MainTabbar = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: Setting
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName = ''
        if (routeName === RouteKey.Home) {
          iconName = `ios-home`
        } else if (routeName === RouteKey.Settings) {
          iconName = `ios-settings`
        }

        return <Icon
          name={iconName}
          style={{ color: focused ? 'red' : '#7e7e7e', fontSize: 20 }}
        />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray'
    }
  }
)
const getActiveScreen = (navigationState) => {
  if (navigationState.index !== undefined) {
    return getActiveScreen(navigationState.routes[navigationState.index])
  } else {
    return navigationState
  }
}

MainTabbar.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'locked-closed'
  const activeRoute = getActiveScreen(navigation.state)
  if (activeRoute.routeName === RouteKey.HomeScreen || activeRoute.routeName === RouteKey.Settings) {
    // Only open drawer for 2 these screen
    drawerLockMode = 'unlocked'
  }
  return {
    drawerLockMode
  }
}

const Drawer = createDrawerNavigator(
  {
    MainTabbar: {
      screen: MainTabbar
    }
  },
  {
    drawerPosition: 'right',
    contentComponent: DrawerContent,
    drawerWidth: 300
  }
)

const AnimaTranslationStack = createStackNavigator({
  animationScreen: { screen: animationScreen },
  shared: { screen: SharedElements },
  appear: { screen: AppearingElements },
  image: { screen: ImageTransition },
  layout: { screen: LayoutTransition },
  onboarding: { screen: Onboarding },
  shoes: { screen: ShoeShop },
  flatlist: { screen: FlatList },
  animatedProperty: { screen: AnimatedProperty }
}, {
  headerMode: 'none'
})

const RootNavigator = createStackNavigator(
  {
    Authen: { screen: Authen },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    AnimaTranslationStack: { screen: AnimaTranslationStack },
    CustomTabbar: { screen: BaseNavigator },
    WaveAnimationScreen: { screen: WaveAnimationScreen }
  }, {
    headerMode: 'none'
  }
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state) => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
