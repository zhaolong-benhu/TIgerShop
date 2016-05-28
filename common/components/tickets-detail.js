'use strict'
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  BackAndroid,
  ToastAndroid,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

import TopbarWithoutSearch from './topbar-without-search'


export default class TicketsDetail extends Component{

    constructor(props){
        super(props);

        let navigator = props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
          if(navigator == null){
            return false;
          }
          if(navigator.getCurrentRoutes().length === 1){
            return false;
          }
          navigator.pop();
          return true;
        });
    }

    static defaultProps = {
        back_icon:require('../../images/back-icon.png'),
        ticket_title:'优惠券详情'
    };
    goBack(){
        this.props.navigator.pop();
    }
    onGetTicketPressed(){
      ToastAndroid.show('恭喜您，领取成功！',ToastAndroid.SHORT);
    }

    render(){
      return(


          <View style={styles.rootS}>

                <TopbarWithoutSearch hasReturn={true} title="优惠券详情" navigator={this.props.navigator}/>

                <View style={styles.ticketdetail}>
                    <View style={styles.detailhead}>
                        <View>
                          <Image style={styles.detaildimage} source={{uri:(this.props.route.passProps.rowData.icon)}} />
                        </View>

                        <View>
                          <Text style={styles.detaildescribe}>{this.props.route.passProps.rowData.name}{this.props.route.passProps.rowData.description}</Text>
                          <Text style={styles.detailvalidity}>有效期：{this.props.route.passProps.rowData.validitydata}</Text>
                          <Text style={styles.detailcondition}>领取限制：不限领取数量</Text>
                        </View>
                    </View>

                    <View style={styles.explain}>
                      <Text style={styles.useexplain}>使用说明</Text>
                      <Text style={styles.useexplain}>1.活动时间:{this.props.route.passProps.rowData.validitydata}</Text>
                      <Text style={styles.useexplain}>2.活动方式:活动时间内,购买本专题内指定自营商品,可享受跨品牌跨种类联合满199元或者100元优惠,结算时输入优惠码,立减优惠金额,每张优惠券限用一次。</Text>
                      <Text style={styles.useexplain}>3.温馨提示：活动只限{this.props.route.passProps.rowData.name}自营商品(不含礼品卡，电子书，第三方卖家,Z秒杀，Z实惠，海外购及Kindler设备)。</Text>
                      <Text style={styles.useexplain}> -领取的优惠券24小时后公开领取记录中，任何人可复制查看。</Text>
                    </View>

                    <View style={styles.get}>
                        <TouchableOpacity style={styles.getBtn} onPress={this.onGetTicketPressed.bind(this)}>
                            <Text style={{fontFamily:"STXihei",fontSize:18,color:"white",width:100,textAlign:'center'}}>领取</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tips}>
                        <Text style={styles.tipsText}>1.为确保优惠券的正常使用，请在新弹出的链接中使用优惠券。</Text>
                        <Text style={styles.tipsText}>2.请大家珍惜每张优惠券，有效期内尽快使用。</Text>
                    </View>
                </View>

                <View style={styles.bottomempty}>
                </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({

    rootS: {
      backgroundColor:'#F0F0F0'
    },
    head: {
      height:44,
      backgroundColor:'#e23351',
      flexDirection:"row"
    },
    head_icon: {
      width:40,
      alignItems:"center",
      justifyContent:"center"
    },
    head_icons: {
      width:18,
      height:18,
      resizeMode:'contain',
      marginLeft:5,
      justifyContent:"center"
    },
    head_title: {
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    head_titles: {
      fontSize:18,
      fontFamily:"STXihei",
      color:"white"
    },

    ticketstext: {
      fontSize:25,
      fontFamily:'STXihei',
      color:'#FFFFFF',
      justifyContent:"center",
      alignItems:"center"
    },
    detailtitle: {
        justifyContent:"center",
        alignItems:"center"
    },
     root: {
       flexDirection: 'row',
     },
     left_empty: {
       width:5,
       backgroundColor:'#F0F0F0'
     },
     right_empty: {
       width:5,
       backgroundColor:'#F0F0F0'
     },
     bottomempty: {
        height:200,
        backgroundColor:'#F0F0F0'
     },
    ticketdetail: {
      flexDirection: 'column',
      // backgroundColor:'#FOFOFO',
      marginLeft:5,
      marginRight:5
    },
    detailhead: {
      marginTop:20,
      flexDirection: 'row'
    },
    detaildimage: {
      width:129,
      height:71
    },
    detaildescribe: {
        fontSize: 15,
        fontFamily:'STXihei',
        marginTop: 5,
        marginLeft:10,
        textAlign:'center',
        color:'#0a0a0a'
    },
    detailvalidity: {
      fontSize: 12,
      fontFamily:'STXihei',
      color:'#969696',
      marginTop: 5,
      marginLeft:10,
      textAlign:'center',
    },
    detailcondition:
    {
      fontSize: 12,
      fontFamily:'STXihei',
      color:'#969696',
      marginTop: 2,
      marginLeft:10,
      textAlign:'center',
    },

    explain: {
      marginTop: 20
    },
    useexplain: {
      fontSize: 12,
      fontFamily:'STXihei',
      color:'#969696',
      lineHeight:18
    },
    explanText: {
      fontSize:12,
      textAlign:'left'
    },
    get: {
     marginTop: 20,
     height: 100,
     alignItems: 'center',
     justifyContent: 'center'
   },
    getBtn:{
        height:41,
        backgroundColor:"#e23351",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:38,
        marginRight:38,
        borderRadius:3,
        marginTop:10,
        marginBottom:17
    },
    tips: {
      marginTop: 20
    },
    tipsText: {
      fontSize:12,
      color:'#666666',
      fontFamily:'STXihei',
      marginLeft:10
    },
    });
