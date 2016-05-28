'use strict';

import React, {
  StyleSheet
} from 'react-native';


const contentStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
    },

    buttonsArea:{
        height:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:"white"
    },
    buttonOrigin:{
        marginLeft:10,
        height:40,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonFocus:{
        height:40,
        marginLeft:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonComment:{
        height:40,
        flex:1,
        marginLeft:20,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'
    },
    settings:{
        flexDirection:'column',
        marginRight:10,
        marginLeft:10,
        flex:1,

    },
    settingItem:{
        height:40,
        borderWidth:1,
        justifyContent:'center',
        marginTop:10,
    },
    itemLabel:{
        marginLeft:5
    }
});

let userStyles = StyleSheet.create({
    userInfo:{
        flex:1,
        backgroundColor:'white',
        marginLeft:20,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    userName:{
        marginTop:17,
        marginLeft:12,
        fontFamily:"STXihei",
        fontSize:18,
        color:"#0a0a0a"
    },
    userDetail:{
        flex:1,
        flexDirection:'row',
        marginLeft:12,
        marginTop:12,
    },
    detailFont:{
        fontFamily:"STXihei",
        fontSize:12,
        color:"#666666"
    },
    userDetailLeft:{
    },
    userDetailRight:{
        marginLeft:39
    }
});

let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
  },

    header:{
        height:80,
        flexDirection:'row',
        backgroundColor:"white"
    },
    avatarContainer:{
        width:50,
        justifyContent:"center",
        marginLeft:20

    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25

    },
});


export {contentStyles,userStyles,styles};
