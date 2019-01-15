
import BaseView from 'frontend/Containers/BaseView'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionsType } from 'utils/globalConstants'
import PropTypes from 'prop-types'

class AppConnect extends Component {
  constructor (props) {
    super(props)
    props.checkAuthen()
  }

  render () {
    return (
      <BaseView />
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})

export default connect(mapStateToProps, mapactionsTypeToProps)(AppConnect)

AppConnect.defaultProps = {
  checkAuthen: () => {}
}

AppConnect.propTypes = {
  checkAuthen: PropTypes.func
}
