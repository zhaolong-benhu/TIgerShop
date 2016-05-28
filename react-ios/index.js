'use strict'

import React, {
  Component,View, Text, ScrollView,StyleSheet,Image,Navigator,StatusBar
} from 'react-native';

import * as navigators from '../common/navigators'


export default class Index extends Component{
    render(){
        return(
            <View style={{flex:1,paddingTop:20}}>
              <StatusBar
                  hidden={false}
                   backgroundColor="white"
                   barStyle="default"
                 />
                <Navigator initialRoute={{name: 'main-ios'}}
                    renderScene={navigators.Navigators}
                    configureScene={(route, routeStack) => route.sceneConfig?route.sceneConfig:Navigator.SceneConfigs.FloatFromRight}/>
            </View>

        )

    }
}
