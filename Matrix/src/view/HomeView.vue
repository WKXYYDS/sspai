<script setup>
    import { ref } from 'vue';
    // 导入 轮播图接口
    // import { requestScroll,requestContents } from '@/hooks/useRequest.js';
    // 定义轮播图
    // const scroll = ref([]);
    // requestScroll().then(res => {
    //     scroll.value = res
    //     console.log(res);
    // });
</script>

<template>
    <div class="Home-box">
        <!-- 首页导航栏 -->
        <div class="Home-nav">
            <div class="ss-header-container">
                <div class="ss-header_wrapper">
                    <!-- 左 logo -->
                    <div class="ss-header_left">
                        <a href="#" class="ss-header_home">
                            <i class="logo-sspai"></i>
                        </a>
                    </div>
                    <!-- 中间 -->
                    <div class="ss-header_center">
                        <div class="ss-header_menu-wrapper">
                            <!-- 循环 -->
                            <div class="menu noneOne">
                                <div class="menu-inner">
                                    <i class="iconfont icon-medium-m" style="color: aliceblue;"></i>
                                    <span class="label">Matrix</span>
                                </div>
                                <div class="none">
                                    <div class="submenu-wrapper">

                                    </div>
                                </div>
                            </div>
                            <div class="menu">
                                <div class="menu-inner">
                                    <i class="iconfont icon-lanmuguanli" style="color: aliceblue;"></i>
                                    <span class="label">付费栏目</span>
                                </div>
                            </div>
                            <div class="menu noneTwo">
                                <div class="menu-inner">
                                    <i class="iconfont icon-xingxing" style="color: aliceblue;"></i>
                                    <span class="label">特别策划</span>
                                </div>
                            </div>
                            <div class="menu noneThree">
                                <div class="menu-inner">
                                    <i class="iconfont icon-handbag" style="color: aliceblue;"></i>
                                    <span class="label">Pi Store</span>
                                </div>
                            </div>
                            <div class="menu">
                                <div class="menu-inner">
                                    <i class="iconfont icon-icon-test" style="color: aliceblue;"></i>
                                    <span class="label">Tron 计划</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 右  -->
                    <div class="ss-header_right">
                        <!-- 会员 -->
                        <div class="logo-prime-wrapper">
                            <a href="#" class="logo-prime-wrapper-a">
                                <svg data-v-c3f3faec="" width="16" height="14" viewBox="0 0 32 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="logo-prime">
                                    <path data-v-c3f3faec=""
                                        d="M0.557236 2.9718C0.249483 2.9718 0 3.22129 0 3.52904V6.12947C0 6.43723 0.249483 6.68671 0.557236 6.68671H3.71478V21.7321C3.71478 22.0398 3.96426 22.2893 4.27202 22.2893H6.87245C7.1802 22.2893 7.42969 22.0398 7.42969 21.7321V6.68671H11.1445V12.6305L12.5576 21.8167C12.5994 22.0886 12.8333 22.2893 13.1083 22.2893H15.6956C16.0372 22.2893 16.2983 21.9848 16.2464 21.6473L14.8594 12.6306V6.68671H18.0173C18.3251 6.68671 18.5745 6.43723 18.5745 6.12947V3.52904C18.5745 3.22128 18.3251 2.9718 18.0173 2.9718H0.557236Z"
                                        fill="#E5E5E5" class="path-pai"></path>
                                    <path data-v-c3f3faec=""
                                        d="M26.7481 0.557114C26.7481 0.249361 26.4986 -0.00012207 26.1909 -0.00012207H23.5904C23.2827 -0.00012207 23.0332 0.249361 23.0332 0.557114V2.9718H20.6178C20.31 2.9718 20.0605 3.22129 20.0605 3.52904V6.12947C20.0605 6.43723 20.31 6.68671 20.6178 6.68671H23.0332V9.1014C23.0332 9.40915 23.2827 9.65864 23.5904 9.65864H26.1909C26.4986 9.65864 26.7481 9.40915 26.7481 9.1014V6.68671H29.1621C29.4698 6.68671 29.7193 6.43723 29.7193 6.12947V3.52904C29.7193 3.22128 29.4698 2.9718 29.1621 2.9718H26.7481V0.557114Z"
                                        fill="#E5E5E5" class="path-plus"></path>
                                </svg>
                                <span>会员</span>
                            </a>
                        </div>
                        <!-- 搜索 -->
                        <div class="ss-header_search">
                            <div class="ss-header_search_wrapper">
                                <div class="ss-header_btn-search">
                                    <i class="iconfont icon-sousuoxiao" style="font-size: 20px;"></i>
                                </div>
                            </div>
                        </div>
                        <!-- 铃:登陆后才有的 -->
                        <!-- <div class="ss-header_search">
                            <div class="ss-header_search_wrapper">
                                <div class="ss-header_btn-search">
                                    <i class="iconfont icon-lingdang" style="font-size: 20px;"></i>
                                </div>
                            </div>
                        </div> -->
                        <!-- 登录&头像 -->
                        <div class="ss-header_person">
                            <button class="ss-header_btn-login">
                                <span>登录</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主页内容 -->
        <div class="home-page">
            <!-- 轮播 -->
            <div class="main-banner-box">
                <div class="el-carousel">
                    <div class="el-carousel__container" style="height: 367.479px; position: relative;">
                        <el-carousel height="367px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        transition: .2s;
    }

    /* 最大的box */
    .Home-box {
        padding-top: 60px;
    }

    /* 首页导航栏 */
    .Home-nav {
        z-index: 100;
        background: #232222;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        transition: background .2s;
    }

    .ss-header-container {
        max-width: 1560px;
        margin: auto;
        height: 60px;
        position: relative;
        padding: 0 12px;
    }

    .ss-header_wrapper {
        position: relative;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
    }

    /* 左 */
    .ss-header_left {
        position: absolute;
        left: 0;
        height: 100%;
    }

    .ss-header_home {
        width: 100%;
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .logo-sspai {
        width: 100px;
        display: inline-block;
        background-size: contain;
        background-position: 50%;
        background-image: url(../assets/1.png);
    }

    .logo-sspai::before {
        content: "";
        display: block;
        padding-top: 35.77235772357724%;
    }

    /* 中间 */
    .ss-header_center {
        margin: auto;
        color: aliceblue;
    }

    .menu {
        display: inline-block;
        padding: 0 15px;
        height: 60px;
        align-items: center;
        -webkit-box-align: center;
        line-height: 60px;
        position: relative;
    }

    .menu:hover {
        background-color: #3a3838;
    }

    .none { 
        position: absolute; 
        top: 60px;
        left: -125px;
        background-color: #3a3838;
        -webkit-transition: all .25s;
        display: flex;
        z-index: 299;
        height: 220px;
        display: none;
        transition: display 1s;
    }

    .noneOne:hover .none {
        display: block;
        transition: display 1s;
    }

    .menu-inner {
        font-size: 12px;
    }

    .iconfont {
        font-size: 2em;
        display: inline-block;
        margin-right: 4px;
        font-family: iconfont !important;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: middle;
    }

    .label {
        display: inline-block;
        font-size: 1em;
        font-weight: 600;
        letter-spacing: .05em;
        text-align: center;
        vertical-align: middle;
        transition: color .2s;
    }

    /* 右 */
    /* 会员 */
    .ss-header_right {
        display: flex;
        position: absolute;
        right: 0;
        height: 100%;
        align-items: center;
        -webkit-box-align: center;
    }

    .logo-prime-wrapper {
        --height: 30px;
        display: inline-block;
        position: relative;
        height: 25px;
        border-radius: 30px;
        margin: 0 8px;
    }

    .logo-prime-wrapper-a {
        padding: 8px 12px;
        background: #373737;
        border-radius: 30px;
    }

    .logo-prime-wrapper-a>span {
        color: #e5e5e5;
        font-size: 12px;
        font-weight: 600;
        margin-left: 4px;
    }

    .logo-prime {
        display: inline-block;
        vertical-align: middle;

    }

    .path-pai {
        transition: .7s;
    }

    /* 搜索&铃 */
    .ss-header_btn-search {
        color: #e5e5e5;
        margin: 0 8px;
        height: 60px;
        line-height: 55px;
    }

    /* 登录&头像 */
    .ss-header_person {
        margin-right: 10px;
        transition: max-width .2s;
        max-width: 60px;
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss-header_btn-login {
        font-size: 1rem;
        font-weight: 500;
        width: 50px;
        height: 30px;
        padding: 5px 10px;
        margin-right: 0;
        margin-left: 10px;
        color: #655e5e;
        background: #e5e5e5;
        border-radius: 30px;
        white-space: nowrap;
    }

    /* 主页内容 */
    .home-page {
        overflow: hidden;
        min-width: 1090px;
    }

    /* 轮播 */
    .el-carousel {
        transition: all .5s;
        width: 100%;
        overflow-x: hidden;
        position: relative;
        margin: 0 auto;
        color: #fff;
    }

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
</style>