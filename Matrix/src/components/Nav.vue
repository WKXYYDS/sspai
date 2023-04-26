<script setup>
    // 跳转路由传值
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const sspai = () => {
        router.push({
            path:'/'
        })
    }
</script>

<template>
    <div class="Home-nav">
        <div class="ss-header-container">
            <div class="ss-header_wrapper">
                <!-- 左 logo -->
                <div class="ss-header_left" @click="sspai">
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
                                <i class="iconfont icon-medium-m"></i>
                                <span class="label">Matrix</span>
                            </div>
                            <!-- 隐藏部分 -->
                            <div class="none">
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="submenu-title">
                                        <i></i>
                                        <span>Matrix 社区</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#">
                                            <i class="iconfont icon-fenlei" style="font-size: 14px;"></i>
                                            <span class="link-title">社区广场</span>
                                        </a>
                                        <a href="#">
                                            <i class="iconfont icon-xin" style="font-size: 14px;"></i>
                                            <span class="link-title">作者申请</span>
                                        </a>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="submenu-title">
                                        <i></i>
                                        <span>一派</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#">
                                            <i class="iconfont icon-pisa" style="font-size: 14px;"></i>
                                            <span class="link-title">话题广场</span>
                                        </a>
                                        <a href="#">
                                            <i class="iconfont icon-yuyin" style="font-size: 14px;"></i>
                                            <span class="link-title">讨论</span>
                                        </a>
                                        <a href="#">
                                            <i class="iconfont icon-toupiao" style="font-size: 14px;"></i>
                                            <span class="link-title">投票</span>
                                        </a>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="submenu-title">
                                        <i></i>
                                        <span>专栏</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#">
                                            <i class="iconfont icon-zhuanlan" style="font-size: 14px;"></i>
                                            <span class="link-title">全部专栏</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu">
                            <div class="menu-inner">
                                <i class="iconfont icon-lanmuguanli"></i>
                                <span class="label">付费栏目</span>
                            </div>
                        </div>
                        <div class="menu noneTwo">
                            <div class="menu-inner">
                                <i class="iconfont icon-xingxing"></i>
                                <span class="label">特别策划</span>
                            </div>
                            <!-- 隐藏部分 -->
                            <div class="subMenu">
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="link-wrapper">
                                        <a href="#" class="special-link">
                                            <i class="logo-nomo"></i>
                                        </a>
                                        <a href="#" class="special-link">
                                            <i class="logo-shortcut-gallery"></i>
                                        </a>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="submenu-wrapper word">
                                    <div class="submenu-title">
                                        <i></i>
                                        <span>专题</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#">
                                            <i class="iconfont icon-zhuantiweihu" style="font-size: 14px;"></i>
                                            <span class="link-title">全部专题</span>
                                        </a>
                                        <a href="#">
                                            <i class="iconfont icon-kaiguan1" style="font-size: 14px;"></i>
                                            <span class="link-title">硬件</span>
                                        </a>
                                        <a href="#">
                                            <i class="iconfont icon-shuzhuangtu" style="font-size: 14px;"></i>
                                            <span class="link-title">效率</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu noneThree">
                            <div class="menu-inner">
                                <i class="iconfont icon-handbag"></i>
                                <span class="label">Pi Store</span>
                            </div>
                            <!-- 隐藏部分 -->
                            <div class="mall">
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="submenu-title">
                                        <i class="iconfont icon-pinpai"></i>
                                        <span>正版软件</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#" class="buy-link sspai">
                                            <i class="iconfont icon-xinxi-yuan"></i>
                                            <span class="link-title">本站购买</span>
                                        </a>
                                        <a href="#" class="buy-link taobao">
                                            <i class="iconfont icon-taobao"></i>
                                            <span class="link-title">淘宝购买</span>
                                        </a>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="submenu-wrapper">
                                    <div class="submenu-title">
                                        <i class="iconfont icon-pinzhishangpinhuichang"></i>
                                        <span>少数派定制周边</span>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href="#" class="buy-link taobao">
                                            <i class="iconfont icon-taobao"></i>
                                            <span class="link-title">淘宝购买</span>
                                        </a>
                                        <a href="#" class="buy-link youzan">
                                            <i class="iconfont icon-dianzan"></i>
                                            <span class="link-title">有赞购买</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu">
                            <div class="menu-inner">
                                <i class="iconfont icon-icon-test"></i>
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
</template>

