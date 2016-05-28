'use strict'

import React ,{Component,View,ListView,Text,Image,
    RecyclerViewBackedScrollView,TouchableOpacity} from 'react-native'

import Toolbar from './topbar-with-search'

export default class UserFocusScene extends Component{

    static defaultProps ={
        test_source:[{
            title:"我的原创第一篇",
            time:"12/10",
            discription:"我的原创内容",
            rate:125,
            collect:20,
            visits:1200
        },{
            title:"我的原创第一篇",
            time:"12/10",
            discription:"我的原创内容",
            rate:125,
            collect:20,
            visits:1200
        },{
            title:"我的原创第一篇",
            time:"12/10",
            discription:"我的原创内容",
            rate:125,
            collect:20,
            visits:1200
        }],
        rateIcon:require('../../images/user/rate.png')
    };

    constructor(){
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds
        };

    }
    componentDidMount(){
        this._genRows();
    }


    _genRows(){
        this.setState({dataSource:this.state.dataSource.cloneWithRows(this.props.test_source)});
    }

    onRowPress(rowData){

    }

    _renderRow(rowData:object, sectionID: number, rowID: number){
        return (<TouchableOpacity onPress={() => this.onRowPress(rowData)}>
            <View style={{paddingLeft:10,paddingRight:10,backgroundColor:'white',marginTop:10,height:85}}>

                <View style={{height:38,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{fontSize:15,fontFamily:"STXihei",color:"#0a0a0a"}}>
                        {rowData.title}
                    </Text>
                    <Text style={{fontSize:12,fontFamily:"STXihei",color:"#48484a"}}>
                        {rowData.time}
                    </Text>
                </View>
                <View style={{height:14}}>
                    <Text style={{color:"#48484a",fontSize:12,fontFamily:"STXihei"}}>
                        {rowData.discription}
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image source={this.props.rateIcon} style={{width:12,height:11,marginRight:5}}/>
                            <Text style={{fontSize:12,fontFamily:"STXihei",color:"#0a0a0a"}}>{rowData.rate}</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:25,alignItems:"center"}}>
                            <Image source={this.props.rateIcon} style={{width:12,height:11,marginRight:5}}/>
                            <Text style={{fontSize:12,fontFamily:"STXihei",color:"#0a0a0a"}}>{rowData.collect}</Text>
                        </View>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:12,fontFamily:"STXihei",color:"#48484a"}}>{rowData.visits}浏览量</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Toolbar title="关注" hasReturn={true} navigator={this.props.navigator}/>
                <ListView dataSource={this.state.dataSource}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                renderRow={this._renderRow.bind(this)}/>
            </View>
        )
    }
}
