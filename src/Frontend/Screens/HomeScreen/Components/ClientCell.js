
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'
import PropTypes from 'prop-types'

const ClientCell = ({ object, gotoDetail }) => {
  const client = object.item
  return (
    <TouchableOpacity
      onPress={() => gotoDetail(client)}
      style={styles.cell}>
      <Text>{client.name}</Text>
    </TouchableOpacity>
  )
}
export default ClientCell

ClientCell.defaultProps = {
  object: {},
  gotoDetail: (client) => {}
}

ClientCell.propTypes = {
  object: PropTypes.object,
  gotoDetail: PropTypes.func
}
