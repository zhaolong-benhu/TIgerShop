'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

var DEFAULT_URL = 'http://www.benhu.com';

class GotoShopView extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{height:40,textAlign:'center'}}>虎虎商城</Text>
        <WebView style={styles.webview_style}
          url={DEFAULT_URL}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    )
  }
}

  var styles = StyleSheet.create({
      webview_style:{
         backgroundColor:'#00ff00',
      }
  })


AppRegistry.registerComponent('GotoShopView', () => GotoShopView);
export default GotoShopView;
