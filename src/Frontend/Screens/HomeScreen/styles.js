
import { StyleSheet } from 'react-native'
import { width } from 'utils/globalStyles'

const styles = StyleSheet.create({
  cell: {
    height: 50,
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

export default styles
