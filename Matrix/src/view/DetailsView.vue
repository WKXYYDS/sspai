<script setup>
    import { ref, watchEffect, onMounted } from 'vue';
    // 导入 内容 联合作者,推荐阅读
    import { requestConent, requestLike, requestComment, requestRecommend } from '@/hooks/useRequest.js';
    // 跳转路由传值
    import { useRouter } from 'vue-router'
    // 导入导航栏组件
    import Nav from '../components/Nav.vue'
    // 路由
    const router = useRouter()
    // 内容
    const coment = ref({})
    // 开头
    const arr = ref([])
    // 开头 头像
    const avatar = ref({})
    // 头像内的信息
    const init = ref([])
    // 标签
    const label = ref([])
    // 充电人数
    const peoples = ref("")
    // 内容
    // 大块头
    const morning = ref([])
    requestConent({
        id: router.currentRoute.value.query.id
    }).then(res => {
        console.log(res.data.data);
        label.value = res.data.data.tags
        peoples.value = res.data.data.article_count
        if (res.data.data) {
            coment.value = res.data.data
            arr.value = res.data.data.update_details
        }
        if (res.data.data.morning_paper_title) {
            morning.value = res.data.data.morning_paper_title
        }
        if (res.data.data.author) {
            avatar.value = res.data.data.author
            init.value = res.data.data.author.user_flags
        }
    })
    // 作者 详情
    const author = ref([])
    requestLike({
        limit: 5,
        article_id: router.currentRoute.value.query.id,
    }).then(res => {
        author.value = res.data.data
    })
    // 评论
    const comment = ref([])
    const commentNum = ref("")
    const one = ref(1)
    const page = ref(0)
    // 评论
    requestComment({
        limit: 20,
        article_id: router.currentRoute.value.query.id
    }).then(res => {
        commentNum.value = res.data.total
        comment.value = res.data.data
    })
    // 点击 更多 加载更多评论
    const comNum = () => {
        one.value = one.value + 1
        page.value = page.value + 20
        requestComment({
            limit: 20,
            article_id: router.currentRoute.value.query.id,
            offset: page.value
        }).then(res => {
            commentNum.value = res.data.total
            comment.value = comment.value.concat(res.data.data)
        })
    }
    // 推荐阅读
    const recommend = ref([])
    requestRecommend({
        id: router.currentRoute.value.query.id
    }).then(res => {
        recommend.value = res.data.data
    })
