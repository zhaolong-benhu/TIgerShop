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
  TouchableWithoutFeedback,
  ToastAndroid,
  Platform,
  AlertIOS
} from 'react-native';

import * as HttpCache from "../../lib/http-cache"

const styles = StyleSheet.create({
    tabFont:{
        fontFamily:"STXihei",
        fontSize:18,
        color:"#0a0a0a",
        fontWeight:"100"
    },
    tabSplit:{
        fontFamily:"STXihei",
        fontSize:18,
        color:"#bfbfbf",
        fontWeight:"100"
    }
})

export default class UserSettings extends Component{

    static defaultProps = {
            radio_on:require('../../images/user/Switch.png'),
    };
    navigate(data)
    {
        this.props.navigator.push({
           name: data,
           passProps: {},

       });
    }
    constructor(){
        super();
        this.state = {cacheSize:0};
    }
    componentDidMount(){
        this._getCacheSize();
    }
    async _getCacheSize(){
        var size = await HttpCache.getSize();
        size = (size/1000/1000).toFixed(2);
        if(size > 10)
        {
            size = parseInt(size);
        }
        this.setState({cacheSize:size});
    }
    async _clearCache(){
        await HttpCache.clear();
        this._getCacheSize();
        let msg = "缓存清除成功！";
        if (Platform.OS === 'android') {
          ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
          AlertIOS.alert(msg);
        }
    }
    _clearHistory(){
      let msg = "清除历史记录成功！";
      if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
      } else {
        AlertIOS.alert(msg);
      }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:42,marginLeft:12,backgroundColor:'white',
                alignItems:"center",borderRadius:6,
                    marginRight:12,marginTop:17,flexDirection:"row",justifyContent:"space-around"}}>
                    <TouchableWithoutFeedback onPress={this.navigate.bind(this,'user-post')}>
                        <Text style={styles.tabFont}>原创</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.tabSplit}>|</Text>
                    <TouchableWithoutFeedback onPress={this.navigate.bind(this,'user-focus')}>
                        <Text style={styles.tabFont}>关注</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.tabSplit}>|</Text>
                    <TouchableWithoutFeedback onPress={this.navigate.bind(this,'user-comments')}>
                        <Text style={styles.tabFont}>评论</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.tabSplit}>|</Text>
                    <TouchableWithoutFeedback onPress={this.navigate.bind(this,'user-message')}>
                        <Text style={styles.tabFont}>消息</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{marginTop:15}}>
                    <View style={{height:40,backgroundColor:"white",flexDirection:"row",alignItems:"center",padding:12,justifyContent:"space-between"}}>
                        <Text style={{fontFamily:"STXihei",fontSize:15,color:"#0a0a0a"}}>每日热点推送</Text>
                        <Image source={this.props.radio_on} style={{width:42,height:25}}/>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <TouchableOpacity onPress={this._clearCache.bind(this)}>
                        <View style={{height:40,backgroundColor:"white",flexDirection:"row",alignItems:"center",padding:12,justifyContent:"space-between"}}>
                            <Text style={{fontFamily:"STXihei",fontSize:15,color:"#0a0a0a"}}>清除缓存</Text>
                            <Text style={{fontFamily:"STXihei",fontSize:15,color:"#666666"}}>{this.state.cacheSize}M</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop:10}}>
                  <TouchableOpacity onPress={this._clearHistory.bind(this)}>

                    <View style={{height:40,backgroundColor:"white",flexDirection:"row",alignItems:"center",padding:12,justifyContent:"space-between"}}>
                        <Text style={{fontFamily:"STXihei",fontSize:15,color:"#0a0a0a"}}>清除历史记录</Text>
                        <Text style={{fontFamily:"STXihei",fontSize:15,color:"#666666"}}>></Text>
                    </View>
                  </TouchableOpacity>

                </View>

                {(()=>{
                    if(this.props.isLogin)
                    {
                        return <View style={{marginTop:50,backgroundColor:"white",height:36,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontFamily:"STXihei",fontSize:15,color:"#0a0a0a"}}>退出登录</Text>
                        </View>
                    }
                })()}
            </View>
        )
    }

}
