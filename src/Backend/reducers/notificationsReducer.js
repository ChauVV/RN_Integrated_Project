import { actionsType, initState } from 'utils/globalConstants'

export default (state = initState.notifications, action) => {
  switch (action.type) {
  case actionsType.SET_NOTIFICATIONS:
    return action.payload
  default:
    return state
  }
}
