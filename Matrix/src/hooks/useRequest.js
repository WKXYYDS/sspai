import axios from "axios";

// 首页大轮播图
// recommend/page/get?limit=5&offset=0&type=home_main
export const requestScroll = function () {
    return axios.get("/recommend/page/get?limit=5&offset=0&type=home_main")
}

// 主内容 (推荐，最热，等..)
// article/index/page/get?limit=10&offset=0&created_at=0
export const requestContents = function () {
    return axios.get("/article/index/page/get?limit=10&offset=0&created_at=0")
}