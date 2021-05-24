

<template>
  <div>
    <div>
      <label>用户名</label>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <label>密码</label>
      <input type="text" v-model="userPwd" />
    </div>
    <div>
      <input type="button" value="登录" @click="onSubmit()" />
    </div>
  </div>
</template>


<script>
import { FakeUser } from '@/api/user';
import { LoadingSvc, FakeToken } from '@/util';


export default {

  data () {

    return {
      userName: '',
      userPwd: ''
    }

  },

  mounted () {
  },

  methods: {

    async onSubmit () {
      LoadingSvc.show();
      const result = await FakeUser.login(this.userName, this.userPwd);
      LoadingSvc.hide();
      console.log(result, 'result');
      if (result.success) {
        //set cookie
        FakeToken.setToken(result.data.token);

        //set user info
        const userinfo = await this.$store.dispatch('user/getUserInfo', FakeToken.getToken());
        if (userinfo.success) {
          //add dynamic routes
          this.$router.$addRoutes([...this.$store.state.user.routes]);
          //redirect
          this.$router.push({ path: '/dashboard' });
        } else {
          //warning
          this.$message(userinfo.message);
        }

      }
      else {
        this.$message('登陆失败');
      }
    }


  }
}
</script>
