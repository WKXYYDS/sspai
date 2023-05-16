<script setup>
    import { ref } from 'vue';
    // 导入 
    import { requestThree, requestThrees } from '@/hooks/useRequest.js';
    // 导入导航栏组件
    import Nav from '../components/Nav.vue'
    // 跳转路由传值
    import { useRouter } from 'vue-router'
    // 路由
    const router = useRouter()
    // 内容
    const content = ref({})
    // 作者
    const author = ref({})
    // 内容
    requestThree({
        id: router.currentRoute.value.query.id
    }).then(res => {
        console.log(res.data.data);
        content.value = res.data.data
        author.value = res.data.data.author
    })
    // 简介 目录等 变量
    const actives = ref(1)
    // 目录
    const directory = ref([])
    // 简介 目录等点击事件
    const active = (value) => {
        actives.value = value
        if (value == 2) {
            requestThrees({
                series_id: router.currentRoute.value.query.id,
                limit: 10,
                offset: 0
            }).then(res => {
                console.log(res.data.data);
                directory.value = res.data.data
            })
        }
    }
</script>
<template>
    <div>
        <!-- 导航栏 -->
        <Nav></Nav>
        <!-- 最大的box -->
        <div id="add" class="app_normal">
            <!-- 主内容 -->
            <div class="series-page">
                <!-- 第一部分 -->
                <div class="header-box">
                    <!--  -->
                    <div class="series-item-header">
                        <!-- 大图片 -->
                        <img class="series_banner_img"
                            :src="'https://cdn.sspai.com/' + content.banner_web + '?imageMogr2/auto-orient/quality/95/thumbnail/!2880x660r/gravity/Center/crop/2880x660/interlace/1'"
                            alt="">
                        <!-- 详情 -->
                        <div class="series_con">
                            <!--  -->
                            <div class="series-blurb-group">
                                <!--  -->
                                <div class="blurb-group-content">
                                    <!--  -->
                                    <div class="display-flex">
                                        <!--  -->
                                        <div class="display-flex-1">
                                            <!--  -->
                                            <div class="title text_ellipsis">{{ content.title}}</div>
                                            <!--  -->
                                            <div class="title_text">{{content.description}}</div>
                                            <!--  -->
                                            <div class="explain">
                                                <!--  -->
                                                <div class="price_box">
                                                    <!--  -->
                                                    <span>￥</span>
                                                    <!--  -->
                                                    <span class="number">{{content.price}}</span>
                                                </div>
                                                <!--  -->
                                                <div class="explain_update nowrap" v-if="content.release_frequency">
                                                    <!--  -->
                                                    <span class="spot_span">更新中</span>
                                                    <!--  -->
                                                    <span class="spot_span">{{content.release_frequency}}</span>
                                                </div>
                                                <div class="explain_update nowrap" v-else>
                                                    <!--  -->
                                                    <span class="spot_span">已完结</span>
                                                </div>
                                                <!--  -->
                                                <div class="explain_item">
                                                    共 {{content.article_total}} 期
                                                    <span class="mb-hidden">({{content.article_total_intro}})</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="userInfo_box">
                                            <!--  -->
                                            <div class="ss__portrait avatar"
                                                style="--size: 28px; --proportion: 1.7142857142857142;">
                                                <!--  -->
                                                <a href="#" class="ss__portrait__link">
                                                    <!--  -->
                                                    <img :src=" author.avatar == '2022/03/31/avatar/318ea40f95131badf593632870fec9e7.png' ?  'https://cdn.sspai.com/' + author.avatar + 'imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                        alt="">
                                                </a>
                                            </div>
                                            <!--  -->
                                            <div class="name">{{author.nickname}}</div>
                                        </div>
                                    </div>
                                    <!--  -->
                                    <div class="handle_box">
                                        <!--  -->
                                        <div class="btn-box">
                                            <!--  -->
                                            <button class="el-button el-button--default is-round ss-buy ss-small">
                                                <!--  -->
                                                <span>
                                                    立即订阅
                                                </span>
                                            </button>
                                        </div>
                                        <!--  -->
                                        <span class="ss-popover-share">
                                            <!--  -->
                                            <span class="el-popover__reference-wrapper">
                                                <!--  -->
                                                <span class="share-text inline-block el-popover__reference">
                                                    <!--  -->
                                                    <i></i>
                                                    <!--  -->
                                                    <span class="vm inline-block">推荐给朋友</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 简介 目录等 -->
                        <div class="blurb_content">
                            <!--  -->
                            <div class="blurb_content_tab">
                                <!--  -->
                                <div :class="actives == 1 ? 'blurb_tab_item exact-active-link active-link active' :'blurb_tab_item exact-active-link active-link'"
                                    @click="active(1)">简介
                                </div>
                                <!--  -->
                                <div :class="actives == 2 ? 'blurb_tab_item active' : 'blurb_tab_item'"
                                    @click="active(2)">目录</div>
                                <!--  -->
                                <div :class="actives == 3 ? 'blurb_tab_item active' : 'blurb_tab_item'"
                                    @click="active(3)">制作</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 第二部分 -->
                <div>
                    <!-- 简介 -->
                    <div v-if="actives == 1" class="series-blurb-page wangEditor-txt" v-html="content.intro"></div>
                    <!-- 目录 -->
                    <div v-if="actives == 2">
                        <!--  -->
                        <div class="series-list-page">
                            <!-- 搜索 筛选 最新顺序 -->
                            <div class="series_tab_handle">
                                <!--  -->
                                <div class="handle_item">
                                    <i></i>
                                    <input type="text" placeholder="默认" class="search_input">
                                </div>
                                <!--  -->
                                <div class="handle_item">
                                    <!--  -->
                                    <span>
                                        <!--  -->
                                        <span class="el-popover__reference-wrapper">
                                            <!--  -->
                                            <div class="screen_name el-popover__reference">筛选</div>
                                        </span>
                                    </span>
                                </div>
                                <!--  -->
                                <div class="handle_item">
                                    <!--  -->
                                    <span>
                                        <!--  -->
                                        <span class="el-popover__reference-wrapper">
                                            <!--  -->
                                            <div class="screen_name el-popover__reference">
                                                <!--  -->
                                                <span>最新排序</span>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <!-- 内容 -->
                            <div class="series-list-container">
                                <!-- 免费 -->
                                <div class="bar_item">
                                    <!--  -->
                                    <div class="bar">免费试读</div>
                                    <!--  -->
                                    <div v-for="item in content.probation_articles" :key="item.id">
                                        <!--  -->
                                        <div class="series-blurb-list is_pay" style="border: medium none;">
                                            <!-- 详情 -->
                                            <div class="blurb_item_con">
                                                <!--  -->
                                                <div class="title noRead">
                                                    <!--  -->
                                                    <a href="#">{{item.title_prefix}}</a>
                                                </div>
                                                <!--  -->
                                                <div class="content_box">
                                                    <!--  -->
                                                    <div class="title_name">
                                                        <!--  -->
                                                        <div class="text_ellipsis2">
                                                            <!--  -->
                                                            <span>
                                                                <!--  -->
                                                                <a href="#">{{item.title}}</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!--  -->
                                                    <div class="msg_box">
                                                        <!--  -->
                                                        <a href="#">
                                                            <!--  -->
                                                            <div class="pic_box cursor_box">
                                                                <!--  -->
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.3239 2.3999H5.51016C5.43517 2.3999 5.37024 2.45198 5.35397 2.52519L4.04328 8.42233C4.02107 8.52225 4.0971 8.61705 4.19947 8.61705H6.73871C6.83103 8.61705 6.90419 8.69495 6.8984 8.78709L6.58044 13.8435C6.57035 14.0039 6.77656 14.0774 6.87018 13.9468L11.8186 7.04167C11.8944 6.9358 11.8188 6.78847 11.6885 6.78847H9.3125C9.2034 6.78847 9.1263 6.68169 9.16062 6.57814L10.4757 2.61024C10.5101 2.50669 10.433 2.3999 10.3239 2.3999Z"
                                                                        stroke="#8E8787" stroke-width="1.12"></path>
                                                                </svg>
                                                                <!--  -->
                                                                <span class="name">{{item.like_count}}</span>
                                                            </div>
                                                        </a>
                                                        <!--  -->
                                                        <a href="#" style="margin-left: 16px;">
                                                            <!--  -->
                                                            <div class="pic_box cursor_box">
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0)">
                                                                        <path
                                                                            d="M2.16034 3.83992C2.16034 3.08882 2.76924 2.47992 3.52034 2.47992L12.4803 2.47992C13.2314 2.47992 13.8403 3.08882 13.8403 3.83992V10.0799C13.8403 10.831 13.2314 11.4399 12.4803 11.4399H8.75663C8.37109 11.4399 8.00367 11.6036 7.74575 11.8901L5.77873 14.0757C5.63159 14.2392 5.36034 14.1351 5.36034 13.9152V12.0799C5.36034 11.7265 5.0738 11.4399 4.72034 11.4399H3.52034C2.76924 11.4399 2.16034 10.831 2.16034 10.0799V3.83992Z"
                                                                            stroke="#8E8787" stroke-width="1.12"></path>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0">
                                                                            <rect width="16" height="16" fill="white">
                                                                            </rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <!--  -->
                                                                <span class="name">{{item.comment_count}}</span>
                                                            </div>
                                                        </a>
                                                        <!--  -->
                                                        <a href="#" style="margin-left: 16px;">
                                                            <!--  -->
                                                            <div class="pic_box">
                                                                <span>02 月 13 日</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 图片 -->
                                            <div>
                                                <!--  -->
                                                <a href="#">
                                                    <!--  -->
                                                    <img class="blurb_list_img"
                                                        :src="'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!380x190r/gravity/Center/crop/380x190/interlace/1'"
                                                        alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 付费 -->
                                <div class="bar_item">
                                    <!--  -->
                                    <div class="bar">全部内容（付费后可读）</div>
                                    <!--  -->
                                    <div v-for="item in directory" :key="item.id">
                                        <!--  -->
                                        <div class="series-blurb-list is_pay2" style="border: medium none;">
                                            <!-- 详情 -->
                                            <div class="blurb_item_con">
                                                <!--  -->
                                                <div class="title">
                                                    <a href="#">{{item.title_prefix}}</a>
                                                </div>
                                                <!--  -->
                                                <div class="content_box ">
                                                    <!--  -->
                                                    <div class="title_name">
                                                        <!--  -->
                                                        <div class="text_ellipsis2 ">
                                                            <!--  -->
                                                            <span class="noRead">
                                                                <!--  -->
                                                                <a href="#">{{item.title}}</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!--  -->
                                                    <div class="msg_box">
                                                        <!--  -->
                                                        <a href="#">
                                                            <!--  -->
                                                            <div class="pic_box cursor_box">
                                                                <!--  -->
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.3239 2.3999H5.51016C5.43517 2.3999 5.37024 2.45198 5.35397 2.52519L4.04328 8.42233C4.02107 8.52225 4.0971 8.61705 4.19947 8.61705H6.73871C6.83103 8.61705 6.90419 8.69495 6.8984 8.78709L6.58044 13.8435C6.57035 14.0039 6.77656 14.0774 6.87018 13.9468L11.8186 7.04167C11.8944 6.9358 11.8188 6.78847 11.6885 6.78847H9.3125C9.2034 6.78847 9.1263 6.68169 9.16062 6.57814L10.4757 2.61024C10.5101 2.50669 10.433 2.3999 10.3239 2.3999Z"
                                                                        stroke="#8E8787" stroke-width="1.12"></path>
                                                                </svg>
                                                                <!--  -->
                                                                <span class="name">{{item.like_count}}</span>
                                                            </div>
                                                        </a>
                                                        <!--  -->
                                                        <a href="#" style="margin-left: 16px;">
                                                            <!--  -->
                                                            <div class="pic_box cursor_box">
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0)">
                                                                        <path
                                                                            d="M2.16034 3.83992C2.16034 3.08882 2.76924 2.47992 3.52034 2.47992L12.4803 2.47992C13.2314 2.47992 13.8403 3.08882 13.8403 3.83992V10.0799C13.8403 10.831 13.2314 11.4399 12.4803 11.4399H8.75663C8.37109 11.4399 8.00367 11.6036 7.74575 11.8901L5.77873 14.0757C5.63159 14.2392 5.36034 14.1351 5.36034 13.9152V12.0799C5.36034 11.7265 5.0738 11.4399 4.72034 11.4399H3.52034C2.76924 11.4399 2.16034 10.831 2.16034 10.0799V3.83992Z"
                                                                            stroke="#8E8787" stroke-width="1.12"></path>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0">
                                                                            <rect width="16" height="16" fill="white">
                                                                            </rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <!--  -->
                                                                <span class="name">{{item.comment_count}}</span>
                                                            </div>
                                                        </a>
                                                        <!--  -->
                                                        <a href="#" style="margin-left: 16px;">
                                                            <!--  -->
                                                            <div class="pic_box">
                                                                <span>02 月 13 日</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 图片 -->
                                            <div>
                                                <!--  -->
                                                <a href="#">
                                                    <!--  -->
                                                    <img class="blurb_list_img"
                                                        :src="'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!380x190r/gravity/Center/crop/380x190/interlace/1'"
                                                        alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 制作 -->
                    <div v-if="actives == 3" v-html="content.metadata" class="series-metadata-page wangEditor-txt">
                    </div>
                </div>
            </div>
            <!-- 底盘 -->
            <div></div>
        </div>
    </div>
