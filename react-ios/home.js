'use strict'

import React, {
  Component,
  View,
  Text,
  TouchableWithoutFeedback,
  ViewPagerAndroid
} from 'react-native'


var ViewPager = require('react-native-viewpager');


import TopbarWithSearch from '../common/components/topbar-with-search'

import HomeRecommend from '../common/components/home-recommend'
import HomeMother from '../common/components/home-muying'
import HomeFemale from '../common/components/home-female'


export default class Home extends Component{



    constructor(){
      super();
      let pages = [{
        title:"推荐",
        key:"recommend"
      },{
        title:"母婴馆",
        key:"mother"
      },{
        title:"女装",
        key:"female"
      }];

      var dataSource = new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
      });

      this.state = {
        pages:pages,
        dataSource: dataSource.cloneWithPages(pages),
        page:0
      };
    }

    _onChangePage(page: number | string) {
       this.setState({page: page});
     }

     goPage(index){
       return;
         this.viewPager.goToPage(index);
         this.setState({page:index})
     }
     _renderPage(data:Object,pageID: number | string,){

       switch (data.key) {
         case 'recommend':
           return(
             <HomeRecommend navigator={this.props.navigator}/>
           )
           break;
         case 'mother':
           return(
             <HomeMother navigator={this.props.navigator}/>
           )
           break;
         case 'female':
           return(
             <HomeFemale navigator={this.props.navigator}/>
           )
           break;
         default:
          return <HomeRecommend navigator={this.props.navigator}/>
       }


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
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage.bind(this)}
                    onChangePage={this._onChangePage.bind(this)}
                    ref={viewPager => { this.viewPager = viewPager; }}/>
            </View>
        )
    }
}
