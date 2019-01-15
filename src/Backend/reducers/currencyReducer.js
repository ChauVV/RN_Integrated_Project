import { actionsType, initState } from 'utils/globalConstants'

export default (state = initState.currency, action) => {
  switch (action.type) {
  case actionsType.SET_CURRENCY:
    return action.payload
  default:
    return state
  }
}
