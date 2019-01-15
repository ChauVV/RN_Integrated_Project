
import BaseView from 'frontend/Containers/BaseView'
import React from 'react'
import { FlatList, View } from 'react-native'
import { icBar } from 'utils/globalIcons'
import ClientCell from './Components/ClientCell'
import styles from './styles'
import PropTypes from 'prop-types'

export const HomeView = ({ navigation, clientState, gotoDetail }) => {
  return (
    <BaseView
      isHeader={true}
      title='HomeScreen'
      rightAction={() => navigation.toggleDrawer()}
      rightIcon={icBar}
    >

      <View style={styles.body}>
        <FlatList
          // inverted={true}
          data={clientState.clients}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(object) => ClientCell({ object, gotoDetail })}
        />
      </View>
    </BaseView>
  )
}

HomeView.defaultProps = {
  navigation: {},
  gotoDetail: (clients) => {},
  clientState: {}
}

HomeView.propTypes = {
  navigation: PropTypes.object,
  gotoDetail: PropTypes.func,
  clientState: PropTypes.object
}
