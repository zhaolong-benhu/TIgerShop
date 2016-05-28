'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  ToastAndroid,
  ViewPagerAndroid,
  ListView
} from 'react-native';

import {shequ_info_api,shequ_info_home_api} from './const/restAPI'

import {topBarStyles,itemsStyles,styles} from './style/shequ'

import TopbarWithSearch from './components/topbar-with-search'

import CommunityMainItems from './components/shequ-items'


class CommunityMain extends Component{
    state={

    };
    componentDidMount(){
        this.fetchCommunityInfo();
    }
    fetchCommunityInfo(){
        fetch(shequ_info_home_api)
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.code == 200)
              {
                  let data = responseData.items;
                  this.setState({dataSource:this.state.dataSource.cloneWithRows(data)});
              }
          }).catch((error) => {
              console.warn(error);
          }).done();
    }
    constructor(){
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds
        };
    }
    _renderRow(rowData:object, sectionID: number, rowID: number){
        return(
                <CommunityMainItems navigator={this.props.navigator} itemsInfo={rowData}></CommunityMainItems>
        )
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
          <View style={styles.container}>
              <TopbarWithSearch  navigator={this.props.navigator}/>
              <View style={{backgroundColor:"#f4f4f4",height:12}}></View>
              <ListView
                   dataSource={this.state.dataSource}
                   renderRow={this._renderRow.bind(this)}
                   refreshControl={refreshControl}>
              </ListView>
          </View>

        )
    }
}

export default CommunityMain;
