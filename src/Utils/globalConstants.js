
export const BaseURL = 'http://5be31487d53daf0013250efd.mockapi.io/API'
export const RouteKey = {
  HomeScreen: 'HomeScreen',
  Login: 'Login',
  MainTabbar: 'MainTabbar',
  Detail: 'Detail',
  Drawer: 'Drawer',
  Home: 'Home',
  Apps: 'Apps',
  Settings: 'Settings'
}
export const KeyStore = {
  AUTHEN_TOKEN: 'AUTHEN_TOKEN'
}

// Redux
export const actionsType = {
  // CHECK AUTHEN
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  CANCEL_LOGIN: 'CANCEL_LOGIN',

  LOGOUT: 'LOGOUT',
  SET_TOKEN: 'SET_TOKEN',
  CHECK_AUTHEN: 'CHECK_AUTHEN',
  AUTHEN_SUCCESS: 'AUTHEN_SUCCESS',
  // CURRENCY
  SET_CURRENCY: 'SET_CURRENCY',
  // LANGUAGE
  SET_LANGUGAE: 'SET_LANGUGAE',
  // CLIENT
  FETCH_CLIENT: 'FETCH_CLIENT',
  FETCH_CLIENT_FAIL: 'FETCH_CLIENT_FAIL',
  FETCH_CLIENT_SUCCESS: 'FETCH_CLIENT_SUCCESS',
  UPDATE_CLIENT_SUCCESS: 'UPDATE_CLIENT_SUCCESS',
  CANCEL_FETCHING_CLIENT: 'CANCEL_FETCHING_CLIENT',
  // Notifications
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  // Loading
  SHOW_LOADING_ICON: 'SHOW_LOADING_ICON',
  HIDE_LOADING_ICON: 'HIDE_LOADING_ICON',
  // NAVIGATION
  PUSH: 'push',
  POP: 'pop',
  POP_TO_TOP: 'popToTop',
  RESET_TO_ROUTE: 'resetToRoute',
  RESET: 'reset',
  CLEAR: 'clear'
}
export const initState = {
  currency: 'VND',
  language: 'vi',
  users: [],
  places: [],
  authenStateInit: {
    id: '',
    userName: '',
    passWord: '',
    token: '',
    displayName: '',
    Avatar: null
  },
  notifications: [3, 4, 2]
}
/**
 * TIME_OUT: 30s
 */
export const TIME_OUT = 30000
/**
 * tlError
 */
export const ttError = 'Lỗi'
/**
 * ttInfor
 */
export const ttInfor = 'Thông báo'
/**
 * strMessageTimeout
 */
export const strMessageTimeout = 'Không thể kết nối server!'
/**
 * statusCode
 */
export const statusCode = {
  CODE_200: 200, // ok
  CODE_201: 201, // ok
  CODE_404: 404, // Not found
  CODE_500: 500 // Server error
}
