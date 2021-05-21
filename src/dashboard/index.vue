

<template>
  <div>
    <div>头部</div>
    <div :style="{ float: 'left', backgroundColor: 'green' }">
      <div>左侧边区</div>
      <div>
        <input type="button" value="退出" @click="onLogout()" />
      </div>
    </div>
    <div
      :style="{ overflow: 'hidden', backgroundColor: 'red', height: '600px' }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>


<script>

import { FakeToken } from '@/util';


export default {

  mounted () {
    //if is authed 
    if (!FakeToken.isAuthed()) {
      this.$router.push({ path: '/login' });
    } else {
      //get user info

    }

  },

  methods: {
    onLogout () {
      FakeToken.removeToken();
      this.$router.push({ path: '/login' });
    }
  }

}
</script>
