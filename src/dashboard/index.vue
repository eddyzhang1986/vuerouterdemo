

<template>
  <div>
    <div>头部</div>
    <div :style="{ float: 'left', backgroundColor: 'green' }">
      <div>左侧边区</div>
      <div>
        <label> count:</label>
        <span>{{ count }}</span>
        <input type="button" value="+" @click="onPlus()" />
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

import { LoadingSvc, FakeToken } from '@/util';




export default {

  async mounted () {

    //dispatch getUserInfo
    LoadingSvc.show();
    const result = await this.$store.dispatch('user/getUserInfo', FakeToken.getToken());
    LoadingSvc.hide();

    if (result.success) {
      console.log(this.$store.state.user.userInfo, '..........userInfo............')
    } else {
      this.$message(result.message)
    }


    // //if is authed 
    // if (!FakeToken.isAuthed()) {
    //   this.$router.push({ path: '/login' });
    // } else {
    //   //get user info

    // }

  },

  computed: {
    count () {
      return this.$store.state.user.count
    }
  },
  methods: {
    onPlus () {
      this.$store.commit({
        type: 'user/PLUS'
      });
    },
    onLogout () {
      FakeToken.removeToken();
      this.$router.push({ path: '/login' });
    }
  }

}
</script>
