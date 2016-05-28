'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  Dimensions,
  ToastAndroid,
  BackAndroid,
  WebView
} from 'react-native'

import {detailStyles,topBarStyles,itemsStyles,styles} from '../style/shequ'
import TopbarWithSearch from './topbar-with-search'


class CommunityDetail extends Component{
    state={
      webViewHeight: 0,
      info: {
           "img_url":"",
           "time":"",
           "title":"",
           "description":"",
           "user_name":"",
           "user_avatar":"",
           "recommend_count":"",
           "comment_count":""}
    };
    constructor(props){
        super(props);
        this.state.info = props.route.passProps.rowData;
    }
    onWebViewNavigationStateChange(navState) {
        if (navState.title) {
            this.setState({
                webViewHeight: Number(navState.title)
            });
        }
    }
    render(){
        return(
              <View style={detailStyles.container}>
                  <TopbarWithSearch hasSearch={false} hasReturn={true} navigator={this.props.navigator}/>
                  <ScrollView>
                      <View style={detailStyles.itemView}>
                        <View style={detailStyles.itemTopView}>
                            <Image style={detailStyles.itemsImg} source={{uri: this.state.info.img_url}} >
                              <View style={detailStyles.borderView}>
                                <Text style={detailStyles.timeText}>{this.state.info.time}</Text>
                              </View>
                            </Image>
                        </View>
                        <View style={detailStyles.itemBottomView}>
                            <View style={detailStyles.articleTitleView}>
                              <Text style={detailStyles.articleTitle}>{this.state.info.title}</Text>
                            </View>
                            <View style={detailStyles.otherView}>
                              <View style={detailStyles.userInfo}>
                                <Text style={detailStyles.nickName}>作者:  {this.state.info.user_name}</Text>
                              </View>
                              <View style={detailStyles.userInteract}>
                                <Text style={detailStyles.interactText}>推荐 </Text>
                                <Text style={detailStyles.numText}>{this.state.info.recommend_count}</Text>
                                <Text style={detailStyles.interactText}>评论 </Text>
                                <Text style={detailStyles.numText}>{this.state.info.comment_count}</Text>
                              </View>
                            </View>
                            {/*<View style={detailStyles.articleContentView}>
                              <Text style={detailStyles.articleContent}>{this.state.info.description}</Text>
                            </View>*/}
                            <WebView
                              ref={"webview"}
                              automaticallyAdjustContentInsets={false}
                              style={{height: this.state.webViewHeight,flex:1}}
                              source={{uri: 'http://www.benhu.com'}}
                              javaScriptEnabled={true}
                              domStorageEnabled={true}
                              decelerationRate="normal"
                              startInLoadingState={true}
                              scalesPageToFit={true}
                              scrollEnabled={false}
                              injectedJavaScript="window.location.hash = 1;document.title = document.height;"
                              onNavigationStateChange={this.onWebViewNavigationStateChange.bind(this)}
                            />
                        </View>
                      </View>
                  </ScrollView>
              </View>
        )
    }
}

export default CommunityDetail;