</script>
<template>
    <div>
        <!-- 导航栏 -->
        <Nav></Nav>
        <!-- 内容 -->
        <div class="postPage">
            <div class="article-detail">
                <!-- 第一部分 第二模式 -->
                <div class="article-header normal" v-if="morning.length">
                    <div class="pai pai_header articleCard home pc">
                        <!-- 上 -->
                        <div class="pai_title">
                            <a href="#">
                                <div class="title">
                                    {{coment.corner.name}}
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
                                少数派编辑部
                            </div>
                        </div>
                        <!-- 下 -->
                        <div class="pai_content">
                            <div class="img_box pai_img_box">
                                <a href="#">
                                    <img class="card_img"
                                        :src="'https://cdn.sspai.com/' + coment.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!456x456r/gravity/Center/crop/456x456/interlace/1'"
                                        alt="">
                                </a>
                            </div>
                            <div class="pai_card_content">
                                <!-- 循环 -->
                                <div class="pai_abstract" v-for="(items,index) in morning" :key="items.index">
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
                <!-- 第一部分-->
                <div class="article-header" v-else>
                    <div class="greyBgBox"></div>
                    <div class="article-banner">
                        <img class="banner"
                            :src=" coment.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1'"
                            alt="">
                    </div>
                    <!--  -->
                    <div class="articleWidth-content">
                        <div class="title"> {{coment.promote_title}} </div>
                        <div class="article-author">
                            <div class="author-box">
                                <div class="article-header-author">
                                    <span>
                                        <div class="hov">
                                            <div class="avatar">
                                                <img :src=" avatar.avatar? 'https://cdn.sspai.com/' + avatar.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!72x72r/gravity/Center/crop/72x72/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png' "
                                                    alt="">
                                            </div>
                                            <!--  -->
                                            <a href="#" class="nickname">
                                                <div class="ss__user__nickname el-popover__reference">
                                                    <span>{{avatar.nickname}}</span>
                                                </div>
                                            </a>
                                            <!-- 隐藏的用户信息 -->
                                            <div class="el-popover el-popper comp__SSUserCard__popover">
                                                <div class="ss__user__card__wrapper">
                                                    <div class="ss__user__card">
                                                        <!--  -->
                                                        <div class="ss__user__card__header">
                                                            <a href="#">
                                                                <img class="ss__user__avatar"
                                                                    :src="avatar.avatar?'https://cdn.sspai.com/' + avatar.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!72x72r/gravity/Center/crop/72x72/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                                    alt="">
                                                            </a>
                                                            <button class="ss__user__card__btn">
                                                                <i></i>
                                                                <span>关注</span>
                                                            </button>
                                                        </div>
                                                        <!--  -->
                                                        <div class="ss__user__card__center">
                                                            <div class="ss__user__card__nickname__wrapper">
                                                                <div class="ss__user__card__nickname">
                                                                    {{avatar.nickname}}
                                                                </div>
                                                            </div>
                                                            <div class="ss__user__card__role__wrapper">
                                                                <div class="ss__user__card__role__item">
                                                                    <div class="ss__user__identifier">
                                                                        <i
                                                                            class="ss__user__identifier__icon el-popover__reference"></i>
                                                                    </div>
                                                                    <span class="role__name" v-for="item in init"
                                                                        :key="item.id">{{item.name}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--  -->
                                                        <div class="ss__user__card__intro text_ellipsis2">
                                                            {{avatar.bio}}
                                                        </div>
                                                        <!--  -->
                                                        <div class="ss__user__card__footer">
                                                            <span>13240 人正在关注</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <!--  -->
                            <div class="timer">
                                {{coment.rtime}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 二 -->
                <div class="article-body">
                    <div class="articleWidth-content">
                        <div class="update-wrap">
                            <a href="#" class="update-item">
                                <i></i>
                                <span class="vm" v-for="item in arr" :key="item.id">
                                    {{item.title}}
                                </span>
                                <i></i>
                            </a>
                        </div>
                        <!-- 主内容 -->
                        <div class="content wangEditor-txt minHeight" v-html="coment.body"></div>
                        <!-- 本文责编 -->
                        <div class="article-copyrights">
                            © 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。
                        </div>
                        <!-- 标签 -->
                        <div class="article-tag articleWidth-687">
                            <div class="tag-container">
                                <!-- 循环 -->
                                <div class="tag-item" v-for="item in label" :key="item.id">
                                    <a href="#" class="tag">
                                        <span class="sub">#</span>
                                        {{item.title}}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- 为文章充电 -->
                        <div class="article-actionBar articleWidth-687">
                            <!-- 充电人数 -->
                            <div class="charge-btn">
                                <i class="iconfont icon-shandian" style="font-size: 20px;"></i>
                                <span class="count vm">{{peoples.like_count}}</span>
                            </div>
                            <!-- 作者们 -->
                            <div class="charge-user">
                                <!-- 循环 -->
                                <div class="ss__portrait avatar" style="--size: 16px; --proportion: 1; z-index: 50;"
                                    v-for="(item,index) in author" :key="item.id">
                                    <a href="#" class="ss__portrait__link" v-if="index <= 3">
                                        <img :src="item.avatar?'https://cdn.sspai.com/' + item.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!32x32r/gravity/Center/crop/32x32/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                            alt="">
                                    </a>
                                </div>
                                <!-- 作者信息 -->
                                <div class="nickname-box">
                                    <span class="nickname">
                                        <a href="#" v-for="item in author" :key="item.id">{{item.nickname}},</a>
                                    </span>
                                    <span class="text">
                                        等{{peoples.like_count}}人为本文章充电
                                    </span>
                                </div>
                            </div>
                            <!-- 转发 -->
                            <span class="el-popover__reference-wrapper">
                                <i class="iconfont icon-shandian iconfont-share"></i>
                            </span>
                            <span class="el-popover__reference-wrapper">
                                <i class="iconfont icon-shandian iconfont-share"></i>
                            </span>
                            <span class="el-popover__reference-wrapper">
                                <i class="iconfont icon-shandian iconfont-share"></i>
                            </span>
                            <span class="el-popover__reference-wrapper">
                                <i class="iconfont icon-shandian iconfont-share"></i>
                            </span>
                        </div>
                        <!-- 线 -->
                        <div class="articleWidth-687">
                            <div class="line"></div>
                        </div>
                        <!-- 用户信息 -->
                        <div class="article-author articleWidth-687">
                            <div class="el-row">
                                <div class="el-col el-col-11 center">
                                    <div class="author">
                                        <div class="ss__portrait avatar" style="--size: 50px; --proportion: 0.84;">
                                            <a href="#" class="ss__portrait__link">
                                                <img :src=" avatar.avatar? 'https://cdn.sspai.com/' + avatar.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!84x84r/gravity/Center/crop/84x84/interlace/1' : ''"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="container">
                                            <div class="top">
                                                <a href="#" class="ss__user__nickname__wrapper nickname">
                                                    <div class="ss__user__nickname">
                                                        <span>{{avatar.nickname}}</span>
                                                        <div class="ss__user__identifier">
                                                            <i
                                                                class="ss__user__identifier__icon el-popover__reference"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="bio">
                                                {{avatar.bio}}
                                            </div>
                                            <div class="btn-box left-4">
                                                <button
                                                    class="el-button el-button--default is-round ss-default ss-small colorRed">
                                                    <span>
                                                        关注
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 评论 推荐阅读 部分 -->
                    <div class="bgGrey">
                        <!-- 图片 -->
                        <div class="advertisement-box adv-box end">
                            <a href="#">
                                <img class="image"
                                    src="https://cdn.sspai.com/4/20/2023/article/0ee2b84e-c7fa-6278-0ba2-81a4f24e8e25.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1096x252r/gravity/Center/crop/1096x252/interlace/1"
                                    alt="">
                            </a>
                        </div>
                        <!-- 评论 -->
                        <div class="comment">
                            <div class="comment-container">
                                <!-- 全部评论 -->
                                <div class="comment-head">
                                    <div class="comment_title">
                                        全部评论({{peoples.comment_count}})
                                    </div>
                                    <div class="review_box">
                                        <div>
                                            <span>热门排序</span>
                                            <i class="iconfont icon-shangxiajiantou" style="font-size:15px;"></i>
                                        </div>
                                    </div>
                                </div>
                                <!-- 本人评论 -->
                                <div class="ss-comment-block comment-reply-wrapper">
                                    <div class="wrapper">
                                        <div class="left-wrapper">
                                            <div class="ss__portrait avatar"
                                                style="--size: 30px; --proportion: 1.3333333333333333;">
                                                <a href="#" class="ss__portrait__link">
                                                    <img src="https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png"
                                                        alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="right-wrapper">
                                            <div class="comment-placeholder">
                                                <span>写下尊重、理性、友好的评论，有助于彼此更好地交流～</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 评论正题 -->
                                <div class="comment-list-wrapper">
                                    <!-- 循环 -->
                                    <div class="comment-item-wrapper" v-for="item in comment" :key="item.id">
                                        <!-- 主评论 -->
                                        <div class="comment-parent-wrapper">
                                            <div class="ss-comment-item comment-item-inner-wrapper">
                                                <div class="_header">
                                                    <div class="ss__portrait left-wrapper"
                                                        style="--size: 30px; --proportion: 1.3333333333333333;">
                                                        <a href="#" class="ss__portrait__link el-popover__reference">
                                                            <img :src="item.user.avatar?'https://cdn.sspai.com/' + item.user.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                                alt="">
                                                        </a>
                                                    </div>
                                                    <div class="center-wrapper">
                                                        <!-- 主评论 名字 -->
                                                        <div class="user-wrapper">
                                                            <div class="nickname main">
                                                                <a href="#" class="ss__user__nickname__wrapper">
                                                                    <div
                                                                        class="ss__user__nickname el-popover__reference">
                                                                        <span>{{item.user.nickname}}</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <!-- 主评论 评论天数 -->
                                                        <div class="date">
                                                            <span>1天前</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="_content">
                                                    <span class="wangEditor-txt" v-html="item.comment"></span>
                                                </div>
                                                <div class="_action">
                                                    <button class="btn-reply">
                                                        <i class="iconfont icon-duihuakuang1"
                                                            style="font-size: 20px;"></i>
                                                        <span>{{item.reply.length}}</span>
                                                    </button>
                                                    <button class="btn-like">
                                                        <i class="iconfont icon-24px" style="font-size: 20px;"></i>
                                                        <span>{{item.likes_count}}</span>
                                                    </button>
                                                    <!-- hover 显示 -->
                                                    <button class="btn-dislike show">
                                                        <i class="iconfont icon-zan3" style="font-size: 20px;"></i>
                                                        <span>{{item.liked_status}}</span>
                                                    </button>
                                                    <button class="btn-report show">
                                                        举报
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 回复 主评论 -->
                                        <div class="comment-children-wrapper">
                                            <!-- 循环 -->
                                            <div class="ss-comment-item comment-item-inner-wrapper"
                                                v-for="items in item.reply" :key="items.id">
                                                <div class="comment-parent-wrapper">
                                                    <div class="ss-comment-item comment-item-inner-wrapper">
                                                        <div class="_header">
                                                            <div class="ss__portrait left-wrapper"
                                                                style="--size: 30px; --proportion: 1.3333333333333333;">
                                                                <a href="#"
                                                                    class="ss__portrait__link el-popover__reference">
                                                                    <img :src="items.user.avatar?'https://cdn.sspai.com/' + items.user.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                                        alt="">
                                                                </a>
                                                            </div>
                                                            <div class="center-wrapper">
                                                                <!-- 主评论 名字 -->
                                                                <div class="user-wrapper">
                                                                    <div class="nickname main">
                                                                        <a href="#" class="ss__user__nickname__wrapper">
                                                                            <div
                                                                                class="ss__user__nickname el-popover__reference">
                                                                                <span>{{items.user.nickname}}</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <!-- 主评论 评论天数 -->
                                                                <div class="date">
                                                                    <span>1天前</span>
                                                                </div>
                                                            </div>
                                                            <!-- 作者显示 -->
                                                            <div class="right-wrapper flag-wrapper"
                                                                v-if="items.flags.length">
                                                                <i class="flag"
                                                                    style="background-image: url(&quot;https://cdn.sspai.com/2020/01/07/c97ef8b3742c3d2111d6faa46c673008.png&quot;);"></i>
                                                            </div>
                                                        </div>
                                                        <div class="_content">
                                                            <span class="wangEditor-txt" v-html="items.comment"></span>
                                                        </div>
                                                        <div class="_action">
                                                            <button class="btn-reply">
                                                                <i class="iconfont icon-duihuakuang1"
                                                                    style="font-size: 20px;"></i>
                                                            </button>
                                                            <button class="btn-like">
                                                                <i class="iconfont icon-24px"
                                                                    style="font-size: 20px;"></i>
                                                                <span>{{items.likes_count}}</span>
                                                            </button>
                                                            <!-- hover 显示 -->
                                                            <button class="btn-dislike show">
                                                                <i class="iconfont icon-zan3"
                                                                    style="font-size: 20px;"></i>
                                                                <span>{{item.liked_status}}</span>
                                                            </button>
                                                            <button class="btn-report show">
                                                                举报
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 末尾 -->
                                <div class="load-more-wrapper" v-if="peoples.comment_count == 0">
                                    暂时还没有评论，先来评论一条吧
                                </div>
                                <div class="load-more-wrapper" v-if="commentNum > (20 * one)" @click="comNum">
                                    更多
                                </div>
                                <div class="load-more-wrapper" v-if="commentNum < (20 * one)">
                                    没有更多评论了哦
                                </div>
                            </div>
                        </div>
                        <!-- 推荐阅读 -->
                        <div class="related-read-box">
                            <div class="headers">推荐阅读</div>
                            <div class="recommend_container">
                                <!-- 循环 -->
                                <div class="articleCard" v-for="(item,index) in recommend" :key="item.id">
                                    <div class="ss-article-card-wrapper" v-if="index <=5">
                                        <div>
                                            <div class="advertisementCardBox groupCard">
                                                <!-- 图片 -->
                                                <div class="img_box">
                                                    <img class="card_img"
                                                        :src="item.banner? 'https://cdn.sspai.com/' + item.banner + '?imageMogr2/auto-orient/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                        alt="">
                                                    <a href="#" class="corner">
                                                        <img class="corner_img" :src="item.corner.icon" alt="">
                                                    </a>
                                                </div>
                                                <!-- 标题 信息 -->
                                                <div class="card_content">
                                                    <div class="title text_ellipsis2">
                                                        {{item.title}}
                                                    </div>
                                                    <div class="card_bottom pc_card">
                                                        <div class="pic_box">
                                                            <img class="header"
                                                                :src=" item.author.avatar? item.author.avatar + '?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1' : 'https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png'"
                                                                alt="">
                                                            <span class="name">
                                                                <span
                                                                    class="text_ellipsis">{{item.author.nickname}}</span>
                                                            </span>
                                                        </div>
                                                        <div class="right">
                                                            <div class="pic_box">
                                                                <i class="iconfont icon-shandian"></i>
                                                                <span class="name">{{item.like_count}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="footer-container light" id="app-footer">
            <div class="footer-content">
                <!-- 图标 -->
                <div class="footer-logo">
                    <i class="icon icon-footer-logo-simple"></i>
                </div>
                <!-- 微博 微信 WiFi -->
                <div class="official">
                    <a href="#">
                        <i class="iconfont icon-xinlangweibo" style="font-size: 16px;"></i>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-weixin" style="font-size: 18px;"></i>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-yuyin" style="font-size: 18px;"></i>
                    </a>
                </div>
                <!-- 联系我们 -->
                <div>
                    <div class="links">
                        <span>
                            <a href="#">下载App</a>
                        </span>
                        <span>
                            <a href="#">联系我们</a>
                        </span>
                        <span>
                            <a href="#">商务合作</a>
                        </span>
                        <span>
                            <a href="#">成为作者</a>
                        </span>
                        <span>
                            <a href="#">关于我们</a>
                        </span>
                        <span>
                            <a href="#">用户协议</a>
                        </span>
                        <span>
                            <a href="#">常见问题</a>
                        </span>
                    </div>
                    <div class="footer-txt-pc">
                        <span>© 2013-2023 少数派 | </span>
                        <a href="#">粤ICP备09128966号-4</a>
                        <span>|</span>
                        <a href="#">粤B2-20211534</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .postPage {
        padding-top: 60px;
    }

    /* 第一部分 内容 */
    .article-header {
        position: relative;
        padding-top: 20px;
        z-index: 5;
    }

    .article-header .greyBgBox {
        width: 100%;
        height: 280px;
        background: linear-gradient(0deg, #f4f4f4, #f4f4f4);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .article-header .article-banner {
        width: 710px;
        height: 354px;
        margin: 0 auto;
        position: relative;
    }

    .article-header .banner {
        width: 710px;
        height: 354px;
    }

    .article-header .articleWidth-content {
        width: 100%;
        max-width: 664px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .article-header .title {
        margin: 40px auto 30px;
        font-weight: 500;
        font-size: 28px;
        line-height: 42px;
        color: #292525;
    }

    .article-header .article-author {
        position: relative;
        margin-bottom: 60px;
        padding-right: 120px;
    }

    .article-header .article-header-author {
        margin-right: 0;
        display: inline-block;
        padding: 5px 0;
    }

    .article-header .avatar {
        --size: 24px;
        --proportion: 1.5;
        z-index: 50;
        margin-left: 0;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        width: 36px;
        height: 36px;
    }

    .article-header .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .article-header .nickname {
        margin-left: 10px;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        line-height: 20px;
        color: #292525;
        font-weight: 400;
    }

    .article-header .ss__user__nickname {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .article-header .timer {
        position: absolute;
        color: #655e5e;
        right: 0;
        top: 12.5px;
        font-size: 14px;
        line-height: 20px;
    }

    /* 隐藏的用户信息 */
    .hov:hover .el-popover {
        opacity: 1;
    }

    .el-popover {
        min-width: 100px;
        border-radius: 4px;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        word-break: break-all;
        opacity: 0;
        transition: opacity 1s;
        position: absolute;
        top: -60px;
        left: 100px;
    }

    .comp__SSUserCard__popover {
        border: none;
        padding: 0;
        background: transparent;
        overflow: visible;
        box-shadow: none;
    }

    .ss__user__card__wrapper {
        display: block;
        width: 264px;
        border-radius: 16px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, .03), 0px 8px 32px rgba(0, 0, 0, .14);
        padding: 16px;
        background: #fff;
        transition: .2s;
    }

    .ss__user__card__wrapper .ss__user__card__header {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .ss__user__avatar {
        width: 40px;
        height: 40px;
        border: .5px solid rgba(0, 0, 0, .05);
        border-radius: 50%;
        object-fit: contain;
    }

    .ss__user__card__btn {
        background: #da282a;
        color: #fff;
        width: 60px;
        height: 26px;
        border-radius: 6px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        position: relative;
    }

    .ss__user__card__center {
        margin-bottom: 12px;
    }

    .ss__user__card__nickname__wrapper {
        margin-bottom: 4px;
    }

    .ss__user__card__nickname {
        color: #000;
        font-size: 13px;
        line-height: 18px;
        font-weight: 500;
    }

    .ss__user__card__role__wrapper {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss__user__card__role__item {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss__user__identifier {
        display: inline-flex;
    }

    .ss__user__identifier__icon {
        display: inline-block;
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url("https://cdn-static.sspai.com/ui/badge/sspaichengyuan180x180.png");
    }

    .role__name {
        color: #000;
        font-size: 13px;
        line-height: 18px;
    }

    .ss__user__card__intro {
        color: #000;
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 12px;
    }

    .text_ellipsis2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .ss__user__card__footer {
        margin-bottom: 0;
        color: #6f7174;
        font-size: 13px;
        line-height: 18px;
    }

    .ss__user__card__footer span {
        margin-right: 16px;
    }

    /* 第二部分 */
    .article-body {
        position: relative;
    }

    .articleWidth-content {
        width: 100%;
        max-width: 664px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .update-wrap {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        margin: 30px 0;
    }

    .update-item {
        color: #655e5e;
        font-size: 14px;
        font-weight: 500;
    }

    .vm {
        vertical-align: middle;
    }

    /* 主内容 */
    .article-body .minHeight {
        min-height: 340px;
    }

    .article-body .wangEditor-txt {
        position: relative;
        z-index: 91;
    }

    .wangEditor-txt {
        width: 100%;
        text-align: left;
        padding: 0;
        margin-top: 5px;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft Yahei, Arial, sans-serif;
        font-size: 16px;
        color: #4c4e4d;
        line-height: 30px;
        font-weight: 400;
        word-break: normal;
        word-wrap: break-word;
    }

    /* 内容 */
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

    /* 本文责编 */
    .article-body .article-copyrights {
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        color: #655e5e;
        margin-top: 40px;
    }

    /* 标签 */
    .article-tag {
        margin-top: 60px !important;
    }

    .articleWidth-687 {
        width: 100%;
        max-width: 687px;
        margin: 0 auto;
    }

    .article-tag .tag-container {
        margin: -8px;
    }

    .article-tag .tag-item {
        padding: 8px;
        display: inline-block;
    }

    .article-tag .tag {
        font-size: 12px;
        line-height: 17px;
        letter-spacing: .05em;
        color: #655e5e;
        padding: 5px 10px;
        background: #f5f5f5;
    }

    .article-tag .tag .sub {
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: .1em;
        color: #8e8787;
        margin-right: 2px;
    }

    /* 联合作者 */
    .article-actionBar {
        margin-top: 30px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }

    .article-actionBar .charge-btn {
        padding: 10px 20px;
        border-radius: 42px;
        text-align: center;
        background-color: #f7f7f8;
        transition: background .5s;
        cursor: pointer;
        margin-right: 30px;
        color: #8e8787;
    }

    .article-actionBar .charge-btn .count {
        font-size: 14px;
        line-height: 20px;
    }

    .vm {
        vertical-align: middle;
        margin-left: 5px;
    }

    .article-actionBar .charge-user {
        -webkit-box-flex: 1;
        flex: 1;
    }

    .ss__portrait {
        vertical-align: middle;
        line-height: normal;
    }

    .article-actionBar .charge-user .avatar:first-child {
        margin-left: 0;
    }

    .article-actionBar .charge-user .avatar {
        display: inline-block;
        border: 1px solid #fff;
        border-radius: 16px;
        width: 16px;
        height: 16px;
        position: relative;
    }

    .ss__portrait .ss__portrait__link {
        display: block;
    }

    .article-actionBar .charge-user .avatar img {
        vertical-align: top;
    }

    .ss__portrait img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .article-actionBar .charge-user .nickname-box {
        font-size: 12px;
        line-height: 17px;
        color: #8e8787;
        margin-top: 4px;
    }

    .nickname a {
        text-decoration: none;
        color: #292525;
    }

    .iconfont-share {
        cursor: pointer;
        font-size: 24px;
        line-height: 1;
        color: #8e8787;
        padding: 8px;
        transition: .2s;
    }

    /* 线 */
    .line {
        height: 1px;
        background: #e5e5e5;
        margin: 30px auto;
        width: 100%;
    }

    /* 用户信息 */
    .article-author {
        padding-bottom: 30px;
    }

    .article-author .center {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 410px;
    }

    /* .el-col {
        float: left;
    } */

    .article-author .author {
        display: flex;
    }

    .article-author .avatar {
        border-radius: 50%;
    }

    .ss__portrait {
        width: calc(50px * 0.84);
        height: calc(50px * 0.84);
        line-height: normal;
        position: relative;
        display: inline-block;
    }

    .ss__portrait .ss__portrait__link {
        display: block;
    }

    .ss__portrait img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    /* 文字 */
    .container {
        max-width: 1140px;
        padding: 0 12px;
        margin: auto;
    }

    .article-author .container {
        padding-left: 20px;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        flex: 1;
    }

    .article-author .container .top {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .article-author .container .nickname {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #292525;
    }

    .ss__user__nickname__wrapper {
        display: inline-block;
    }

    .ss__user__nickname__wrapper .ss__user__nickname {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss__user__identifier {
        display: inline-flex;
    }

    .ss__user__identifier i {
        background-image: url("https://cdn-static.sspai.com/ui/badge/zuozhe180x180.png");
    }

    .ss__user__identifier .ss__user__identifier__icon {
        display: inline-block;
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
    }

    .article-author .container .bio {
        font-size: 14px;
        line-height: 20px;
        color: #8e8787;
        margin-bottom: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 40px;
    }

    .btn-box {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }

    .el-button.ss-default.colorRed {
        color: #fd281a;
    }

    .el-button.ss-default {
        background: #f5f5f5;
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
        transition: .1s;
        margin: 0;
        -webkit-appearance: none;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
    }

    /* 评论 推荐 阅读 */
    .bgGrey {
        background: #f4f4f4;
        padding: 40px 0;
    }

    .show {
        display: none !important;
    }

    /* 图片 */
    .bgGrey .adv-box {
        margin-bottom: 40px;
        margin-top: 0;
    }

    .advertisement-box {
        width: 100%;
        max-width: 548px;
        margin: 0 auto;
        margin-top: 0px;
        overflow: hidden;
    }

    .advertisement-box .image {
        width: 100%;
        max-width: 548px;
        max-height: 126px;
    }

    /* 评论 */
    .comment .comment-container {
        width: 100%;
        max-width: 644px;
        margin: 0 auto;
        margin-top: 40px;
    }

    .comment .comment-container .comment-head {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: .06em;
        color: #655e5e;
        text-align: center;
        position: relative;
    }

    .comment .comment-container .review_box {
        position: absolute;
        font-size: 14px;
        right: 0;
        top: 0;
        color: #8e8787;
        cursor: pointer;
    }

    /* 本人评论 */
    .comment-reply-wrapper {
        padding: 20px;
        margin-top: 30px;
    }

    .comment-reply-wrapper {
        background: #fff;
        margin-bottom: 10px;
    }

    .ss-comment-block .wrapper {
        display: flex;
    }

    .ss-comment-block .wrapper .left-wrapper {
        margin-right: 12px;
    }

    .ss__portrait {
        width: calc(30px * 1.33333333);
        height: calc(30px * 1.33333333);
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

    .ss-comment-block .wrapper .right-wrapper {
        line-height: 40px;
        -webkit-box-flex: 1;
        flex: 1;
    }

    .ss-comment-block .comment-placeholder {
        font-size: 14px;
        color: #8e8787;
    }

    /* 主评论 */
    .comment-list-wrapper .comment-item-wrapper {
        padding: 20px;
        background: #fff;
        margin: 10px 0;
    }

    .ss-comment-item ._header {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .ss-comment-item ._header .left-wrapper {
        margin-right: 12px;
    }

    ._header .ss__portrait {
        width: calc(24px * 1.5);
        height: calc(24px * 1.5);
        --size: 24px;
        --proportion: 1.5;
        display: inline-block;
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

    .ss-comment-item ._header .center-wrapper {
        margin-right: 12px;
        -webkit-box-flex: 1;
        flex: 1;
    }

    .ss-comment-item ._header .user-wrapper {
        font-size: 14px;
        color: #8e8787;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss-comment-item ._header .user-wrapper .nickname.main {
        color: #292525;
        font-weight: 500;
        margin-left: 0;
        margin-right: 4px;
    }

    .ss__user__nickname__wrapper {
        display: inline-block;
        vertical-align: middle;
    }

    .ss__user__nickname__wrapper .ss__user__nickname {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .ss-comment-item ._header .date {
        display: block;
        font-size: 12px;
        color: #8e8787;
        margin-top: 2px;
    }

    .ss-comment-item ._content {
        font-size: 16px;
    }

    .ss-comment-item ._content {
        margin-left: 52px;
    }

    .ss-comment-item ._content .wangEditor-txt {
        font-size: 16px;
        color: #292525;
    }

    .ss-comment-item ._action {
        margin-left: 52px;
    }

    .ss-comment-item ._action {
        color: #8e8787;
        display: inline-flex;
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 10px;
    }

    .ss-comment-item ._action button {
        margin-right: 16px;
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12px;
        color: #8e8787;
    }

    .ss-comment-item ._action span {
        margin-left: 4px;
    }

    /* 回复  */
    .comment-children-wrapper {
        margin-left: 52px;
    }

    .comment-list-wrapper .comment-item-wrapper .comment-children-wrapper .comment-item-inner-wrapper {
        margin: 30px 0;
    }

    .ss-comment-item ._header .right-wrapper {
        margin-left: auto;
        margin-right: 0;
    }

    .ss-comment-item ._header .flag-wrapper .flag {
        display: inline-block;
        width: 34px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
    }

    ._action:hover .show {
        display: block !important;
    }

    /* 评论 末尾 */
    .comment .load-more-wrapper {
        text-align: center;
        background: #fff;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        color: #655e5e;
    }

    /* 推荐阅读 */
    .related-read-box {
        width: 100%;
        max-width: 832px;
        margin: 30px auto 0;
    }

    .related-read-box .headers {
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: .06em;
        color: #655e5e;
        margin-bottom: 30px;
    }

    .related-read-box .recommend_container {
        width: 100%;
        max-width: 832px;
    }

    .related-read-box .recommend_container .articleCard {
        padding: 6px;
        display: inline-block;
    }

    .advertisementCardBox {
        flex-direction: column;
        position: relative;
        width: 264px;
        height: 260px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        display: flex;
        background: #fff;
        user-select: none;
        max-width: 800px;
    }

    .groupCard.advertisementCardBox .img_box {
        width: 264px;
        position: relative;
        padding-top: 143px;
        overflow: hidden;
    }

    .advertisementCardBox .img_box {
        transition: all .2s ease-out;
        -webkit-backface-visibility: hidden;
        background: linear-gradient(180deg, transparent, #000);
    }

    .groupCard.advertisementCardBox .card_img {
        width: auto;
        min-width: 100%;
        height: 100%;
    }

    .advertisementCardBox .card_img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: width .2s ease-out, height .2s ease-out;
    }

    .groupCard.advertisementCardBox:hover .img_box .card_img {
        height: 110%;
    }

    .corner {
        position: absolute;
        left: 13px;
        top: 10px;
    }

    .corner .corner_img {
        width: auto;
        height: 24px;
    }

    .groupCard.advertisementCardBox .card_content {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        position: absolute;
        z-index: 99;
        top: 142px;
        transition: top .2s ease-out;
    }

    .advertisementCardBox .card_content {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
    }

    .groupCard.advertisementCardBox .card_content .title {
        height: 45px;
        margin-bottom: 9px;
        font-size: 17px;
    }

    .advertisementCardBox .card_content .title {
        line-height: 1.4;
        text-align: left;
        color: #292525;
        font-weight: 600;
    }

    .text_ellipsis2,
    .text_ellipsis3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .text_ellipsis2 {
        -webkit-line-clamp: 2;
    }

    .advertisementCardBox .card_bottom {
        color: #655e5e;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-wrap: wrap;
        margin-bottom: 0;
    }

    .advertisementCardBox .pc_card {
        margin: auto 0;
    }

    .advertisementCardBox .pic_box {
        display: flex;
        -webkit-box-align: center;
        color: #8e8787;
    }

    .advertisementCardBox .pic_box .header {
        cursor: pointer;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .advertisementCardBox .pic_box .name {
        display: flex;
        max-width: 90px;
    }

    .text_ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .advertisementCardBox .card_bottom .right {
        display: flex;
    }

    .advertisementCardBox .card_bottom .right .pic_box:first-child {
        margin-left: 0;
    }

    /* 底部 */
    #app-footer {
        left: 0;
    }

    .footer-container {
        width: 100%;
        background: #fff;
    }

    .footer-container .footer-content {
        max-width: 1140px;
        padding: 0 12px;
        height: 122px;
        margin: auto;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .footer-container .footer-logo {
        margin-right: 40px;
    }

    .icon.icon-footer-logo-simple {
        display: block;
        background-image: url(../assets/sspai.ico);
        background-size: 100% 100%;
        width: 52px;
        height: 52px;
    }

    .footer-container .official {
        flex: 1;
        -webkit-box-flex: 1;
    }

    .footer-container .official a {
        cursor: pointer;
        margin-right: 24px;
        color: #292525;
    }

    /* 联系我们 */
    .footer-container .links {
        font-size: 12px;
        color: #292525;
        font-weight: 500;
        margin-top: 23px;
    }

    .footer-container .links a {
        color: #292525;
    }

    .footer-container .links span {
        margin-left: 24px;
    }

    .footer-container .footer-txt-pc {
        font-size: 10px;
        color: #8e8787;
        margin-top: 8px;
        text-align: right;
    }

    .footer-container .footer-txt-pc a {
        color: #8e8787;
    }

    /* 大块头 */
    .article-header .pai_header {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column;
        max-width: 800px;
        margin: 0 auto 60px;
        background: #f5f5f5;
    }

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
</style>