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
  screen3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
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

class Screen3 extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Transition appear="flip">
          <Text>3.Screen</Text>
        </Transition>
        <View style={styles.screen3}>
          <Transition shared="circle">
            <Shape size={140} borderRadius={70} background="#EE0000" />
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
            <Button title="Back" onPress={() => this.props.navigation.goBack()} />
          </View>
        </Transition>
      </View>
    )
  }
}

export default Screen3
