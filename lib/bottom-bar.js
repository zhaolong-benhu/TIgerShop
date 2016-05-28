'use strict'
import React, { Component, View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';



const bottomStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'column'
    },
    text:{
        color:"#999999",
        fontFamily:"微软雅黑",
        fontSize:10
    },
    textActive:{
        color:"#f53c6c",
        fontFamily:"微软雅黑",
        fontSize:10
    }
});



export default class BottomBar extends Component{

    static propTypes = {
        handleTabPress:React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.prevContentRef = null;
        this.prevtabRef = null;
        this.state = {
          tabs: props.tabs
        };
    }

    handleTabPress(index)
    {
        this.props.handleTabPress(index);
    }



    renderContents() {
        const { tabs } = this.state;
        return tabs.map((tab, index) => {
            return(
                    <TouchableOpacity onPress={this.handleTabPress.bind(this,index)} style={{flex:1}} key={index}>
                        <View style={bottomStyle.container} >
                            <Image source={index==this.props.currentTab?tab.icon_active:tab.icon}
                            style={{width:27,height:27,resizeMode:"contain"}}/>
                            <Text style={index==this.props.currentTab?bottomStyle.textActive:bottomStyle.text}>{tab.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
        });
      }

    render(){
        return(
            <View style={{height:49,backgroundColor:"white",flexDirection:"row"}}>
                {this.renderContents()}
            </View>
        )
    }

}
