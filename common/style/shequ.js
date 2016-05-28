'use strict';

import React, {
  StyleSheet,
  Image,

} from 'react-native';

let detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  itemView:{
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  itemTopView:{
    height: 165,
    backgroundColor: '#ffffff'
  },
  itemBottomView:{
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingLeft:12,
    paddingRight:12,
    paddingBottom:12,
    borderColor: '#000000',
  },
  itemsImg:{
    flex: 1,
    height: 140,
    margin: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  borderView: {
    width: 110,
    height: 20,
    borderColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    opacity:0.5
  },
  timeText:{
    width: 110,
    height: 20,
    lineHeight: 20,
    fontSize: 12,
    color: '#000000',
    fontFamily:'STXihei',
    textAlign: 'center',
  },
  articleTitleView: {
    height: 20,
  },
  articleTitle: {
    height: 20,
    fontSize: 15,
    lineHeight: 20,
    color: '#0a0a0a',
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  articleContentView: {
    backgroundColor: '#ffffff'
  },
  articleContent: {
    marginTop: 5,
    lineHeight: 18,
    fontSize: 12,
    color: '#48484a',
    fontFamily:'STXihei',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  otherView: {
    height: 25,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  userInfo: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInteract: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  interactText: {
    fontSize: 12,
    color: '#48484a',
    marginLeft: 10,
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  nickName: {
    color: "#666666",
    fontSize: 12,
    alignItems:'center',
    overflow: 'hidden',
    height: 20,
    lineHeight: 20,
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  numText: {
    fontFamily:'STXihei',
    color: "#e23351",
    fontSize: 12,
    justifyContent: 'center',
  },
  webView: {
    backgroundColor: "red",
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});


let topBarStyles = StyleSheet.create({
  container: {
    height:30,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: '#ffffff'
  },
  barView: {
    flex:1,
    height: 30,
    alignItems:"center",
    flexDirection: "row",
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0'
  },
  textView: {
    flex:1,
    justifyContent: 'center',
    flexDirection: "row",
  },
  name: {
    height: 30,
    lineHeight: 30,
    color: '#000000',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily:'STXihei',
  },
  nameSelect: {
    color:"#f53c6c",
    textDecorationLine: "underline",
    textDecorationColor: "#f53c6c",
    textDecorationStyle: 'solid',
  },
  splitLine: {
    right: 0,
    width: 1,
    height: 10,
    backgroundColor: '#d9d9d9',
  }
});


let itemsStyles = StyleSheet.create({
  itemView:{
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  itemTopView:{
    height: 165,
    backgroundColor: '#ffffff'
  },
  itemBottomView:{
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingLeft:12,
    paddingRight:12,
    paddingBottom:12,
    borderColor: '#000000',
  },
  itemsImg:{
    flex: 1,
    height: 140,
    margin: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  borderView: {
    width: 110,
    height: 20,
    borderColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    opacity:0.5
  },
  timeText:{
    width: 110,
    height: 20,
    lineHeight: 20,
    fontSize: 12,
    color: '#000000',
    fontFamily:'STXihei',
    textAlign: 'center',
  },
  articleTitleView: {
    height: 20,
  },
  articleTitle: {
    height: 20,
    fontSize: 15,
    lineHeight: 20,
    color: '#0a0a0a',
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  articleContentView: {
    backgroundColor: '#ffffff'
  },
  articleContent: {
    marginTop: 5,
    lineHeight: 18,
    fontSize: 12,
    color: '#48484a',
    fontFamily:'STXihei',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  otherView: {
    height: 25,
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  userInfo: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInteract: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  interactText: {
    fontSize: 12,
    color: '#48484a',
    marginLeft: 10,
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  nickName: {
    color: "#666666",
    fontSize: 12,
    alignItems:'center',
    overflow: 'hidden',
    height: 20,
    lineHeight: 20,
    fontFamily:'STXihei',
    justifyContent: 'center',
  },
  numText: {
    fontFamily:'STXihei',
    color: "#e23351",
    fontSize: 12,
    justifyContent: 'center',
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContent: {
    height: 60,
    backgroundColor: '#558855',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollContent: {
    flexDirection: 'column',
    backgroundColor: '#999999',
  },
});


export {detailStyles,topBarStyles,itemsStyles,styles};
