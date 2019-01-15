
import ServerAPI from 'backend/api'
import { Observable } from 'rxjs'
import { actionsType, statusCode, strMessageTimeout, TIME_OUT, ttError, KeyStore, RouteKey } from 'utils/globalConstants'
const SimpleStore = require('react-native-simple-store')

export default (action$, store, dependencies) => {
  const checkAuthen$ = action$.ofType(actionsType.CHECK_AUTHEN).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(SimpleStore.get(KeyStore.AUTHEN_TOKEN))
        .mergeMap((authenState) => {
          console.log('token get: ', authenState)
          if (authenState && authenState.token.length > 0) {
            return Observable.concat(
              Observable.of({ type: actionsType.AUTHEN_SUCCESS, payload: authenState }),
              Observable.of({ type: actionsType.RESET_TO_ROUTE, routeName: RouteKey.Drawer })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.RESET_TO_ROUTE, routeName: RouteKey.Login })
            )
          }
        })
    )
  })

  const login$ = action$.ofType(actionsType.LOGIN).switchMap((action) => {
    return Observable.fromPromise(ServerAPI.login())
      .takeUntil(Observable.timer(TIME_OUT))
      .takeUntil(action$.ofType(actionsType.CANCEL_LOGIN))
      .mergeMap((response) => {
        if (response) {
          console.log('login response: ', response)
          if (response.status === statusCode.CODE_200) {
            return Observable.concat(
              Observable.of({ type: actionsType.LOGIN_SUCCESS, payload: response.data[0] }),
              Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Drawer })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.LOGIN_FAIL })
            )
          }
        } else {
          ServerAPI.showAlert(ttError, strMessageTimeout)
          return Observable.concat(
            Observable.of({ type: actionsType.LOGIN_FAIL })
          )
        }
      })
  })

  const logout$ = action$.ofType(actionsType.LOGOUT).switchMap((action) => {
    return Observable.concat(
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Login })
    )
  })

  return Observable.merge(
    checkAuthen$,
    login$,
    logout$
  )
}
