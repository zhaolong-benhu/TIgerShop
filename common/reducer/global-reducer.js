'use strict'

import setToken from '../action/functions';
import * as types from '../action/types.js'
import merge from 'lodash/merge'


export const  globalApp = (state={token:'',userInfo:{},isLogin:false},action)=>{
    switch (action.type) {
        case types.SET_TOKEN:
            return Object.assign({}, state, {
               token: action.data
             });
        case types.SET_USER_INFO:
            return merge({}, state,  { userInfo: action.data })
        case types.SET_LOGIN:
            return merge({}, state,  { isLogin: action.data })
        default:
    }
    return state;
};
