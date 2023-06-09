import Axios from "./axiosConfig";

// 首页大轮播图
// recommend/page/get?limit=5&offset=0&type=home_main
export const requestScroll = function () {
    return Axios.get("/recommend/page/get?limit=5&offset=0&type=home_main")
}

// 四纬图 
// recommend/page/get?limit=4&offset=0&type=home_sub
export const requestFourimg = function () {
    return Axios.get("/recommend/page/get?limit=4&offset=0&type=home_sub")
}

// 主内容 (推荐)
// article/index/page/get?limit=10&offset=0&created_at=0
// article/index/page/get?limit=10&offset=10&created_at=1682334761
export const requestContents = function (data) {
    return Axios.get("/article/index/page/get", {
        params: data
    })
}
// 主内容 (最热)
// article/tag/page/get?limit=10&offset=0&created_at=1682414114&tag=热门文章&released=false
export const requestHot = function (data) {
    return Axios.get("/article/tag/page/get", {
        params: data
    })
}
// 主内容(应用推荐)
// article/tag/page/get?limit=10&offset=0&created_at=1682414274&tag=应用推荐&search_type=1
export const requestApplication = function (data) {
    return Axios.get("/article/tag/page/get", {
        params: data
    })
}

// 主内容(生活方式)
// article/tag/page/get?limit=10&offset=0&created_at=1682415428&tag=生活方式&search_type=1
export const requestLife = function (data) {
    return Axios.get("/article/tag/page/get", {
        params: data
    })
}


// 主内容(效率技巧)
// article/tag/special/page/get?limit=10&offset=0&created_at=1682415723&tag=效率技巧&search_type=1
export const requestEfficiency = function (data) {
    return Axios.get("/article/tag/special/page/get", {
        params: data
    })
}

// 主内容(少数派博客)
// article/tag/page/get?limit=10&offset=0&created_at=1682416039&tag=少数派播客&search_type=1
export const requestBlog = function (data) {
    return Axios.get("/article/tag/page/get", {
        params: data
    })
}

// 主内容(少数派博客)
// article/post_type/page/get?limit=10&offset=0&created_at=1682416244&post_type=2
export const requestVideo = function (data) {
    return Axios.get("/article/post_type/page/get", {
        params: data
    })
}

// 主内容(右侧 第一部分)
// recommend/page/get?limit=5&offset=0&type=home_sidebar
export const requestRightOne = function () {
    return Axios.get("/recommend/page/get?limit=5&offset=0&type=home_sidebar")
}

// 主内容(右侧 第二部分)
// bullet/search/page/get?limit=3&offset=0
export const requestRightTwo = function () {
    return Axios.get("/bullet/search/page/get?limit=3&offset=0")
}

// 主内容(右侧 第三部分)
// article/matrix/page/get?limit=3&offset=0
export const requestRightThree = function () {
    return Axios.get("/article/matrix/page/get?limit=3&offset=0")
}

// 主内容 跳转 二级页面 内容
// https://sspai.com/api/v1/article/info/get?id=79462&view=second
export const requestConent = function (data) {
    return Axios.get("/article/info/get", {
        params: data
    })
}

// 主内容 跳转 二级页面 文章末尾 联合作者
// 	https://sspai.com/api/v1/user/like/user/page/get?limit=5&article_id=79462
export const requestLike = function (data) {
    return Axios.get("/user/like/user/page/get", {
        params: data
    })
}

// 主内容 跳转 二级页面 评论
// https://sspai.com/api/v1/comment/user/article/hot/page/get?limit=20&offset=0&created_at=1682494561&article_id=79462&flag_model=1
export const requestComment = function (data) {
    return Axios.get("/comment/user/article/hot/page/get", {
        params: data
    })
}

// 主内容 跳转 二级页面 下层 推荐阅读
// https://sspai.com/api/v1/article/relationship/page/get?limit=6&id=79462
export const requestRecommend = function (data) {
    return Axios.get("/article/relationship/page/get", {
        params: data
    })
}

// 首页轮播图 少数之作
// https://sspai.com/api/v1/page/info/get?cname=pi-choice&type=1
export const requestWorks = function (data) {
    return Axios.get("/page/info/get", {
        params: data
    })
}

// 首页轮播图 最新力作
// page/info/get?cname=pi-choice&type=1
export const requestEffort = function () {
    return Axios.get("/page/info/get?cname=pi-choice&type=1")
}

// 首页轮播图 第三形态
// series/info/get?id=298&view=second
export const requestThree = function (data) {
    return Axios.get("/series/info/get", {
        params: data
    })
}
// 首页轮播图 第三形态
// series/article/search/page/get?series_id=298&limit=10&offset=0&weight=0&sort=desc&title=
export const requestThrees = function (data) {
    return Axios.get("/series/article/search/page/get", {
        params: data
    })
}