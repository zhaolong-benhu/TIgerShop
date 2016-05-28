'use strict';

let express  = require('express');
let path = require('path');
let app = express();

let json_path = path.join(__dirname, 'common/json/');


app.get('/goods/recommend', function (req, res) {
    let test_file = json_path + "goods_test.json";
    var json = require(test_file);

    res.json(json);
});

app.get('/user/info', function (req, res) {
    let test_file = json_path + "user_info.json";
    var json = require(test_file);

    console.log('GET /user/info');
    res.json(json);
});

app.get('/mall/tickets', function (req, res) {
    let test_file = json_path + "mall_tickets.json";
    var json = require(test_file);

    res.json(json);
});

app.get('/shequ/info', function (req, res) {
    let test_file = json_path + "shequ_info.json";
    var json = require(test_file);

    res.json(json);
});

app.get('/shequ/info/home', function (req, res) {
    let test_file = json_path + "shequ_item.json";
    var json = require(test_file);

    res.json(json);
});

app.get('/home/recommend', function (req, res) {
    let test_file = json_path + "home_recommend.json";
    var json = require(test_file);

    res.json(json);
});

app.get('/search/recommend', function(req, res) {
    let test_file = json_path + "search_recommend.json";
    var json = require(test_file);
    res.json(json);
});

app.get('/search/goods', function(req, res) {
    let test_file = json_path + "search_goods.json";
    var json = require(test_file);
    res.json(json);
});

app.get('/search/global', function(req, res) {
    let test_file = json_path + "search_global.json";
    var json = require(test_file);
    res.json(json);
});

app.get('/search/article', function(req, res) {
    let test_file = json_path + "search_article.json";
    var json = require(test_file);
    res.json(json);
});


var server = app.listen(8002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
