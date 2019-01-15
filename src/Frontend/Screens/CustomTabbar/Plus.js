import React, {Component} from 'react'
import {SafeAreaView, Text} from 'react-native'

class Plus extends Component {
  render () {
    return (
      <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Plus</Text>
      </SafeAreaView>
    )
  }
}

export {Plus}
