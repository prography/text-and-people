<template>
  <section class="section section-signup">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <div class="form">
            <div v-html="gdpr" />
          </div>
          <p class="right">
            <label for="isAgree">
              <input
                id="isAgree"
                type="checkbox"
                class="isAgree"
                :checked="isAgree"
                v-model="isAgree"
              />
              <span>Agree</span>
            </label>
          </p>
        </div>
        <div class="col s12 m6">
          <div class="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0 form">
            <form>
              <div class="input-field">
                <input
                  type="text"
                  id="nickname"
                  v-model.lazy.trim="nickname"
                >
                <label for="nickname">NickName</label>
              </div>
              <div class="input-field">
                <input
                  type="email"
                  id="email"
                  v-model.lazy.trim="email"
                >
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  id="password"
                  v-model.lazy.trim="password"
                >
                <label for="password">Password</label>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  id="confirm-password"
                  v-model.lazy.trim="confirmPassword"
                >
                <label for="confirm-password">confirm-password</label>
              </div>
              <input
                type="submit"
                value="Signup"
                class="btn btn-large purple btn-extend"
                @click="postUserForm"
              >
            </form>
          </div>
          <p class="right message red-text darken-4">
            <span>{{ message }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gdpr from './gdpr';

export default {
  components: {
    gdpr,
  },
  created() {
    this.gdpr = gdpr;
  },
  data: () => {
    return {
      gdpr: '',
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      isAgree: false,
    };
  },
  methods: {
    getValidationUserForm(event) {
      if (!this.email) {
        this.message = 'Email을 입력해주세요.';
        event.currentTarget.focus();
        return false;
      }
      if (!this.isAgree) {
        this.message = '회원가입 기본사항에 동의해주세요.';
        return false;
      }
      // .......
      this.message = '';
      return true;
    },
    postUserForm(event) {
      event.preventDefault();
      if (!this.getValidationUserForm(event)) {
        // .......
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  height: 400px;
  overflow: auto;
  margin: 0;
}
</style>

