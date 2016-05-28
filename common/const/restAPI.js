'use strict'


const api_prefix = 'http://api2.benhu.com/v1/';
// const api_prefix = 'http://192.168.1.40:8877/v1/';
// const api_prefix = 'http://192.168.31.232:8002/';
// const api_prefix = 'http://192.168.1.40:8877/v1/';

export const login_by_account = api_prefix + 'user/login';
export const login_by_token = api_prefix + 'user/login';

export const user_info_api = api_prefix + 'user/info';
export const mall_tickets_api = api_prefix + 'mall/tickets';
export const shequ_info_api = api_prefix + 'shequ/info';
export const shequ_info_home_api = api_prefix + 'shequ/info/home';
export const home_recommend_api = api_prefix + 'home/recommend';
export const home_mother_api = api_prefix + 'home/muying';
export const home_female_api = api_prefix + 'home/female';

export const search_recommend_api = api_prefix + 'search/recommend';
export const search_goods_api = api_prefix + 'search/goods';
export const search_global_api = api_prefix + 'search/global';
export const search_article_api = api_prefix + 'search/article';
