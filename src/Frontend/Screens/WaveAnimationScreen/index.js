import React, {Component} from 'react'
import {Dimensions, View, StyleSheet, Text} from 'react-native'
import WaveView from 'frontend/Components/WaveAnimation'
export const MYWIDTH = Dimensions.get('window').width

class WaveAnimationScreen extends Component {
  render () {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'green'
      }}>
        <WaveView
          ref={ ref => { this._waveRect = ref } }
          style={{width: MYWIDTH, height: 200}}
          H={50}
          waveParams={[
            {A: 30, T: MYWIDTH, fill: '#62c2ff'},
            {A: 35, T: MYWIDTH, fill: '#0087dc'},
            {A: 40, T: MYWIDTH, fill: '#1aa7ff'}
          ]}
          animated={true}
        />
        <View style={styles.viewContent}>
          <Text style={styles.textContent}>ABC</Text>
        </View>
      </View>
    )
  }
}

export default WaveAnimationScreen

const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1aa7ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContent: {
    color: 'white',
    fontSize: 24
  }
})
