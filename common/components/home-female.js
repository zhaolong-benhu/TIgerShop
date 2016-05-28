'use strict'

import React, {
  Component,
  View,
  Text,
  ListView,
  RecyclerViewBackedScrollView,
  Image,
  RefreshControl,
  ScrollView
} from 'react-native'

import * as api from '../const/restAPI'


import TouchableOpacity from 'TouchableOpacity'


export default class HomeFemale extends Component{

    static defaultProps ={
            start_icon:require('../../images/start.png')
    };

    constructor(){
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds,
          isRefreshing:false,
          loadingMore:false,
          currentPage:0,
          list:[],
        };

    }
    componentDidMount(){
        this._refreshRows();
    }

    _refreshRows(){

        this._loadMoreRows(true);
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
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:'STXihei',fontSize:12,marginLeft:2,marginRight:5}}>优惠力度</Text>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>
                            <Image source={this.props.start_icon} style={{width:12,height:11,marginLeft:2}}/>

                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    _onRefresh(){
        this.setState({isRefreshing: true});
        this._refreshRows();
     }
    onRowPress(rowData){
        this.props.navigator.push({
           name: "goods",
           passProps: {rowData},
       });
    }
    _loadMoreRows(refresh=true){
        let url = api.home_female_api;
        if(!refresh){
            url = url + "?page=" + (this.state.currentPage + 1);
        }
        fetch(url)
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.code == 200)
              {
                  let data = responseData.data;
                  let list = data;
                  if(!refresh)
                  {
                      list = this.state.list.concat(data);
                      this.setState({currentPage:this.state.currentPage + 1});
                  }
                  else {
                      this.setState({currentPage:0});
                  }
                  this.setState({list:list,dataSource:this.state.dataSource.cloneWithRows(list)});
              }
              this.setState({isRefreshing:false,loadingMore:false});
          }).catch((error) => {
              console.warn(error);
              this.setState({isRefreshing:false,loadingMore:false})

          }).done();
    }
    _reachEnd(){
        if(this.state.isRefreshing == false && this.state.loadingMore == false)
        {
            this.setState({loadingMore:true});
            this._loadMoreRows(false);
        }
    }

    _handleScroll(event){
        if(this._distanceFromEnd(event) < 200){
            this._reachEnd();
        }
    }
    _distanceFromEnd(event) {
        let {
          contentSize,
          contentInset,
          contentOffset,
          layoutMeasurement,
        } = event.nativeEvent;


      let contentLength = contentSize.height;
      let trailingInset = contentInset.bottom;
      let scrollOffset = contentOffset.y;
      let viewportLength = layoutMeasurement.height;

      return contentLength + trailingInset - scrollOffset - viewportLength;
    }

    render(){
        return(
                <ListView style={{backgroundColor:"#f4f4f4",flex:1,paddingTop:10}}
                     dataSource={this.state.dataSource}
                     renderRow={this._renderRow.bind(this)}
                     onScroll={this._handleScroll.bind(this)}

                     refreshControl={
                         <RefreshControl
                           enabled={true}
                           refreshing={this.state.isRefreshing}
                           onRefresh={this._onRefresh.bind(this)}
                           colors={['#ff0000', '#00ff00', '#0000ff']}
                           progressBackgroundColor="#ffffff"
                         />
                     }
                     />
        )
    }
}
