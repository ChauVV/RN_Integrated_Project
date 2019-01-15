
import React, { PureComponent } from 'react'
import {
  StatusBar, StyleSheet, Text, TouchableOpacity,
  View
} from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { connect } from 'react-redux'
import { COLORS, height, ISIOS } from 'utils/globalStyles'
import PropTypes from 'prop-types'

class BaseView extends PureComponent {
  static defaultProps = {
    isHeader: false
  }
  render () {
    const {
      isHeader,
      title,
      leftIcon,
      leftAction,
      rightIcon,
      rightAction
    } = this.props

    return (
      <View style={styles.base}>
        <StatusBar barStyle='light-content' backgroundColor={COLORS.PING} />
        {isHeader &&
          <View style={styles.header}>
            {leftIcon &&
              <TouchableOpacity style={styles.leftIcon}
                onPress={leftAction}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                {leftIcon}
              </TouchableOpacity>
            }
            <View style={styles.titleContainer}>
              <Text style={styles.textHeader}>{title}</Text>
            </View>
            {rightIcon &&
              <View style={styles.groubBtnRight}>
                <TouchableOpacity onPress={rightAction}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  {rightIcon}
                </TouchableOpacity>
              </View>
            }
          </View>
        }
        <View style={styles.base}>
          {this.props.children}
        </View>
      </View >
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(BaseView)

BaseView.defaultProps = {
  children: null,
  isHeader: false,
  title: '',
  leftIcon: null,
  leftAction: () => {},
  rightIcon: null,
  rightAction: () => {}
}

BaseView.propTypes = {
  children: PropTypes.any,
  isHeader: PropTypes.bool,
  title: PropTypes.string,
  leftIcon: PropTypes.any,
  leftAction: PropTypes.func,
  rightIcon: PropTypes.any,
  rightAction: PropTypes.func
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: ISIOS ? isIphoneX() ? 98 : 64 : 44,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0
  },
  textHeader: {
    fontSize: height(3.5),
    color: 'white'
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    width: 60,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'center'
  },
  groubBtnRight: {
    position: 'absolute',
    right: 20,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
