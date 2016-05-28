'use strict'

import React,{
       Component,
       View,
       Image,
       TextInput,
       StyleSheet,
       Text,
       TouchableWithoutFeedback,
       ToastAndroid,
       TouchableOpacity,
       ViewPagerAndroid,
       Platform
     } from "react-native"

var ViewPager = require('react-native-viewpager');


import * as api from '../const/restAPI'

import TopbarSearchInput from './topbar-search-input'

import SearchGoods from './search-goods'

import SearchGlobal from './search-global'

import SearchArticle from './search-article'


import {topBarStyles,itemsStyles,styles} from '../style/shequ'

export default class SearchResult extends Component{

    state={
        page:0,
        keyword_input: ""
    };
    static defaultProps = {
        channel : [{name:'商品',key:"goods"},{name:'海淘',key:"global"},{name:'文章',key:"article"}]
    };
    constructor(props){
        super(props);

        var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
          dataSource: dataSource.cloneWithPages(props.channel),
          page:0,
          keyword_input:""
        };
        this.state.keyword_input = props.route.passProps.search_keyword;

    }
    componentDidMount(){
        this.fetchSearchGoods();
    }
    fetchSearchGoods(){

    }
    onMenuBarClick(index){
      if (Platform.OS === 'ios') {
        return
      }
      this.viewPager.setPageWithoutAnimation(index);
      this.setState({page: index});
      this.viewPager.setPage(index);
    }
    onPageSelected(e) {
      this.setState({page: e.nativeEvent.position});
    }

    _onChangePage(page: number | string) {
       this.setState({page: page});
     }

    _renderPage(data:Object,pageID: number | string,){
      switch (data.key) {
        case 'goods':
          return(
            <View style={{flex:1}}>
              <SearchGoods keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
            </View>
          )
          break;
        case 'global':
          return(
            <View style={{flex:1}}>
              <SearchGlobal keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
            </View>
          )
          break;
        case 'article':
          return(
            <View style={{flex:1}}>
              <SearchArticle keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
            </View>
          )
          break;
        default:
         return <View />
      }


    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ffffff"}}>
                <TopbarSearchInput editable={false} keyword_input={this.state.keyword_input} navigator={this.props.navigator}></TopbarSearchInput>
                <View style={topBarStyles.container}>
                  {this.props.channel.map(function(data,index){
                    return <TouchableWithoutFeedback key={index} onPress={this.onMenuBarClick.bind(this,index)}>
                              <View style={topBarStyles.barView}>
                                  <View style={topBarStyles.textView}>
                                      <Text style={topBarStyles.name,this.state.page==index?topBarStyles.nameSelect:""}>{data.name}</Text>
                                  </View>
                                  <View style={index==this.props.channel.length-1?"":topBarStyles.splitLine}></View>
                              </View>
                          </TouchableWithoutFeedback>
                  }.bind(this))}
              </View>
              <View style={{backgroundColor:"#f4f4f4",height:12}}></View>

              {(()=>{
                if (Platform.OS === 'android') {
                  return(
                    <ViewPagerAndroid style={{flex:1}} onPageSelected={this.onPageSelected.bind(this)}
                                    initialPage={0} ref={viewPager => { this.viewPager = viewPager;}}>

                            <View >
                                <SearchGoods keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
                            </View>
                            <View >
                                <SearchGlobal keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
                            </View>
                            <View >
                                <SearchArticle keyword_input={this.state.keyword_input} navigator={this.props.navigator}/>
                            </View>

                    </ViewPagerAndroid>
                  )
                }
                else{
                  return(
                      <ViewPager
                          dataSource={this.state.dataSource}
                          renderPage={this._renderPage.bind(this)}
                          onChangePage={this._onChangePage.bind(this)} />

                  )
                }
              })()}



            </View>
        )
    }
}
