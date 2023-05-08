<script setup>
    import { ref, watchEffect, } from 'vue';
    import { useRouter } from 'vue-router'
    // 导入 轮播图接口,四维图,主内容(默认推荐,最热,应用推荐,生活方式,效率技巧,少数派播客,视频,主内容(右侧 第一部分),主内容(右侧 第二部分))
    import { requestScroll, requestFourimg, requestContents, requestHot, requestApplication, requestLife, requestEfficiency, requestBlog, requestVideo, requestRightOne, requestRightTwo, requestRightThree } from '@/hooks/useRequest.js';
    // 导入导航栏组件
    import Nav from '../components/Nav.vue'
    // 定义轮播图
    const scroll = ref([]);
    requestScroll().then(res => {
        scroll.value = res.data.data
        console.log(res.data.data);
    })
    // 定义 四维图
    const fourImg = ref([])
    requestFourimg().then(res => {
        fourImg.value = res.data.data
    })
    // 定义 主内容数据
    const page = ref(0)
    const contents = ref([])
    requestContents().then(res => {
        contents.value = res.data.data
        console.log(res.data.data);
    })
    // 控制tabber 当前是哪个分类,顺便修改数据
    const nums = ref(1)
    const num = (value) => {
        nums.value = value
        if (value == 1) {
            requestContents().then(res => {
                contents.value = res.data.data
            })
        } else if (value == 2) {
            requestHot({
                tag: '热门文章'
            }).then(res => {
                contents.value = res.data.data
            })
        } else if (value == 3) {
            requestApplication({
                tag: '应用推荐'
            }).then(res => {
                contents.value = res.data.data
            })
        } else if (value == 4) {
            requestLife({
                tag: '生活方式'
            }).then(res => {
                contents.value = res.data.data
            })
        } else if (value == 5) {
            requestEfficiency({
                tag: '效率技巧'
            }).then(res => {
                contents.value = res.data.data
            })
        } else if (value == 6) {
            requestBlog({
                tag: '少数派播客'
            }).then(res => {
                contents.value = res.data.data
            })
        } else if (value == 7) {
            requestVideo({
                post_type: 2
            }).then(res => {
                contents.value = res.data.data
            })
        }
    }
    // 触底加载
    // 定义一个 当前窗口高度 的变量
    const Top = ref(0)
    const REQUIRE = ref(true)
    const scrollBottom = () => {
        Top.value = document.documentElement.scrollTop
        if (!REQUIRE.value) return
        if (nums.value == 1) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestContents({
                    limit: 10,
                    offset: page.value
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 2) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestHot({
                    limit: 10,
                    offset: page.value,
                    tag: '热门文章'
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 3) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestApplication({
                    limit: 10,
                    offset: page.value,
                    tag: '应用推荐'
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 4) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestLife({
                    limit: 10,
                    offset: page.value,
                    tag: '生活方式'
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 5) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestEfficiency({
                    limit: 10,
                    offset: page.value,
                    tag: '效率技巧'
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 6) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestBlog({
                    limit: 10,
                    offset: page.value,
                    tag: '少数派播客'
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        } else if (nums.value == 7) {
            if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
                REQUIRE.value = false;
                page.value = page.value + 10
                requestVideo({
                    limit: 10,
                    offset: page.value
                }).then(res => {
                    contents.value = contents.value.concat(res.data.data)
                    REQUIRE.value = true;
                })
            }
        }
    }
    window.addEventListener('scroll', scrollBottom)
    // 主内容(右侧 第一部分)
    const RightOne = ref([])
    requestRightOne().then(res => {
        RightOne.value = res.data.data
    })
    // 主内容(右侧 第二部分)
    const RightTwo = ref([])
    requestRightTwo().then(res => {
        RightTwo.value = res.data.data
    })
    // 主内容(右侧 第三部分)
    const RightThree = ref([])
    requestRightThree().then(res => {
        RightThree.value = res.data.data
    })
    // 点击主内容 跳转 二级页面
    const router = useRouter()
    // 点击事件(主内容)
    const route = (id, name) => {
        console.log(name);
        if (name != '付费内容') {
            router.push({
                path: '/details',
                query: {
                    id: id
                }
            })
        }
    }
    // 轮播图与四维点击事件
    const imageFour = (url) => {
        console.log(url.length);
        if (url.length == 32) {
            const stringlength = url.length
            var newstring = url.substring(stringlength - 9, stringlength);
            router.push({
                path: '/works',
                query: {
                    id: newstring
                }
            })
        }
        if (url.length == 28) {
            const stringlength = url.length
            var newstring = url.substring(stringlength - 5, stringlength);
            if (newstring.indexOf('/') == -1) {
                router.push({
                    path: '/details',
                    query: {
                        id: newstring
                    }
                })
            }
        }
    }
</script>

<template>
    <div class="Home-box">
        <!-- 首页导航栏 -->
        <Nav></Nav>
        <!-- 主页内容 -->
        <div class="home-page">
            <!-- 轮播 -->
            <div class="main-banner-box">
                <div class="el-carousel">
                    <div class="el-carousel__container" style="height: 367.479px; position: relative;">
                        <el-carousel height="367px">
                            <el-carousel-item v-for="(item,index) in scroll" :key="item.id"
                                @click="imageFour(item.url)">
                                <el-image style="width: 100%; height: 100%"
                                    :src=" 'https://cdn.sspai.com/' + item.image + '?imageMogr2/auto-orient/quality/95/thumbnail/!2880x620r/gravity/Center/crop/2880x620/interlace/1'"
                                    fit="cover" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <!-- 轮播之下四纬图 -->
            <div class="minor-banner-box">
                <div class="minor-banner">
                    <ul>
                        <li class="minor-item" v-for="item in fourImg" :key="item.id" @click="imageFour(item.url)">
                            <a href="#">
                                <img :src="'https://cdn.sspai.com/' + item.image + '?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1'"
                                    alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 推荐等内容 -->
            <div class="contain-box">
                <!-- 正文 -->
                <div class="contain_content">
                    <!-- 推荐等目录 -->
                    <div class="home_tabs_wrapper">
                        <div class="swiper-container">
                            <ul class="swiper-wrapper">
                                <li :class="nums == 1 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(1)">推荐</li>
                                <li :class="nums == 2 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(2)">最热</li>
                                <li :class="nums == 3 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(3)">应用推荐</li>
                                <li :class="nums == 4 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(4)">生活方式</li>
                                <li :class="nums == 5 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(5)">效率技巧</li>
                                <li :class="nums == 6 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(6)">博客</li>
                                <li :class="nums == 7 ? 'tabs-item swiper-slide active' : 'tabs-item swiper-slide' "
                                    @click="num(7)">视频</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 内容 -->
                    <div class="articleCard_content">
                        <div class="articleCard-box">
                            <!-- 循环 -->
                            <div v-for="item in contents" :key="item.id">
                                <div class="articleCard" v-if="item.morning_paper_title.length == 0"
                                    @click="route(item.id,item.corner.name)">
                                    <!-- 普通 -->
                                    <div class="advertisementCardBoxs">
                                        <!-- 左 -->
                                        <div class="img_box">
                                            <a href="#">
                                                <img class="card_img"
                                                    :src="'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1'"
                                                    alt="">
                                            </a>
                                            <a class="corner" href="#">
                                                <img class="corner_img" :src="item.corner.icon" alt="">
                                            </a>
                                        </div>
                                        <!-- 右 -->
                                        <div class="card_content">
                                            <a href="#" class="pc_card">
                                                <div class="title text_ellipsis2">
                                                    {{item.title}}
                                                </div>
                                            </a>
                                            <!--  -->
                                            <div class="txt text_ellipsis3"></div>
                                            <div class="card_bottom pc_card">
                                                <div class="left">
                                                    <div class="pic_box">
                                                        <a href="#">
                                                            <img class="header"
                                                                :src="'https://cdn.sspai.com/' + item.author.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1'"
                                                                alt="">
                                                        </a>
                                                        <a href="#">
                                                            <span class="name">
                                                                {{item.author.nickname}}
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div class="pic_box time">
                                                        <span>24 分钟前</span>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <div class="pic_box">
                                                        <i class="iconfont icon-shandian" style="font-size: 18px;"></i>
                                                        <span class="name">{{item.like_count}}</span>
                                                    </div>
                                                    <div class="pic_box">
                                                        <i class="iconfont icon-duihuakuang1"
                                                            style="font-size: 18px;"></i>
                                                        <span class="name">{{item.comment_count}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 大块头 -->
                                <div class="pai articleCard home pc" v-if="item.morning_paper_title.length"
                                    @click="route(item.id)">
                                    <!-- 上 -->
                                    <div class="pai_title">
                                        <a href="#">
                                            <div class="title">
                                                {{item.corner.name}}
                                            </div>
                                        </a>
                                        <div class="time">
                                            <div>
                                                二〇二三年四月二十四日
                                            </div>
                                            <div>
                                                星期一
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="#">
                                                阅读全篇早报&gt;
                                            </a>
                                        </div>
                                    </div>
                                    <!-- 下 -->
                                    <div class="pai_content">
                                        <div class="img_box pai_img_box">
                                            <a href="#">
                                                <img class="card_img"
                                                    :src="'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!456x456r/gravity/Center/crop/456x456/interlace/1'"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="pai_card_content">
                                            <!-- 循环 -->
                                            <div class="pai_abstract" v-for="(items,index) in item.morning_paper_title"
                                                :key="items.index">
                                                <div class="index">0{{index + 1}}</div>
                                                <a href="#">
                                                    <div class="content text_ellipsis2">
                                                        {{items}}
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧 -->
                <div class="indexRight">
                    <div>
                        <!-- 第一部分 -->
                        <div>
                            <!-- 循环 -->
                            <a href="#" class="home-sidebar-hot" v-for="item in RightOne" :key="item.id">
                                <img class="right_top_img"
                                    :src="'https://cdn.sspai.com/' + item.image + '?imageMogr2/auto-orient/quality/95/thumbnail/!548x264r/gravity/Center/crop/548x264/interlace/1'"
                                    alt="">
                            </a>
                        </div>
                        <!-- 第二部分 -->
                        <div class="yipai-container">
                            <i class="yipai-logo"></i>
                            <ul class="yipai-list">
                                <!-- 循环 -->
                                <li class="yipai-item" v-for="item in RightTwo" :key="item.banner_id">
                                    <a href="#" class="bullet">
                                        <div class="bullet-info">
                                            <div class="bullet-title">
                                                {{item.title}}
                                            </div>
                                            <div class="bullet-bottom">
                                                <i class="iconfont icon-yuyin" style="font-size: 15px;"></i>
                                                <span class="bullet-vol">讨论 VOL.{{item.vol}}</span>
                                            </div>
                                        </div>
                                        <img class="bullet-banner"
                                            :src="'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!126x88r/gravity/Center/crop/126x88/interlace/1'"
                                            alt="">
                                    </a>
                                </li>
                            </ul>
                            <a href="#" class="btn-more">
                                <span>查看全部</span>
                                <i class="iconfont icon-xiangyoujiantou" style="font-size: 12px;"></i>
                            </a>
                        </div>
                        <!-- 第三部分 -->
                        <div class="sticky-wrapper">
                            <div :class="Top >= 1900 ? 'sot' : '' ">
                                <!-- 上 -->
                                <div class="right_item">
                                    <div class="item_sign">
                                        <img class="sign_img" src="../assets/3.png" alt="">
                                        <span class="sign_txt">
                                            Matrix
                                            <span class="small">精选</span>
                                        </span>
                                    </div>
                                    <ul class="item_ul">
                                        <!-- 循环 -->
                                        <li class="item_li" v-for="item in RightThree" :key="item.id">
                                            <a href="#" class="list-item-a">
                                                <div class="item-title">
                                                    {{item.title}}
                                                </div>
                                                <a>
                                                    <img class="avatar header_img"
                                                        :src="'https://cdn.sspai.com/' + item.author.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64'"
                                                        alt="">
                                                    <span class="nickname">{{item.author.nickname}}</span>
                                                </a>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" class="btn-more">
                                        <span>查看全部</span>
                                        <i class="iconfont icon-xiangyoujiantou" style="font-size: 12px;"></i>
                                    </a>
                                </div>
                                <!-- 下 -->
                                <div class="right_bottom phone">
                                    <!-- 上 -->
                                    <div class="icon_box">
                                        <a href="#" class="social-item">
                                            <i class="iconfont icon-xinlangweibo" style="font-size: 18px;"></i>
                                        </a>
                                        <span>
                                            <span class="social-item">
                                                <i class="iconfont icon-weixin" style="font-size: 18px;"></i>
                                            </span>
                                        </span>
                                        <a href="#" class="social-item">
                                            <i class="iconfont icon-yuyin" style="font-size: 18px;"></i>
                                        </a>
                                    </div>
                                    <!-- 中 -->
                                    <div class="link_box">
                                        <div class="link_ul">
                                            <div class="link_li">
                                                <a href="#">关于我们</a>
                                            </div>
                                            <div class="link_li">
                                                <a href="#">商务合作</a>
                                            </div>
                                            <div class="link_li">
                                                <a href="#">联系我们</a>
                                            </div>
                                        </div>
                                        <div class="link_ul">
                                            <div class="link_li">
                                                <a href="#">成为作者</a>
                                            </div>
                                            <div class="link_li">
                                                <a href="#">常见问题</a>
                                            </div>
                                        </div>
                                        <div class="link_ul">
                                            <div class="link_li">
                                                <a href="#">用户协议</a>
                                            </div>
                                            <div class="link_li">
                                                <a href="#">客户端</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下 -->
                                    <div class="ssp_text">
                                        <span>© 2013-2023 少数派</span>
                                        <a href="#">粤ICP备09128966号-4</a>
                                        <a href="#">粤B2-20211534</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    button {
        padding: 0;
        border: none;
        cursor: pointer;
        transition: .2s;
        background: none;
    }

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

    /* 最大的box */
    .Home-box {
        padding-top: 60px;
        background-color: #f4f4f4;
    }

    /* 主页内容 */
    .home-page {
        overflow: hidden;
        min-width: 1090px;
    }

    /* 轮播 */
    .el-carousel {
        width: 100%;
        color: #fff;
        margin: 0 auto;
        overflow-x: hidden;
        position: relative;
        transition: all .5s;
    }

    .el-carousel__item h3 {
        margin: 0;
        opacity: 0.75;
        color: #475669;
        line-height: 150px;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    /* 四纬图 */
    .minor-banner-box {
        z-index: 5;
        margin-top: -40px;
        position: relative;
        margin-bottom: 30px;
    }

    .minor-banner {
        padding: 0;
        z-index: 1;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        list-style: none;
        max-width: 1120px;
        position: relative;
    }

    .minor-banner ul {
        z-index: 1;
        height: 100%;
        display: flex;
        width: 1120px;
        position: relative;
        transform: translate3d(0px, 0px, 0px);
        transition-property: transform, -webkit-transform;
    }

    .minor-item {
        width: 264px;
        height: 144px;
        overflow: hidden;
        position: relative;
        border-radius: 6px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: inline-block;
        transform: rotate(0deg);
        box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
    }

    .minor-item a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .minor-banner img {
        width: 100%;
        height: 100%;
        transition: all .5s;
        border-radius: 6px;
    }

    .minor-banner img:hover {
        transform: scale(1.1);
    }

    /* 推荐等内容 */
    .contain-box {
        margin-top: -10px;
        width: 100%;
        max-width: 1120px;
        display: flex;
        margin: 0 auto;
    }

    .contain_content {
        flex: 1;
        margin-right: 20px;
    }

    .home_tabs_wrapper {
        height: 48px;
    }

    .swiper-container {
        transition: .2s;
        background: #f4f4f4;
        z-index: 9;
        width: 100% !important;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
    }

    .swiper-wrapper {
        width: 592px;
        display: flex;
        margin-left: 0;
        transform: translate3d(0px, 0, 0);
        position: relative;
        height: 100%;
        z-index: 1;
    }

    /* 推荐内容的tabber */
    .tabs-item {
        padding: 0 14px;
        width: auto;
        cursor: pointer;
        font-size: 16px;
        transition: all .1s;
        margin: 0;
        margin-right: 10px;
        height: 48px;
        box-sizing: border-box;
        line-height: 48px;
        white-space: nowrap;
    }

    .swiper-slide {
        flex-shrink: 0;
        position: relative;
    }

    .active {
        color: #d71a1b;
        font-weight: 500;
        border-bottom: 2px solid #d71a1b;
    }

    /* 内容 */
    .articleCard-box {
        margin-top: 20px;
    }

    .articleCard {
        margin-bottom: 15px;
    }

    .advertisementCardBoxs {
        user-select: none;
        max-width: 800px;
        display: flex;
        background: #fff;
        width: 100%;
    }

    .advertisementCardBoxs a {
        color: #292525;
    }

    .advertisementCardBoxs:hover .img_box {
        cursor: pointer;
        width: 390px;
    }

    .advertisementCardBoxs:hover .img_box::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .1);
        pointer-events: none;
    }

    /* 左 */
    .advertisementCardBoxs .img_box {
        width: 50%;
        padding-top: 25%;
        overflow: hidden;
        position: relative;
        transition: all .2s ease-out;
        backface-visibility: hidden;
        background: linear-gradient(180deg, transparent, #000);
    }

    .advertisementCardBoxs .card_img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        width: auto;
        height: 100%;
        transition: width .2s ease-out, height .2s ease-out;
    }

    .corner {
        position: absolute;
        left: 13px;
        top: 10px;
    }

    .corner_img {
        width: auto;
        height: 24px;
    }

    /* 右 */
    .card_content {
        width: 50%;
        padding: 30px;
        box-sizing: border-box;
        transition: all .2s ease-out;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
    }

    .pc_card {
        display: flex;
        margin: auto 0;
    }

    .advertisementCardBoxs .title {
        color: #292525;
        font-weight: 600;
        font-size: 20px;
        height: 57px;
        margin-bottom: 20px;
        line-height: 1.4;
        text-align: left;
    }

    .text_ellipsis2,
    .text_ellipsis3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .txt {
        color: #655e5e;
        margin-bottom: 20px;
    }

    .card_bottom {
        color: #655e5e;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 0;
    }

    .pc_card {
        margin: auto 0;
    }

    .left {
        display: flex;
    }

    .left .pic_box {
        margin-right: 10px;
        white-space: nowrap;
    }

    .pic_box {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #8e8787;
    }

    .header {
        cursor: pointer;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .name {
        display: flex;
        max-width: 90px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .right {
        display: flex;
    }

    .right .pic_box {
        margin-left: 20px;
    }

    /* 大块头 */
    .pai {
        background: #fff;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column;
        max-width: 800px;
        width: 100%;
        display: flex;
    }

    .pai_title {
        height: 81px;
        margin: 31px 31px 0 34px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    .pai .title {
        float: left;
        width: 31%;
        margin-top: 10px;
        height: 45px;
        font-size: 32px;
        line-height: 45px;
        letter-spacing: .1em;
        color: #292525;
        font-weight: 500;
    }

    .pai .time {
        float: left;
        height: 65px;
        margin-top: 15px;
        padding-left: 20px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: .05em;
        color: #655e5e;
    }

    .link {
        float: right;
        margin-top: 15px;
        height: 65px;
    }

    .link a {
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: .1em;
        color: #fd281a;
    }

    /* 下 */
    .pai .pai_content {
        padding: 30px;
        height: 100%;
        display: flex;
    }

    .pai .img_box {
        transition: all .2s ease-out;
        backface-visibility: hidden;
        background: linear-gradient(102.13deg, #ededed 5.23%, #e0e0e0 91.38%);
        width: 31%;
        padding-top: 31%;
        border-radius: 2px;
        overflow: hidden;
        position: relative;
    }

    .pai .img_box .card_img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .pai .pai_card_content {
        display: inline-flex;
        box-sizing: border-box;
        width: 70%;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row;
        flex-wrap: wrap;
        padding: 0 0 0 20px;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .pai .pai_abstract {
        width: 47%;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .pai .index {
        font-size: 20px;
        line-height: 28px;
        color: #d71a1b;
        font-weight: 600;
    }

    .pai .content {
        margin-left: 16px;
        font-size: 16px;
        line-height: 22px;
        color: #292525;
    }

    .pai .content:hover {
        text-decoration: underline;
    }

    /* 主内容 右侧 */
    .indexRight {
        width: 274px;
        position: relative;
        margin-top: 67px;
    }

    /* 第一部分 */
    .home-sidebar-hot {
        display: block;
        margin-top: 32px;
        cursor: pointer;
    }

    .home-sidebar-hot:first-child {
        margin-top: 0;
    }

    .right_top_img {
        width: 274px;
        height: 132px;
        border-radius: 2px;
    }

    /* 第二部分 */
    .yipai-container {
        background: #fff;
        padding: 24px 24px 0;
        margin-top: 32px;
    }

    .yipai-container .yipai-logo {
        display: block;
        width: 90px;
        height: 40px;
        background: url(../assets/2.png);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .yipai-container .yipai-list {
        margin-top: 4px;
    }

    .yipai-container .yipai-item {
        border-bottom: 1px solid #e5e5e5;
    }

    .yipai-container .bullet {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 20px 0;
        color: #292525;
    }

    .yipai-container .bullet-info {
        margin-right: 16px;
    }

    .yipai-container .bullet-title {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 8px;
    }

    .yipai-container .bullet-bottom .bullet-vol {
        color: #655e5e;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
        vertical-align: middle;
    }

    .yipai-container .bullet-banner {
        width: 63px;
        height: 44px;
        border-radius: 4px;
    }

    .yipai-container .btn-more {
        display: block;
        cursor: pointer;
        padding: 16px 0;
        line-height: 20px;
        color: #8e8787;
    }

    .yipai-container .btn-more span {
        vertical-align: middle;
    }

    /* 第三部分 */
    .sot {
        width: 274px;
        position: fixed;
        top: 60px;
        left: 1139.33px;
        bottom: auto;
    }

    /* 上 */
    .sticky-wrapper .right_item {
        margin-top: 24px;
        background: #fff;
        padding: 24px 24px 0;
    }

    .sticky-wrapper .item_sign {
        background: #fff;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .sticky-wrapper .sign_img {
        width: 40px;
        height: 40px;
    }

    .sticky-wrapper .sign_txt {
        font-size: 18px;
        line-height: 25px;
        color: #292525;
        margin-left: 8px;
        font-weight: 500;
    }

    .sticky-wrapper .small {
        font-size: 16px;
        line-height: 22px;
    }

    .sticky-wrapper .item_ul {
        margin-top: 4px;
    }

    .sticky-wrapper .item_li {
        display: flex;
        border-bottom: 1px solid #e5e5e5;
    }

    .sticky-wrapper .list-item-a {
        display: block;
        width: 100%;
        cursor: pointer;
        color: #292525;
        padding: 20px 0;
    }

    .sticky-wrapper .item-title {
        margin-bottom: 12px;
    }

    .sticky-wrapper .header_img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    .sticky-wrapper .nickname {
        color: #655e5e;
        margin-left: 8px;
        vertical-align: middle;
    }

    .sticky-wrapper .btn-more {
        display: block;
        cursor: pointer;
        padding: 16px 0;
        line-height: 20px;
        color: #8e8787;
    }

    .sticky-wrapper .btn-more span {
        vertical-align: middle;
    }

    /* 下 */
    .sticky-wrapper .right_bottom {
        border-top: 1px solid #e5e5e5;
        margin-top: 30px;
        padding-top: 30px;
    }

    .sticky-wrapper .icon_box {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .sticky-wrapper .social-item {
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 34px;
        height: 34px;
        background: #fff;
        border-radius: 50%;
        color: #8e8787;
        transition: .2s;
    }

    .sticky-wrapper .link_box {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-top: 30px;
    }

    .sticky-wrapper .link_li {
        margin-bottom: 10px;
        width: 50px;
        text-align: center;
    }

    .sticky-wrapper .link_li a {
        color: #8e8787;
        font-size: 12px;
    }

    .sticky-wrapper .ssp_text {
        margin-top: 30px;
        font-size: 12px;
        color: #c1bdbd;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
    }

    .sticky-wrapper .ssp_text span {
        margin-bottom: 8px;
    }

    .sticky-wrapper .ssp_text a {
        font-size: 12px;
        color: #c1bdbd;
        margin-bottom: 8px;
    }

    /* 修改组件中的样式 */
    .el-carousel__indicator--horizontal .el-carousel__button {
        width: 10px;
        height: 10px;
        opacity: 0.8;
        border-radius: 4px;
        border: none !important;
        border: 1px solid #ffffff;
        background: rgba(78, 78, 78, 0.3);
    }

    .el-carousel__indicator--horizontal.is-active .el-carousel__button {
        opacity: 1;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 20px;
        border: none !important;
    }

    .el-carousel__indicator--horizontal .el-carousel__button {
        border-radius: 20px !important;
    }

    .el-carousel__indicators--horizontal {
        margin: 0 auto;
    }

    .el-carousel__indicators--horizontal {
        bottom: 50px !important;
    }
</style>