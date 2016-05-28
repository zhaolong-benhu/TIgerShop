'use strict'

import React, {
  Component,
  View,
  ScrollView
} from 'react-native'

import {styles} from './style/user'

import UserHeader from './components/user-header'

import UserSettings from './components/user-settings'

import * as actions from './action/functions'

import { connect } from 'react-redux';

import TopbarWithSearch from './components/topbar-with-search'
import UserHeaderUnlogin from "./components/user-header-unlogin"


class UserMain extends Component{
    state={
        isLogin:true
    };
    constructor(props){
        super(props)
    }
    render(){
        return(
                <ScrollView style={styles.container}>
                    <TopbarWithSearch navigator={this.props.navigator}/>
                    {(()=>{
                        if(!this.props.global.isLogin){
                            return <UserHeaderUnlogin navigator={this.props.navigator}
                            setToken={this.props.setToken}
                            setUserInfo={this.props.setUserInfo}
                            />
                        }
                        else{
                            return <UserHeader info={this.props.global.userInfo}/>
                        }
                    })()}
                    <UserSettings isLogin={this.props.global.isLogin} navigator={this.props.navigator} />

                </ScrollView>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: () => {
      dispatch(actions.updateUserInfo());
    },
    setToken:(token)=>{
        dispatch(actions.setToken(token));
    },
    setUserInfo:(info)=>{
        dispatch(actions.setUserAndLogin(info));
    }
  }
}

export default connect(state => ({global: state.globalApp}),mapDispatchToProps)(UserMain);
