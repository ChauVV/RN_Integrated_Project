import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  screen1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 20
  },
  buttons: {
    flexDirection: 'row',
    padding: 20
  }
})

const Circle = ({ background, size }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      width: size,
      height: size,
      borderRadius: size / 2
    }}
  />
)

const Shape = ({ background, size, borderRadius }) => (
  <View
    style={{
      backgroundColor: background || '#EE0000',
      width: size,
      height: size,
      borderRadius: borderRadius || 0
    }}
  />
)

class Screen1 extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Transition appear="flip">
          <Text>1.Screen</Text>
        </Transition>
        <View style={styles.screen1}>
          <Transition shared="circle">
            <Shape size={50} borderRadius={4} background="#EE0000" />
          </Transition>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Transition appear="horizontal" delay>
            <Circle background="#55AA55" size={20} />
          </Transition>
          <View style={{ width: 20 }} />
          <Transition appear="horizontal" delay>
            <Circle background="#55AA55" size={20} />
          </Transition>
          <View style={{ width: 20 }} />
          <Transition appear="horizontal" delay>
            <Circle background="#55AA55" size={20} />
          </Transition>
        </View>
        <Transition appear="horizontal">
          <View style={styles.buttons}>
            <Button title="Next" onPress={() => this.props.navigation.navigate('screen2')} />
          </View>
        </Transition>
      </View>
    )
  }
}

export default Screen1
