import React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import {AddButton, Bookmarks, Likes, MagicTabBar, Private, Profile, Settings, Plus} from '../'
import {Routes} from './Routes'

const TabsNavigator = createBottomTabNavigator({
  [Routes.TabsBookmarks]: {
    screen: Bookmarks,
    navigationOptions: () => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="bookmark"
          color={tintColor}
          size={24}
        />
      )
    })
  },
  [Routes.TabsLikes]: {
    screen: Likes,
    navigationOptions: () => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="heart"
          color={tintColor}
          size={24}
        />
      )
    })
  },
  MultiBar: {
    screen: Plus,
    navigationOptions: () => ({
      tabBarOnPress: ({ jumpToIndex, scene }) => {
        console.log('{ jumpToIndex, scene }', jumpToIndex)
      },
      // eslint-disable-next-line react/display-name
      tabBarIcon: (_) => (
        <AddButton
          jumTo={TabsNavigator.jumpToIndex}
          routes={[
            {
              key: 'MultiBar',
              routeName: 'MultiBar',
              color: 'red'
            },
            {
              routeName: Routes.OtherScreen,
              color: 'green'
            },
            {
              routeName: Routes.OtherScreen,
              color: 'blue'
            }
          ]}
        />
      )
    })
    // params: {
    //   navigationDisabled: false
    // }
  },
  [Routes.TabsPrivate]: {
    screen: Private,
    navigationOptions: () => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="lock"
          color={tintColor}
          size={24}
        />
      )
    })
  },
  [Routes.TabsProfile]: {
    screen: Profile,
    navigationOptions: () => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="user"
          color={tintColor}
          size={24}
        />
      )
    })
  }
}, {
  tabBarOnPress: (props) => {
    console.log('tabBarOnPress: ', props)
  },
  tabBarComponent: MagicTabBar,
  initialRouteName: 'MultiBar',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
      backgroundColor: '#171F33'
    },
    tabStyle: {}
  }
})

const BaseNavigator = createStackNavigator({
  [Routes.Tabs]: TabsNavigator,
  [Routes.OtherScreen]: Settings
}, {
  headerMode: 'none'
})

export {BaseNavigator}
