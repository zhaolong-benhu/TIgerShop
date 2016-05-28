'use strict'


import React from 'react-native';

import GoodsDetail from './components/goods-detail'

import CommunityDetail from './components/community-detail'
import UserLogin from './components/user-login'
import UserPost from './components/user-post'
import UserFocusScene from './components/user-focus'
import UserCommentScene from './components/user-comments'
import UserMessageScene from './components/user-message'

import MainEntry from '../react-android/entry'
import MainEntryIOS from '../react-ios/entry'


import TicketsDetail from './components/tickets-detail'
import SearchScene from './components/search-scene'
import SearchResult from './components/search-result'


export  const Navigators = (route,navigator)=>{
    if(route.name == 'main')
    {
        return <MainEntry navigator={navigator} route={route} />
    }
    if(route.name == 'main-ios')
    {
        return <MainEntryIOS navigator={navigator} route={route} />
    }
    if(route.name == 'goods')
    {
        return <GoodsDetail navigator={navigator} route={route} />
    }
    if(route.name == 'tickets-detail')
    {
        return <TicketsDetail navigator={navigator} route={route} />
    }
    if(route.name == "login")
    {
        return <UserLogin navigator={navigator} route={route} />
    }
    if(route.name == 'user-post'){
        return <UserPost navigator={navigator} route={route} />
    }
    if(route.name == 'user-focus'){
        return <UserFocusScene navigator={navigator} route={route} />
    }
    if(route.name == 'user-comments'){
        return <UserCommentScene navigator={navigator} route={route} />
    }
    if(route.name == 'user-message'){
        return <UserMessageScene navigator={navigator} route={route} />
    }
    if(route.name == 'community-detail')
    {
      return <CommunityDetail navigator={navigator} route={route} />
    }
    if(route.name =="search")
    {
        return <SearchScene navigator={navigator} route={route} />
    }
    if(route.name =="search-result")
    {
        return <SearchResult navigator={navigator} route={route} />
    }
}
