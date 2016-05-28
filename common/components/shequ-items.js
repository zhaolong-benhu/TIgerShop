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
  TouchableOpacity
} from 'react-native'

import {topBarStyles,itemsStyles,styles} from '../style/shequ'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class CommunityMainItems extends Component{
    state={

    };
    onRowPress(rowData){
        this.props.navigator.push({
           name: "community-detail",
           passProps: {rowData},
       });
    }
    render(){
        return(
          <TouchableOpacity onPress={() => this.onRowPress(this.props.itemsInfo)}>
              <View style={itemsStyles.itemView}>
                    <View style={itemsStyles.itemTopView}>
                        <Image style={itemsStyles.itemsImg} source={{uri: this.props.itemsInfo.img_url}} >
                          <View style={itemsStyles.borderView}>
                            <Text style={itemsStyles.timeText}>{this.props.itemsInfo.time}</Text>
                          </View>
                        </Image>
                    </View>

                <View style={itemsStyles.itemBottomView}>
                    <View style={itemsStyles.articleTitleView}>
                      <Text style={itemsStyles.articleTitle}>{this.props.itemsInfo.title}</Text>
                    </View>
                    <View style={itemsStyles.articleContentView}>
                      <Text style={itemsStyles.articleContent}>{this.props.itemsInfo.description}</Text>
                    </View>
                    <View style={itemsStyles.otherView}>
                      <View style={itemsStyles.userInfo}>
                        <Text style={itemsStyles.nickName}>作者:  {this.props.itemsInfo.user_name}</Text>
                      </View>
                      <View style={itemsStyles.userInteract}>
                        <Text style={itemsStyles.interactText}>推荐 </Text>
                        <Text style={itemsStyles.numText}>{this.props.itemsInfo.recommend_count}</Text>
                        <Text style={itemsStyles.interactText}>评论 </Text>
                        <Text style={itemsStyles.numText}>{this.props.itemsInfo.comment_count}</Text>
                      </View>
                    </View>
                </View>
              </View>
          </TouchableOpacity>

        )
    }
}



export default CommunityMainItems;
