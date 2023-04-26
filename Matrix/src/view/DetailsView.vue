<script setup>
    import { ref, watchEffect, onMounted } from 'vue';
    // 跳转路由传值
    import { useRouter } from 'vue-router'
    // 导入导航栏组件
    import Nav from '../components/Nav.vue'
    const router = useRouter()
    onMounted(() => {
        console.log(router.currentRoute.value.query.id);
    })
</script>
<template>
    <div>
        <!-- 导航栏 -->
        <Nav></Nav>
    </div>
</template>
<style>

</style>