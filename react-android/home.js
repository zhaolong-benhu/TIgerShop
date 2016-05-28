'use strict'

import React, {
  Component,
  View,
  Text,
  TouchableWithoutFeedback,
  ViewPagerAndroid
} from 'react-native'



import TopbarWithSearch from '../common/components/topbar-with-search'

import HomeRecommend from '../common/components/home-recommend'
import HomeMother from '../common/components/home-muying'
import HomeFemale from '../common/components/home-female'


export default class Home extends Component{

    state={
            page:0
    };

    onPageSelected(e) {
       this.setState({page: e.nativeEvent.position});
     }

     goPage(index){
         this.viewPager.setPageWithoutAnimation(index);
         this.setState({page:index})
     }
    render(){
        return(
            <View style={{flex:1}}>
                <TopbarWithSearch navigator={this.props.navigator}/>
                <View style={{height:27,flexDirection:"row",alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress={this.goPage.bind(this,0)}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={this.state.page==0?{color:"#f53c6c"}:{}}>推荐</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.goPage.bind(this,1)}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={this.state.page==1?{color:"#f53c6c"}:{}}>母婴馆</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.goPage.bind(this,2)}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={this.state.page==2?{color:"#f53c6c"}:{}}>女装</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ViewPagerAndroid
                    onPageSelected={this.onPageSelected.bind(this)}
                    style={{flex:1}}
                    ref={viewPager => { this.viewPager = viewPager; }}
                    initialPage={0}>

                     <View >
                       <HomeRecommend navigator={this.props.navigator}/>

                     </View>
                     <View >
                        <HomeMother navigator={this.props.navigator}/>
                     </View>
                     <View >
                        <HomeFemale navigator={this.props.navigator}/>
                     </View>
                </ViewPagerAndroid>
            </View>
        )
    }
}
