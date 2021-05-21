

<template>
  <div>
    <div>头部</div>
    <div :style="{ float: 'left', backgroundColor: 'green' }">左侧区域</div>
    <div
      :style="{ overflow: 'hidden', backgroundColor: 'red', height: '600px' }">
         <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {



}
</script>
