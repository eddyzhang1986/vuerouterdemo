

<template>
  <div>
    <div>头部</div>
    <div :style="{ float: 'left', backgroundColor: 'green' }">
      <div>左侧边区</div>
      <div>
        <div>
          <label> nick:</label> <span>{{ nick }}</span>
        </div>
        <div>
          <label> path:</label> <span>{{ path }}</span>
        </div>
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

  },

  computed: {
    nick () {
      return this.$store.state.user.info.nick
    },
    path () {
      return this.$store.state.route.path
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
