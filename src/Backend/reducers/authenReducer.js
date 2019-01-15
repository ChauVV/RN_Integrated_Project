import { actionsType, initState, KeyStore } from 'utils/globalConstants'
const SimpleStore = require('react-native-simple-store')

export default (state = initState.authenStateInit, action) => {
  switch (action.type) {
  case actionsType.LOGIN_SUCCESS:
    console.log('action.payload.token: ', action.payload)
    SimpleStore.save(KeyStore.AUTHEN_TOKEN, action.payload)
    return action.payload
  case actionsType.AUTHEN_SUCCESS:
    return action.payload
  case actionsType.LOGOUT:
    return initState.authenStateInit
  default:
    return state
  }
}
