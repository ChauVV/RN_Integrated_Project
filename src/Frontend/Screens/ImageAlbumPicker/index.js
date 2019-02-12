
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View, Image,
  Dimensions
} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker'
const width = Dimensions.get('screen').width

export default class ImageAlbumPicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      num: 0,
      selected: []
    }

    this.getSelectedImages = this.getSelectedImages.bind(this)
  }

  getSelectedImages (images, current) {
    var num = images.length

    this.setState({
      num: num,
      selected: images
    })

    console.log(current)
    console.log(this.state.selected)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been selected
          </Text>
          <View style={styles.imagesSelected}>
            {this.state.selected.length >= 1 && <Image resizeMode='stretch' style={styles.imgSelected} source={this.state.selected[0]}/>}
            {this.state.selected.length >= 2 && <Image resizeMode='stretch' style={styles.imgSelected} source={this.state.selected[1]}/>}
            {this.state.selected.length === 3 && <Image resizeMode='stretch' style={styles.imgSelected} source={this.state.selected[2]}/>}
          </View>
        </View>
        <CameraRollPicker
          groupTypes='SavedPhotos'
          maximum={3}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D'
  },
  imgSelected: {
    width: width / 3,
    height: width / 3
  },
  imagesSelected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 200
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff'
  },
  bold: {
    fontWeight: 'bold'
  }
})
