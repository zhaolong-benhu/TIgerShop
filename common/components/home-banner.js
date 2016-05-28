'use strict'

import React, {
  Component,
  View,
  Text,
  ViewPagerAndroid,
  Image
} from 'react-native'

import SwiperView from '../../lib/swiper'
import ReactSwiper from '../../lib/react-native-swiper'

export default class HomeBanner extends Component{
    render(){
        return(
            <ReactSwiper style={{height:140,backgroundColor:"white"}}
            paginationStyle={{bottom:5}}
            autoplayTimeout={8} autoplay={true} height={140}>
                <View style={{margin:10}}>
                    <Image
                    style={{height:140,resizeMode:'cover'}}
                    source={{uri: 'http://img10.360buyimg.com/n1/g13/M09/08/05/rBEhUlIcRKkIAAAAAAGQ_z5JZYkAACfWwPa7KwAAZEX717.jpg'}}/>
                </View>
                <View style={{margin:10}}>
                    <Image
                    style={{height:140,resizeMode:'cover'}}
                    source={{uri: 'http://img10.360buyimg.com/n1/g13/M09/08/05/rBEhUlIcRKkIAAAAAAGQ_z5JZYkAACfWwPa7KwAAZEX717.jpg'}}/>
                </View>
                <View style={{margin:10}}>
                    <Image
                    style={{height:140,resizeMode:'cover'}}
                    source={{uri: 'http://img10.360buyimg.com/n1/g13/M09/08/05/rBEhUlIcRKkIAAAAAAGQ_z5JZYkAACfWwPa7KwAAZEX717.jpg'}}/>
                </View>
            </ReactSwiper>

        )
    }
}
