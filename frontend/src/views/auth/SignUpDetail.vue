<template>
  <section class="signup-detail card">
    <h2>Detail</h2>
    <h4 class="greet">
      <i class="medium material-icons">face</i>
      {{ username }}님 회원가입을 축하드립니다.
      <i class="medium material-icons">face</i>
    </h4>
    <div>
      <div class="div-field">
        Username :
        <span id="value username">
          {{ username }}
        </span>
      </div>
      <div class="div-field">
        NickName :
        <span id="value nickname">
          {{ nickname }}
        </span>
      </div>
      <div class="div-field">
        Email :
        <span id="value email">
          {{ email }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { getUserByName } from '@/controllers/UsersControllers';

export default {
  data: () => {
    return {
      username: '',
      nickname: '',
      email: '',
      message: '',
    };
  },
  created() {
    getUserByName(this.$route.params.username).then(({ data }) => {
      this.username = data.username;
      this.nickname = data.nickname;
      this.email = data.email;
    });
  },
};
</script>

<style lang="scss" scoped>
.signup-detail {
  padding: 10px 30px 30px;
}
.greet {
  display: flex;
  align-items: center;
  i {
    padding: 0 15px;
  }
}
.div-field {
  font-size: 20px;
  .value {
    font-size: 18px;
  }
}
</style>

