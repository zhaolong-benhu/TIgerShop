'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ScrollView,
  ListView,
  TouchableOpacity,
  Navigator,
  BackAndroid,
  ToastAndroid,
  View,
  WebView,
  Alert,
  RefreshControl,
  RecyclerViewBackedScrollView
} from 'react-native';

// import {mall_tickets_api} from './const/restAPI';
import * as api from './const/restAPI'

import TopbarWithSearch from './components/topbar-with-search'

import ScrollableTabView , { DefaultTabBar, ScrollableTabBar, }  from 'react-native-scrollable-tab-view';
import TouchableNativeFeedback from 'TouchableNativeFeedback'

//优惠券页面
export default class Tickets extends Component{

  constructor(){
      super();
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds
      };

  }
  componentDidMount(){
      this._genRows();
  }

  _genRows(){
      fetch(api.mall_tickets_api)
        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code == 200)
            {
                let data = responseData.data;
                this.setState({dataSource:this.state.dataSource.cloneWithRows(data)});
            }
        }).catch((error) => {
            console.warn(error);
        }).done();
  }

  onPressRow(rowData,sectionID){
    this.props.navigator.push({
      name:'tickets-detail',
      passProps: {rowData},
    });
          }

  _renderRow(rowData:object, sectionID: number, rowID: number){
      return(
          <TouchableWithoutFeedback  onPress={() => this.onPressRow(rowData,sectionID) }>
              <View>
                  <View style={styles.container}>
                                 <View style={styles.leftempty}/>
                                 <View style={styles.seller_image}>
                                   <Image style={styles.image} source={{uri:(rowData.icon)}} />
                                 </View>

                                 <View style={styles.discount_info}>
                                    <View style={styles.satisfy}>
                                        <View>
                                            <Text style={styles.preferential}>{rowData.minuse}</Text>
                                        </View>

                                        <View style={styles.money}>
                                            <View>
                                              <Text style={styles.yuan}>元</Text>
                                            </View>
                                            <View>
                                              <Text style={styles.man}>{rowData.description}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View>
                                      <Text style={styles.validity}>有效期：{rowData.validitydata}</Text>
                                    </View>
                                 </View>

                                 <View>
                                     <View style={styles.getticket}>
                                      <TouchableOpacity onPress={() => this.onPressRow(rowData,sectionID) }>
                                        <Text style={styles.gettext}>领取</Text>
                                      </TouchableOpacity>
                                     </View>
                                 </View>
                   </View>

                   <View style={styles.separator} />

                   <View style={styles.bottomempty}/>
              </View>
          </TouchableWithoutFeedback >
      )
  }

  _onRefresh(){

   }

   render(){
       const refreshControl = (
             <RefreshControl
               enabled={true}
               refreshing={this.state.isRefreshing}
               onRefresh={this._onRefresh}
               colors={['#ff0000', '#00ff00', '#0000ff']}
               progressBackgroundColor="#ffffff"
             />
           );
       return(
         <View style={{flex:1}}>
           <TopbarWithSearch navigator={this.props.navigator}/>
           <ScrollView style={{backgroundColor:"#F0F0F0",flex:1,paddingTop:10}}>
             <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  />
           </ScrollView>
         </View>

       )
   }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'#FFFFFF'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  topempty: {
    height:10
  },
  leftempty: {
    width:12
  },
  bottomempty:{
    height:15
  },
  image: {
    width: 129,
    height: 71
  },
  discount_info:{
    flexDirection: 'column',
    flex: 1
  },
  satisfy:{
    flexDirection: 'row'
  },
  money:{
    flexDirection: 'column'
  },
  yuan:{
    fontSize:12,
    fontFamily:'STXihei',
    color:'#E23351',
    marginTop:10,
    marginLeft:3
  },
  man:{
    fontSize:12,
    fontFamily:'STXihei',
    color:'#48484a',
    marginLeft:3

  },
  preferential: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop:0,
    // margin: 3,
    color: '#E23351'
  },
  validity: {
    fontSize: 12,
    fontFamily:'STXihei',
    margin: 3,
    color: '#656565'
  },
  getticket: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 50,
    marginTop:48,
    backgroundColor: '#E23351',
    borderRadius: 3,
    marginRight:10
  },
  gettext:{
    color:'#FFFFFF',
    fontSize: 12,
    fontFamily:'STXihei',
    textAlign:'center'
  }

});

AppRegistry.registerComponent('Tickets', () => Tickets);

export default Tickets;