<style scoped>
    .iconfont {
        line-height: 1;
        font-size: 2em;
        font-weight: 400;
        margin-right: 4px;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
        font-family: iconfont !important;
    }

    /* 首页导航栏 */
    .Home-nav {
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 100;
        position: fixed;
        background: #232222;
        transition: background .2s;
    }

    .ss-header-container {
        margin: auto;
        height: 60px;
        padding: 0 12px;
        max-width: 1560px;
        position: relative;
    }

    .ss-header_wrapper {
        height: 100%;
        display: flex;
        position: relative;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-box-align: center;
        justify-content: space-between;
    }

    /* 左 */
    .ss-header_left {
        left: 0;
        height: 100%;
        position: absolute;
    }

    .ss-header_home {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        -webkit-box-align: center;
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
        height: 60px;
        padding: 0 15px;
        line-height: 60px;
        position: relative;
        align-items: center;
        display: inline-block;
        -webkit-box-align: center;
    }

    .menu:hover {
        background-color: #3a3838;
    }

    .menu-inner {
        font-size: 12px;
    }

    .label {
        font-size: 1em;
        font-weight: 600;
        text-align: center;
        display: inline-block;
        transition: color .2s;
        letter-spacing: .05em;
        vertical-align: middle;
    }

    /* 中间 鼠标放入显示部分 */
    /* 第一个 */
    .none {
        top: 60px;
        left: -125px;
        z-index: 299;
        display: flex;
        height: 220px;
        display: none;
        position: absolute;
        background-color: #3a3838;
    }

    .noneOne:hover .none {
        display: flex;
    }

    .submenu-wrapper {
        width: 270px;
        position: relative;
    }

    .submenu-wrapper::after {
        right: 0;
        top: 40px;
        width: 1px;
        content: "";
        bottom: 40px;
        display: block;
        position: absolute;
        background: #d7d7d7;
    }

    .submenu-title {
        width: 118px;
        line-height: 0;
        font-size: 14px;
        margin: 24px auto 0;
    }

    .submenu-title span {
        font-size: 14px;
        font-weight: 500;
        line-height: 27px;
        display: inline-block;
        vertical-align: middle;
    }

    .link-wrapper {
        display: flex;
        line-height: 0;
        align-items: center;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
    }

    .none a {
        width: 118px;
        height: 27px;
        cursor: pointer;
        color: #e5e5e5;
        margin-top: 12px;
        transition: all .2s;
    }

    .link-title {
        font-size: 12px;
        font-weight: 500;
        line-height: 27px;
        display: inline-block;
        vertical-align: middle;
    }

    /* 第二个 */
    .noneTwo:hover .subMenu {
        display: flex;
    }

    .subMenu {
        top: 100%;
        left: -185%;
        z-index: 299;
        display: flex;
        height: 220px;
        display: none;
        position: absolute;
        transition: all 0.5s;
        transform-origin: top;
        background: #3a3838;
    }

    .word a {
        width: 118px;
        height: 27px;
        cursor: pointer;
        margin-top: 12px;
        color: #e5e5e5;
        transition: all .2s;
    }

    .special-link {
        width: 152px;
        height: 72px;
        display: flex;
        margin-top: 22px;
        border-radius: 5px;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        -webkit-box-pack: center;
        -webkit-box-align: center;
    }

    .logo-nomo {
        background: url(../assets//NOMO.gif) no-repeat;
        width: 152px;
        height: 72px;
        border-radius: 5px;
        transition: all .25s;
        display: inline-block;
        background-size: contain;
        background-position: 50%;
        border: 1px solid #f7f7f8;
        background-clip: padding-box;
    }

    .logo-shortcut-gallery {
        background: url(../assets/shors.png) no-repeat;
        width: 152px;
        height: 72px;
        border-radius: 5px;
        transition: all .25s;
        display: inline-block;
        background-size: contain;
        background-position: 50%;
        background-clip: padding-box;
    }

    /* 第三 */
    .noneThree:hover .mall {
        display: flex;
    }

    .mall {
        top: 100%;
        left: -284%;
        z-index: 299;
        display: flex;
        height: 220px;
        display: none;
        position: absolute;
        transition: all .25s;
        transform-origin: top;
        background: #3a3838;
    }

    .mall .submenu-title {
        width: 152px;
        text-align: center;
    }

    .buy-link {
        height: 52px;
        width: 152px;
        display: flex;
        color: #e5e5e5;
        margin-top: 16px;
        padding-left: 8px;
        line-height: 52px;
        border-radius: 5px;
        align-items: center;
        -webkit-box-align: center;
        border: 1px solid #e5e5e5;
    }

    .mall span {
        font-size: 14px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: .12em;
    }

    .sspai:hover {
        transition: all 0.5s;
        border: 1px solid red;
        background-color: red;
    }

    .taobao:hover {
        transition: all 0.5s;
        border: 1px solid orange;
        background-color: orange;
    }

    .youzan:hover {
        color: #373737;
        transition: all 0.5s;
        border: 1px solid white;
        background-color: white;
    }

    /* 右 */
    /* 会员 */
    .ss-header_right {
        right: 0;
        height: 100%;
        display: flex;
        position: absolute;
        align-items: center;
        -webkit-box-align: center;
    }

    .logo-prime-wrapper {
        height: 25px;
        margin: 0 8px;
        --height: 30px;
        position: relative;
        border-radius: 30px;
        display: inline-block;
    }

    .logo-prime-wrapper-a {
        padding: 8px 12px;
        border-radius: 30px;
        background: #373737;
    }

    .logo-prime-wrapper-a>span {
        font-size: 12px;
        color: #e5e5e5;
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
        height: 60px;
        margin: 0 8px;
        color: #e5e5e5;
        line-height: 55px;
    }

    /* 登录&头像 */
    .ss-header_person {
        height: 100%;
        display: flex;
        max-width: 60px;
        margin-right: 10px;
        align-items: center;
        transition: max-width .2s;
        -webkit-box-align: center;
    }

    .ss-header_btn-login {
        width: 50px;
        height: 30px;
        margin-right: 0;
        font-size: 1rem;
        color: #655e5e;
        font-weight: 500;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 30px;
        white-space: nowrap;
        background: #e5e5e5;
    }
</style>