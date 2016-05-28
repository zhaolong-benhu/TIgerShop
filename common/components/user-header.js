'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';


import {contentStyles,userStyles,styles} from '../style/user';

import {user_info_api} from '../const/restAPI'


class UserHeader extends Component{
    state={

    };
    static defaultProps = {
            avatar:require('../../images/user/test-avatar.png'),
    };

    render(){
        return(
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                {(()=>{
                    if(this.props.info.avatar_url){
                        return <Image source={{uri:this.props.info.avatar_url}} style={styles.avatar} />
                    }
                    else{
                        return <Image source={this.props.avatar} style={styles.avatar} />
                    }
                })()}
                </View>
                <View style={userStyles.userInfo}>
                    <Text style={userStyles.userName}>{this.props.info.nickname}</Text>
                    <View style={userStyles.userDetail}>
                        <View style={userStyles.userDetailLeft}>
                            <Text style={userStyles.detailFont}>等级：vip{this.props.info.level}</Text>
                        </View>
                        <View style={userStyles.userDetailRight}>
                            <Text style={userStyles.detailFont}>积分：{this.props.info.score}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


export default UserHeader
