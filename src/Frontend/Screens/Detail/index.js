
import BaseView from 'frontend/Containers/BaseView'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { COLORS } from 'utils/globalStyles'
import { actionsType } from 'utils/globalConstants'
import PropTypes from 'prop-types'

class Detail extends Component {
  render () {
    const { pop, navigation } = this.props
    const client = navigation.getParam('client', {})
    console.log('client: ', client)

    return (
      <BaseView
        isHeader={true}
        title={'Detail'}
        leftAction={() => pop()}
        leftIcon={<IconFontAwesome name='chevron-left' style={{ color: 'white', fontSize: 25 }} />}
      >
        <View style={styles.body}>
          <View style={styles.avatarBorder}>
            <Image source={{ uri: client.avatar }} style={styles.avatar} resizeMode={'contain'} />
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Name: '}</Text>
              <Text>{client.name}</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Age: '}</Text>
              <Text>{client.age}</Text>
            </Text>
          </View>
        </View>
      </ BaseView>
    )
  }
}
const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
  pop: () => dispatch({ type: actionsType.POP })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Detail)

Detail.defaultProps = {
  pop: () => {},
  navigation: {}
}

Detail.propTypes = {
  pop: PropTypes.func,
  navigation: PropTypes.any
}

const styles = StyleSheet.create({
  info: {
    marginTop: 20
  },
  text: {
    fontSize: 20
  },
  infoTitle: {
    fontWeight: 'bold'
  },
  avatarBorder: {
    overflow: 'hidden',
    marginTop: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  avatar: {
    flex: 1
  },
  body: {
    flex: 1,
    alignItems: 'center'
  }
})
