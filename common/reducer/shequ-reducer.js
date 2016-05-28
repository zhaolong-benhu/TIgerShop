'use strict'


import * as types from '../action/types.js'

import merge from 'lodash/merge'


export const  shequApp = (state={shequInfo:[]},action)=>{
    switch (action.type) {
      case types.SET_SHEQU_INFO:
          return merge({}, state,  { shequInfo: action.data });
      default:
    }
    return state;
};
