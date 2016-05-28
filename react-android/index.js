'use strict'

import React, {
  Component,View, Text, ScrollView,StyleSheet,Image,Navigator,StatusBar
} from 'react-native';

import * as navigators from '../common/navigators'


export default class Index extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#e23351"
                />
                <Navigator initialRoute={{name: 'main'}}
                    renderScene={navigators.Navigators}
                    configureScene={(route, routeStack) => route.sceneConfig?route.sceneConfig:Navigator.SceneConfigs.FloatFromRight}/>
            </View>

        )

    }
}
