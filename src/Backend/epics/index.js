import { combineEpics } from 'redux-observable'
import authenEpic from './authenEpic'
import clientEpic from './clientEpic'

export default combineEpics(
  authenEpic,
  clientEpic
)
