'use strict'
import React, { Component,
    View,Text,Image,Navigator,
    TouchableWithoutFeedback
 } from 'react-native';



export default class TopbarWithoutSearch extends Component{

    static defaultProps = {
            hasReturn:false,
            backIcon:require('../../images/back-icon.png')
    };
    goBack(){
        this.props.navigator.pop();
    }
    render(){
        return(
            <View style={{height:44,backgroundColor:"#e23351",flexDirection:"row"}}>
                <View style={{width:40,alignItems:"center",justifyContent:"center"}} >
                    {(()=>{
                        if(this.props.hasReturn){
                            return <TouchableWithoutFeedback onPress={this.goBack.bind(this)}>
                                <View style={{width:40,height:40,justifyContent:"center",alignItems:"center"}}>
                                    <Image source={this.props.backIcon} style={{width:18,height:18,resizeMode:'contain'}} />
                                </View>
                            </TouchableWithoutFeedback>
                        }
                    })()}
                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    {(()=>{
                        if(!this.props.title)
                        {
                            return <Image source={require('../../images/logo.png')} style={{width:65,height:20}}/>
                        }
                        else{
                            return <Text style={{fontSize:18,fontFamily:"STXihei",color:"white"}}>{this.props.title}</Text>
                        }
                    })()}
                </View>
                    <View style={{width:40,justifyContent:"center",alignItems:"center"}}>
                    </View>
            </View>
        )
    }
}
