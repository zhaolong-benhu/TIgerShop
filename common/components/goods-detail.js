'use strict'
import React, {
  Component,
  View,
  Text,
  BackAndroid,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'

import TopbarWithoutSearch from './topbar-without-search'

import {GoodsDetailStyle} from "../style/goods-detail"

export default class GoodsDetail extends Component{
    static defaultProps ={
            start_icon:require('../../images/start.png'),
            comment_icon:require('../../images/comment_icon.png'),
            go_link:require('../../images/go-link.png')
    };
    render(){
        let info = this.props.route.passProps.rowData;
        return(
            <View style={{backgroundColor:'white',flex:1}}>
                <TopbarWithoutSearch hasReturn={true} title="商品详情" navigator={this.props.navigator}/>
                <ScrollView style={{flex:1}}>
                    <Image style={{height:140,resizeMode:'contain'}}
                    source={{uri:info.url}}/>
                    <View style={{marginTop:14,paddingLeft:12,paddingRight:12}}>
                        <View style={GoodsDetailStyle.infoView}>
                            <Text style={GoodsDetailStyle.infoStyle}>商家：</Text>
                            <Text style={GoodsDetailStyle.infoStyle}>{info.mall}</Text>
                            <View style={GoodsDetailStyle.infoRecView}>
                                <Text style={GoodsDetailStyle.infoRec}>荐</Text>
                            </View>
                            <Text style={GoodsDetailStyle.infoStyle}>虎虎推荐</Text>

                        </View>
                        <Text style={GoodsDetailStyle.titleStyle}> {info.title}</Text>
                        <Text style={GoodsDetailStyle.price}>￥{info.price}</Text>
                        <Text style={GoodsDetailStyle.infoTitle}>优惠力度</Text>
                        <Text style={GoodsDetailStyle.info}>
                            {info.goods_description}
                        </Text>
                        <Text style={GoodsDetailStyle.infoTitle}>商品详情</Text>
                        <Text style={GoodsDetailStyle.info}>
                            {info.description}
                        </Text>

                    </View>
                </ScrollView>
                <View style={{height:33,backgroundColor:"#f2f2f2",flexDirection:"row",paddingLeft:12,paddingRight:12}}>
                    <View style={{flexDirection:"row",flex:1}}>
                        <View style={{flexDirection:"row",alignItems:"center",width:130}}>
                            <Text style={{fontFamily:"STXihei",color:"#0a0a0a",fontSize:12,marginRight:5}}>优惠力度</Text>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"STXihei",color:"#0a0a0a",fontSize:12,marginRight:5}}>评论</Text>
                            <Image source={this.props.comment_icon} style={{width:12,height:11,marginLeft:2}}/>

                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        Linking.openURL(info.purchase_url).catch(err=>console.error(err));
                      }}>
                      <View style={{width:68,alignItems:"center",flexDirection:"row"}}>
                          <View style={GoodsDetailStyle.goPurchaseView}>
                              <Image source={this.props.go_link} style={{width:65,height:22}}/>
                          </View>
                      </View>

                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}
