'use strict'

import React,{Component,View,Image,TextInput,StyleSheet,Text,TouchableWithoutFeedback,TouchableOpacity,ToastAndroid} from "react-native"

 const styles = StyleSheet.create({
     searchText:{
         marginLeft:5,
         flex:1,
         color:"white",
         fontFamily:"STXihei",
         fontSize:12,
         height:40,
         lineHeight:40,
         paddingTop: 12,
         backgroundColor:'#e23351',
         alignItems:'center'
     }
 })

export default class TopbarSearchInput extends Component{

    state={
        keyword_input: ""
    };
    constructor(props){
        super(props);
        this.state.keyword_input = props.keyword_input;
    }
    static defaultProps = {
        back_icon:require('../../images/back-icon.png'),
        clear_icon:require('../../images/x.png'),
        editable:true,
    };
    goBack(){
        this.props.navigator.pop();
    }
    clearTextInput() {
      this.setState({keyword_input:""});
    }
    onSubmitEditing(search_keyword){
      if (search_keyword){
          this.props.navigator.push({
             name: "search-result",
             passProps: {search_keyword},
         });
      }
    }
    render(){
        return(
          <View style={{height:44,backgroundColor:"#e23351",flexDirection:"row",alignItems:"center"}}>
              <TouchableWithoutFeedback onPress={this.goBack.bind(this)}>
                  <View style={{height:40,width:42,justifyContent:'center',alignItems:'center'}}>
                        <Image source={this.props.back_icon} style={{width:18,height:18,resizeMode:'contain'}}/>
                  </View>
              </TouchableWithoutFeedback>

              <TextInput placeholder="搜索更多" editable ={this.props.editable}
              selectionColor="#ffffff" value={this.state.keyword_input}
              placeholderTextColor="#ff8c9f" style={styles.searchText} autoCorrect={false}
              onChangeText={(keyword_input) => this.setState({keyword_input})}
              onSubmitEditing={(event) => this.onSubmitEditing(event.nativeEvent.text)}/>
              {(()=>{
                  if (this.props.editable){
                        return <TouchableOpacity onPress={() => this.clearTextInput()}>
                                  <View style={{height:40,width:38,justifyContent:'center',alignItems:'center'}}>
                                      <Image source={this.props.clear_icon} style={{width:14,height:14}} />
                                  </View>
                              </TouchableOpacity>
                  }
              })()}

          </View>
        )
    }
}
