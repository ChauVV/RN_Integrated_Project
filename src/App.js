import React from 'react'

import { Provider } from 'react-redux'
import storeRedux from 'backend/store'

import { AppNavigator } from 'frontend/Containers/AppNavigator'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <AppNavigator />
    </Provider>
  )
}
export default App
