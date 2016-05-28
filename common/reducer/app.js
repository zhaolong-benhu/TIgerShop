'use strict'


import { combineReducers } from 'redux'
import {globalApp} from './global-reducer';
import {shequApp} from './shequ-reducer';


export const app = combineReducers({
  globalApp,
  shequApp
})
