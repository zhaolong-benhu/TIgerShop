'use strict'

import React ,{Component,View,ListView,Text,Image,
    RecyclerViewBackedScrollView,TouchableOpacity} from 'react-native'

import Toolbar from './topbar-with-search'

export default class UserMessageScene extends Component{

    static defaultProps ={
        test_source:[{
            time:"12/10",
            content:"虎虎购主营潮流服饰、3c、居家、母婴、运动、旅游等商品，旗下优秀的采购团队，网罗全球热门商品，0利润销售，保证正品，让您足不出户就能拥有超值商品。",
        },{
            time:"12/10",
            content:"虎虎购主营潮流服饰、3c、居家、母婴、运动、旅游等商品，旗下优秀的采购团队，网罗全球热门商品，0利润销售，保证正品，让您足不出户就能拥有超值商品。",
        }]

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

    _renderRow(rowData:object, sectionID: number, rowID: number){
        return (
            <TouchableOpacity>
                <View style={{backgroundColor:"white",padding:12,borderBottomWidth:1,borderBottomColor:"#d9d9d9"}}>
                    <Text style={{fontFamily:"STXihei",fontSize:12,color:"#48484a",lineHeight:18}}>
                        {rowData.content}
                    </Text>
                    <View style={{alignItems:"center",justifyContent:"flex-end",flexDirection:"row",marginBottom:15}}>
                        <Text style={{fontFamily:"STXihei",fontSize:12,color:"#48484a"}}>
                            {rowData.time}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f4f4f4'}}>
                <Toolbar title="原创" hasReturn={true} navigator={this.props.navigator}/>
                <ListView dataSource={this.state.dataSource} style={{flex:1,marginTop:12,backgroundColor:"white"}}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    renderRow={this._renderRow.bind(this)}/>
            </View>
        )
    }

}
