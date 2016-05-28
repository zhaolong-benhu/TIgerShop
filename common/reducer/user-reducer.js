'use strict'

import { combineReducers } from 'redux'

import globalApp from './global-reducer'


const rootReducer = combineReducers({
  globalApp
})

// const rootReducer = globalApp;

export default rootReducer
