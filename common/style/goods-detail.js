'use strict';

import React, {
  StyleSheet
} from 'react-native';


export const  GoodsDetailStyle = StyleSheet.create({

    infoView:{
        flexDirection:"row",
        alignItems:"center"

    },
    infoStyle:{
        fontFamily:"STXihei",
        fontSize:12,
        color:"#888888"
    },
    infoRecView:{
        width:13,
        height:13,
        backgroundColor:"#e23351",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:25,
        marginRight:5
    },
    infoRec:{
        fontFamily:"STXihei",
        fontSize:12,
        color:"white"
    },
    titleStyle:{
        marginTop:16,
        fontFamily:"STXihei",
        fontSize:15,
        color:"black",
        lineHeight:25,
        fontWeight:"100"

    },
    price:{
        marginTop:11,
        color:"#e23351",
        fontFamily:"STXihei",
        fontSize:18,

    },
    infoTitle:{
        color:"#0a0a0a",
        marginTop:16,
        fontFamily:"STXihei",
        fontSize:15,
        lineHeight:25,
        fontWeight:"100"
    },
    info:{
        color:"#48484a",
        marginTop:16,
        fontFamily:"STXihei",
        fontSize:12,
        lineHeight:20,
        fontWeight:"100"
    },
    goPurchaseView:{
        width:68,
        height:22,
        backgroundColor:"#e23351",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:4

    }


})
