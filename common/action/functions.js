'use strict'

import * as types from './types'
import * as api from '../const/restAPI'


export var setToken = (token)=>{
    return {type:types.SET_TOKEN,data:token};
}

export const setLogin = (isLogin) =>{
    return {type:types.SET_LOGIN,data:isLogin};
}

export const setUser =(info)=>{
    return {type:types.SET_USER_INFO,data:info};
}

export const setUserAndLogin =(info)=>{
    return dispatch =>{
        dispatch(setLogin(true));
        dispatch(setUser(info));
    }
}

export const setShequInfo =(info)=>{
    return {type:types.SET_SHEQU_INFO,data:info};
}


export var setTokenAndLogin = (token)=>{
    return dispatch =>{
        dispatch(setToken(token));
        dispatch(loginByToken(token));
    }
}

export const loginByToken =(token)=>{
    return dispatch =>{
        fetch(api.login_by_token,{
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'hhg ' + token,
          }
        })
        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code == 200)
            {
                let data = responseData.data.info;
                dispatch(setLogin(true));
                dispatch(setUser(data));
            }
        }).catch((error) => {
            console.warn(error);
        }).done();
    }
}



export const updateUserInfo = (token) =>{
    return dispatch => {
        if(!token)return;
        fetch(api.user_info_api,{
              headers: {
                'Accept': 'application/json',
                'Authorization': 'HHG ' + token,
              }
            })
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.code == 200)
              {
                  let data = responseData.data;
                  dispatch(setLogin(true));
                  dispatch(setUser(data));
              }
              else {
                  console.log(responseData.msg);
              }
          }).catch((error) => {
              console.warn(error);
          }).done();
  }
}

export const updateShequInfo = () =>{
    return dispatch => {
        fetch(api.shequ_info_api)
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.code == 200)
              {
                  let data = responseData.data;
                  dispatch(setShequInfo(data));
              }
          }).catch((error) => {
              console.error("社区错误");
              console.warn(error);
          }).done();
  }
}