</template>

<style>
    img {
        vertical-align: middle;
    }

    .app_normal {
        --header_height: 60px;
        --footer_height: 122px;
        background: #f7f7f8;
        padding-top: 60px;
        padding-bottom: 122px;
        min-height: 100vh;
    }

    #app {
        position: relative;
        box-sizing: border-box;
    }

    /* 主内容 */
    /* 第一部分 */
    /* 图片 */
    .series-item-header .series_banner_img {
        width: 100%;
    }

    /* 详情 */
    .series-item-header .series_con {
        max-width: 710px;
        margin: -40px auto 0;
        position: relative;
        z-index: 5;
    }

    .series-blurb-group {
        padding: 24px 30px;
        background: #fff;
        max-width: 710px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        position: relative;
    }

    .series-blurb-group .blurb-group-content {
        -webkit-box-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    .series-blurb-group .display-flex {
        display: flex;
    }

    .series-blurb-group .display-flex-1 {
        -webkit-box-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    .series-blurb-group .title {
        font-size: 24px;
        color: #292525;
        line-height: 34px;
        margin-bottom: 4px;
        font-weight: 500;
    }

    .text_ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .series-blurb-group .title_text {
        font-size: 14px;
        color: #8e8787;
        line-height: 20px;
        margin-bottom: 24px;
        max-width: 500px;
    }

    .series-blurb-group .explain {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #655e5e;
        font-size: 14px;
        margin-bottom: 22px;
    }

    .series-blurb-group .price_box {
        color: #fd281a;
        font-size: 12px;
        font-weight: 500;
    }

    .series-blurb-group .price_box .number {
        font-size: 24px;
        letter-spacing: 0;
    }

    .series-blurb-group .explain_update {
        margin-left: 14px;
        margin-right: 30px;
    }

    .nowrap {
        white-space: nowrap;
    }

    .series-blurb-group .spot_span {
        position: relative;
    }

    .series-blurb-group .spot_span~.spot_span::after {
        content: ".";
        position: absolute;
        top: 2px;
        left: -14px;
        font-size: 25px;
        line-height: 0;
    }

    .series-blurb-group .userInfo_box {
        text-align: center;
        margin-left: 20px;
    }

    .ss__portrait {
        width: calc(28px * 1.7142857142857142);
        height: calc(28px * 1.7142857142857142);
    }

    .ss__portrait {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        position: relative;
    }

    .ss__portrait .ss__portrait__link {
        display: block;
    }

    .ss__portrait img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .series-blurb-group .userInfo_box .name {
        margin-top: 8px;
        font-size: 14px;
        line-height: 20px;
    }

    .series-blurb-group .spot_span~.spot_span {
        margin-left: 16px;
    }

    .series-blurb-group .handle_box {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .btn-box {
        display: inline-block;
        line-height: normal;
    }

    .el-button.ss-buy {
        background: #fd281a;
        color: #fff;
    }

    .el-button.ss-small {
        padding: 5px 12px;
    }

    .el-button.is-round {
        border-radius: 24px;
    }

    .el-button {
        border: none;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 1rem;
        text-align: center;
        letter-spacing: .1em;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        appearance: none;
        box-sizing: border-box;
        transition: .1s;
        margin: 0;
    }

    .series-blurb-group .share-text {
        font-size: 14px;
        line-height: 20px;
        color: #8e8787;
        cursor: pointer;
        margin-left: 20px;
    }

    .inline-block {
        display: inline-block;
        vertical-align: middle;
    }

    .vm {
        vertical-align: middle;
    }

    /* 简介 目录 */
    .series-item-header .blurb_content {
        background: #fff;
        padding: 24px 30px;
        max-width: 710px;
        margin: 14px auto 0;
        box-sizing: border-box;
    }

    .series-item-header .blurb_content_tab {
        display: flex;
    }

    .series-item-header .blurb_content_tab .blurb_tab_item~.blurb_tab_item {
        margin-left: 24px;
    }

    .series-item-header .blurb_content_tab .blurb_tab_item {
        font-size: 16px;
        color: #8e8787;
        font-weight: 500;
        padding-bottom: 5px;
        border-bottom: 1px solid transparent;
        cursor: pointer;
    }

    .series-item-header .active {
        border-color: #fd281a !important;
        color: #fd281a !important;
    }

    /* 简介 */
    .series-blurb-page {
        background: #fff;
        padding: 1px 30px 24px;
        max-width: 710px;
        margin: 0 auto;
        margin-bottom: 0px;
        box-sizing: border-box;
        margin-bottom: 60px;
    }

    .wangEditor-txt {
        width: 100%;
        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft Yahei, Arial, sans-serif;
        font-size: 16px;
        color: #4c4e4d;
        line-height: 30px;
        font-weight: 400;
        word-break: normal;
        word-wrap: break-word;
    }

    .wangEditor-txt img {
        max-width: 100%;
        position: relative;
    }

    .ss-imgRows {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .ss-img-wrapper {
        position: relative;
        text-align: center;
        margin: 40px auto;
        max-width: 100%;
    }

    .ss-imgRows img {
        display: block;
        width: 100%;
        -webkit-box-flex: 1;
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .wangEditor-txt ul {
        list-style-type: disc;
        padding-left: 36px;
        padding-right: 36px;
        margin: 40px auto;
        box-sizing: border-box;
    }

    .wangEditor-txt ul li {
        margin: 10px 0;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 31px;
        color: #4c4e4d;
    }

    .wangEditor-txt a {
        text-decoration: none;
        border-bottom: 1px solid #d71a1b;
        color: #292525;
        transition: all .2s;
    }

    /* 目录 */
    .series-list-page {
        max-width: 710px;
        margin: 0 auto;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 60px;
    }

    .series-list-page .series_tab_handle {
        position: absolute;
        right: 20px;
        top: -50px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .series-list-page .handle_item {
        color: #8e8787;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-left: 19px;
    }

    .series-list-page .handle_item .search_input {
        width: 28px;
        font-size: 14px;
        color: #8e8787;
        border: none;
        transition: width .2s;
        line-height: 20px;
    }

    .screen_name {
        cursor: pointer;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    /* 内容 */
    .series-list-page .series-list-container {
        background: #fff;
        padding: 0 30px 24px;
        max-width: 710px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .series-list-page .bar {
        padding: 18px 0;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #8e8787;
    }

    .series-blurb-list.is_pay {
        background: rgba(242, 201, 76, .2);
    }

    .series-blurb-list {
        max-width: 710px;
        display: flex;
        padding: 7px 30px 11px;
        margin-left: -30px;
        margin-right: -30px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }

    .series-blurb-list .blurb_item_con {
        max-width: 400px;
        overflow: hidden;
    }

    .series-blurb-list .noRead::after {
        position: absolute;
        content: "";
        border-radius: 50%;
        width: 4px;
        height: 4px;
        right: -8px;
        bottom: calc(1.4em - 8px);
        background: #fd281a;
    }

    .series-blurb-list .noRead {
        position: relative;
    }

    .series-blurb-list .title_name .noRead {
        padding-right: 8px;
    }

    .series-blurb-list .title {
        position: relative;
        font-size: 12px;
        display: inline-block;
        margin-bottom: 8px;
    }

    .series-blurb-list .title {
        position: relative;
        font-size: 12px;
        display: inline-block;
        margin-bottom: 8px;
    }

    .series-blurb-list .content_box {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 70px;
    }

    .series-blurb-list .title_name {
        font-size: 18px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #292525;
        line-height: 1.4;
        box-sizing: border-box;
        font-weight: 500;
        max-height: 56px;
    }

    .text_ellipsis2 {
        -webkit-line-clamp: 2;
    }

    .series-blurb-list .msg_box {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-bottom: -2px;
    }

    .series-blurb-list .pic_box.cursor_box {
        cursor: pointer;
    }

    .series-blurb-list .pic_box {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 20px;
        font-size: 12px;
        color: #8e8787;
    }

    .series-blurb-list .pic_box .name:last-of-type {
        margin-left: 6px;
    }

    .series-blurb-list .pic_box .name {
        display: flex;
        max-width: 90px;
        height: 16px;
        line-height: 16px;
    }

    .series-blurb-list .blurb_list_img {
        width: 190px;
        height: 95px;
        border-radius: 3.36px;
    }

    .series-blurb-list .title_name .noRead::after {
        right: -6px;
    }

    /* 制作 */
    .series-metadata-page {
        background: #fff;
        padding: 1px 30px 24px;
        max-width: 710px;
        margin: 0 auto;
        margin-bottom: 0px;
        box-sizing: border-box;
        margin-bottom: 60px;
    }

    /* 共同样式 */
    .series-blurb-list .title a,
    .series-blurb-list .title a:hover {
        color: #655e5e;
    }

    .text_ellipsis2,
    .text_ellipsis3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>