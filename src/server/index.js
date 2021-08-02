import http from './http';

export const listObj = {
//  猜你喜欢页面数据
    getGuesslike: () => http.get('/guesslike'),
//  注册页面登录接口
    registAccount: (content) => http.post(`/register`,content),
//  登录页面接口
    loginAccount: (content) => http.post(`/login`,content),
//  美食页面数据接口
    getFoodlist: () => http.get('/food'),
//  美食详情接口
    getFoodDetail: (id) => http.get(`/fooddetail?id=${id}`),
//  电影页面数据接口
    getMovieList: () => http.get('/movies'),
//  影院数据接口
    getCinemaList: () => http.get('/cinema')
    /* getloop:() => http.get(`${aaa}/getlunbo`),
    
    comment:(a,content) => http.post(`/postcomment/${a}`,{content}),

    getComment:(id,page) =>http.get(`/getcomments/${id}?pageindex=${page}`),
    getImageData:imgid =>http.get(`/getimages/${imgid}`),
    getList:()=>http.get("http://localhost:3001/allData"),
    getShopInfo:page => http.get(`/getgoods?pageindex=${page}`) */
}