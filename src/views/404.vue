<template id="temp">
    <!-- vue实例外创建 -->
    <div>
        <el-result icon="warning" title="404提示" sub-title="你找的页面走丢了~">
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
            </template>
        </el-result>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
</script>