

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
import { LoadingSvc } from '@/util';


export default {

  data () {

    return {
      userName: '',
      userPwd: ''
    }

  },

  methods: {

    async onSubmit () {
      LoadingSvc.show();
      const result = await FakeUser.login(this.userName, this.userPwd);
      LoadingSvc.hide()
      console.log(result, 'result')
    }

  }
}
</script>
