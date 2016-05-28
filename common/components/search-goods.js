'use strict'

import React, {
  Component,
  View,
  Text,
  ListView,
  RecyclerViewBackedScrollView,
  Image,
  RefreshControl,
  ScrollView,
  ToastAndroid
} from 'react-native'

import * as api from '../const/restAPI'


import TouchableOpacity from 'TouchableOpacity'


export default class SearchGoods extends Component{

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
        fetch(api.search_goods_api+'?keyword='+this.props.keyword_input)
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

    _renderRow(rowData:object, sectionID: number, rowID: number){

        return(
            <TouchableOpacity onPress={() => this.onRowPress(rowData)}>
                <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:12}}>
                    <Image source={{uri:(rowData.url)}} style={{width:75,height:75}}/>
                    <View style={{flex:1,flexDirection:'column',height:70,justifyContent:'space-between',marginLeft:10}}>
                        <Text style={{fontFamily:'STXihei',fontSize:15,color:'black'}}> {rowData.title} </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontFamily:'STXihei',fontSize:12}}> {rowData.mall} </Text>
                            <Text style={{fontFamily:'STXihei',fontSize:12,color:'#e23351'}}> ￥{rowData.price} </Text>
                        </View>
                        <View>
                            <Text style={{fontFamily:'STXihei',fontSize:12}}>优惠力度</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    _onRefresh(){

     }

    onRowPress(rowData){
        this.props.navigator.push({
           name: "goods",
           passProps: {rowData},
       });
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
                <ListView style={{backgroundColor:"#f4f4f4",flex:1,paddingTop:-12}}
                     dataSource={this.state.dataSource}
                     renderRow={this._renderRow.bind(this)}
                     refreshControl={refreshControl}
                     />
        )
    }
}
