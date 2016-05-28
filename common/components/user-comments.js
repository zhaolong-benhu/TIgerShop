'use strict'

import React,{Component,View,Text,ListView,Image,Platform,
    ViewPagerAndroid,TouchableWithoutFeedback,TouchableOpacity} from 'react-native'
import Toolbar from './topbar-with-search'

var ViewPager = require('react-native-viewpager');


export default class UserCommentScene extends Component{
    componentDidMount(){
        this._genRows();
    }
    constructor(props){
        super(props);
        let pages = [{
          title:"我的评论",
          key:"my"
        },{
          title:"给我的评论",
          key:"their"
        }];
        var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            page:0,
            dataSource1: ds1,
            dataSource2:ds2,
            dataSource: dataSource.cloneWithPages(pages),
            pages:pages
        };
    }

    _genRows(){
        // fetch(api.home_recommend_api)
        //   .then((response) => response.json())
        //   .then((responseData) => {
        //       if(responseData.code == 200)
        //       {
        //           let data = responseData.data;
        //           this.setState({dataSource:this.state.dataSource.cloneWithRows(data)});
        //       }
        //   }).catch((error) => {
        //       console.warn(error);
        //   }).done();
        this.setState({
            dataSource1:this.state.dataSource1.cloneWithRows(this.props.dataSource1),
            dataSource2:this.state.dataSource2.cloneWithRows(this.props.dataSource2)
        });
    }
    static defaultProps = {
        pointIcon:require('../../images/user/point-right.png'),
        dataSource1:[{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        },{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        },{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        }],
        dataSource2:[{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        },{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        },{
            avatar:require('../../images/user/test-avatar.png'),
            dest_user:"玩具小熊熊",
            content:"这个东西我觉得不错，可以推荐下~",
            time:"3-7  12:20"
        }]
    };

    goPage(index){
      if(Platform.OS === 'ios')
      {
        return;
      }
        this.viewPager.setPageWithoutAnimation(index);
        this.setState({page:index})

    }
    onPageSelected(e) {
       this.setState({page: e.nativeEvent.position});
     }
     _renderRow(rowData:object, sectionID: number, rowID: number){
         return(
             <TouchableOpacity>
                <View style={{backgroundColor:"white",paddingLeft:12,paddingRight:12,height:67,borderBottomWidth:1,borderBottomColor:"#d9d9d9"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",height:36}}>
                        <View style={{alignItems:"center",flexDirection:"row"}}>
                            <Image source={rowData.avatar} style={{width:20,height:20}}/>
                            <Image source={this.props.pointIcon} style={{width:13,height:8,marginLeft:6,marginRight:6}}/>
                            <Text style={{fontFamily:'STXihei',fontSize:12,color:'#888888'}}>{rowData.dest_user}</Text>
                        </View>
                        <View style={{alignItems:"center",flexDirection:"row"}}>
                            <Text style={{fontFamily:'STXihei',fontSize:12,color:'#888888'}}>{rowData.time}</Text>
                        </View>
                    </View>
                    <View style={{flex:1,marginLeft:25}}>
                        <Text style={{color:"#48484a",fontFamily:'STXihei',fontSize:12}}>{rowData.content}</Text>
                    </View>
                </View>
             </TouchableOpacity>
         )
     }

    render(){
        return(
            <View style={{flex:1}}>
                <Toolbar title="评论" hasReturn={true} navigator={this.props.navigator}/>
                <View style={{height:28,flexDirection:"row",alignItems:"center",backgroundColor:"white",borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                    <TouchableWithoutFeedback onPress={this.goPage.bind(this,0)}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={this.state.page==0?{color:"#f53c6c"}:{}}>我的评论</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.goPage.bind(this,1)}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={this.state.page==1?{color:"#f53c6c"}:{}}>给我的评论</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                {(()=>{
                  if(Platform.OS === 'android')
                  {
                      return <ViewPagerAndroid
                          onPageSelected={this.onPageSelected.bind(this)}
                          style={{flex:1,marginTop:13}}
                          ref={viewPager => { this.viewPager = viewPager; }}
                          initialPage={0}>
                           <View style={{flex:1}}>
                              <ListView dataSource={this.state.dataSource1}
                                  renderRow={this._renderRow.bind(this)}
                              />
                           </View>

                           <View style={{flex:1}}>
                               <ListView dataSource={this.state.dataSource2}
                                   renderRow={this._renderRow.bind(this)}
                               />
                           </View>
                      </ViewPagerAndroid>
                  }
                  else{
                    return <ViewPager
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage.bind(this)}
                        onChangePage={this._onChangePage.bind(this)}
                        ref={viewPager => { this.viewPager = viewPager; }}/>
                  }
                })()}


            </View>
        )
    }
    _onChangePage(page: number | string) {
       this.setState({page: page});
     }
     _renderPage(data:Object,pageID: number | string,){

       switch (data.key) {
         case 'my':
           return(
             <ListView dataSource={this.state.dataSource1}
                 renderRow={this._renderRow.bind(this)}
             />
           )
           break;
         case 'their':
           return(
             <ListView dataSource={this.state.dataSource2}
                 renderRow={this._renderRow.bind(this)}
             />
           )
           break;
         default:
          return <View navigator={this.props.navigator}/>
       }


     }
}
