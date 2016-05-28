'use strict'

import React,{
    Component,
    View,
    Image,
    TextInput,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ToastAndroid} from "react-native"


import * as api from '../const/restAPI'

import TopbarSearchInput from './topbar-search-input'

export default class SearchScene extends Component{

    state={
        recommend_list: [],
        keyword_input: ''
    };

    componentDidMount(){
        this.fetchSearchRecommend();
    }
    fetchSearchRecommend(){
        fetch(api.search_recommend_api)
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.code == 200)
              {
                  let data = responseData.data;
                  this.setState({recommend_list:data});
              }
          }).catch((error) => {
              console.warn(error);
          }).done();
    }
    onRecommendSearchPress(search_keyword){
        this.setState({keyword_input:search_keyword});
        this.props.navigator.push({
           name: "search-result",
           passProps: {search_keyword},
       });
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ffffff"}}>
                <TopbarSearchInput keyword_input={this.state.keyword_input} navigator={this.props.navigator}></TopbarSearchInput>

                <View style={{height:34,paddingLeft:12,paddingRight:12,justifyContent:"center",backgroundColor:'#f4f4f4'}}>
                    <Text style={{color:"#0a0a0a",fontFamily:"STXihei",fontSize:15}}>热门推荐</Text>
                </View>
                <View style={{paddingLeft:12,paddingRight:2,paddingTop:5,paddingBottom:15,flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap',backgroundColor:'#ffffff'}}>
                    {this.state.recommend_list.map(function(value,index){
                        return <TouchableOpacity key={index} onPress={() => this.onRecommendSearchPress(value.name)}>
                                  <View style={{borderWidth: 0.5,borderColor: '#e0e0e0',flex:1,borderRadius:5,height:20,marginTop:10,marginRight:10,paddingLeft:7,paddingRight:7,backgroundColor:'white'}}>
                                    <Text style={{color: '#666666',fontFamily:"STXihei",fontSize:12}}>{value.name}</Text>
                                  </View>
                               </TouchableOpacity>
                    }.bind(this))}
                </View>

            </View>
        )
    }
}
