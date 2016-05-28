'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';

export default class UserHeaderUnlogin extends Component{
    static defaultProps={
        avatar:require('../../images/user/avatar.png'),
        login:require('../../images/user/login.png'),
    };

    onLoginPress(){
        this.props.navigator.push({
           name: "login",
           passProps: {
               setToken:this.props.setToken,
               setUserInfo:this.props.setUserInfo
           },
           sceneConfig:Navigator.SceneConfigs.FloatFromBottom
       });
    }
    render(){
        return(
                <View style={{height:90,backgroundColor:"white",flexDirection:"row"}}>
                    <Image source={this.props.avatar} style={{width:40,height:40,marginLeft:21,marginTop:12}}/>
                    <View style={{flex:1,marginTop:20,marginLeft:12}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontSize:15,fontFamily:"STXihei",color:"#0a0a0a"}}>Hi，你好~</Text>
                            <Text style={{color:"#888888",fontSize:12,fontFamily:"STXihei",marginLeft:12}}>登录账户和小伙伴们一起分享快乐吧！</Text>
                        </View>
                        <TouchableOpacity style={{marginTop:5}} onPress={this.onLoginPress.bind(this)}>
                            <Image source={this.props.login} style={{width:80,height:23}}/>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }


}
