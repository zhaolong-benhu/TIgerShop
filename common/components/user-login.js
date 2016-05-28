'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackAndroid,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  Platform,
  AlertIOS
} from 'react-native';

import * as api from '../const/restAPI'
import {STORAGE_TOKEN} from '../const/data'

import TopbarWithoutSearch from './topbar-without-search'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",flex:1
    },
    content:{padding:38,justifyContent:"center",marginTop:66},
    inputArea:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#969696",
        height:28,
        alignItems:"center",
        marginBottom:28
    },
    loginBtn:{
        height:41,
        backgroundColor:"#e23351",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:38,
        marginRight:38,
        borderRadius:6,
        marginTop:10,
        marginBottom:17
    }
})

export default class UserLogin extends Component{


    static defaultProps = {
        user_icon:require('../../images/user/user.png'),
        clear_icon:require('../../images/user/close.png'),
        password_icon:require('../../images/user/Lock.png')
    };
    beginLogin(){
        var data = new FormData();
        data.append('account',this.state.account);
        data.append('password',this.state.password);
        fetch(api.login_by_account,{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
              },
              body:data
        })
        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code == 200)
            {
                let data = responseData.data;
                this.props.route.passProps.setToken(data.token);
                AsyncStorage.setItem(STORAGE_TOKEN,data.token).catch((error) => {
                    console.warn(error);
                }).done();
                this.props.route.passProps.setUserInfo(data.info);
                this.props.navigator.pop();
            }
            else {
              let msg = "账号或密码错误！";
              if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
              } else {
                AlertIOS.alert(msg);
              }
            }
        }).catch((error) => {
            let msg = "网络错误";
            if (Platform.OS === 'android') {
              ToastAndroid.show(msg, ToastAndroid.SHORT)
            } else {
              AlertIOS.alert(msg);
            }
        }).done();
    }

    render(){
        return(
            <View style={styles.container}>

                <TopbarWithoutSearch hasReturn={true} title="用户登录" navigator={this.props.navigator}/>
                <View style={styles.content}>
                    <View style={styles.inputArea}>
                        <Image source={this.props.user_icon} style={{width:15,height:16,marginLeft:10,marginRight:10}}/>
                        <TextInput style={{flex:1,borderWidth:0}} placeholder="账号"
                        onChangeText={(text) => this.setState({account:text})}/>
                        <Image source={this.props.clear_icon} style={{width:16,height:16}}/>
                    </View>
                    <View style={styles.inputArea}>
                        <Image source={this.props.password_icon} style={{width:14,height:19,marginLeft:10,marginRight:10}}/>
                        <TextInput style={{flex:1,borderWidth:0}} secureTextEntry={true} placeholder="密码"
                        onChangeText={(text) => this.setState({password:text})}/>
                        <Image source={this.props.clear_icon} style={{width:16,height:16}}/>
                    </View>
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={this.beginLogin.bind(this)}>
                    <Text style={{fontFamily:"STXihei",fontSize:18,color:"white"}}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontFamily:"STXihei",fontSize:12,color:"#48484a"}}>立即注册</Text>
                </TouchableOpacity>
            </View>

        )
    }



}
