<template>
  <section class="section section-signup">
    <div class="container">
      <div v-if="!isSuccess">
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
                    id="username"
                    @input="debouncedCheckDuplication"
                    v-model.lazy.trim="username"
                  >
                  <label for="username">Username</label>
                </div>
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
                  value="Sign-Up"
                  class="btn btn-large purple btn-extend"
                  @click="postUserForm"
                >
              </form>
            </div>
            <div class="center">
              <PreLoader :isShow="isLoading" />
            </div>
            <p class="right message red-text darken-4">
              <span>{{ message }}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-if="isSuccess">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';

import gdpr from './gdpr';
import { signIn, signUp } from '@/controllers/AuthenticationControllers';
import { getUserByName } from '@/controllers/UsersControllers';

import PreLoader from '@/components/preloader/PreLoader';

export default {
  components: {
    gdpr,
    PreLoader,
  },
  created() {
    this.gdpr = gdpr;
  },
  data: () => {
    return {
      gdpr: '',
      username: 'hello',
      nickname: 'hello',
      email: 'hello@hello.com',
      password: 'hello',
      confirmPassword: 'hello',
      message: '',
      isAgree: true,
      isSuccess: false,
      isLoading: false,
    };
  },
  methods: {
    getValidationUserForm(event) {
      if (!this.isAgree) {
        this.message = '회원가입 기본사항에 동의해주세요.';
        return false;
      }
      if (!this.username) {
        this.message = 'Username을 입력해주세요.';
        return false;
      }
      if (!this.nickname) {
        this.message = 'Nickname을 입력해주세요.';
        return false;
      }
      if (!this.email) {
        this.message = 'Email을 입력해주세요.';
        return false;
      }
      if (!this.password) {
        this.message = 'Password를 입력해주세요.';
        return false;
      }
      if (this.password !== this.confirmPassword) {
        this.message = '비밀번호가 다릅니다. 확인해주세요.';
        return false;
      }
      this.message = '';
      return true;
    },
    debouncedCheckDuplication: _.debounce(function(event) {
      getUserByName(event.target.value).then(({ data, message }) => {
        if (data) {
          this.message = message;
        } else {
          this.message = '';
        }
      });
    }, 500),
    postUserForm(event) {
      event.preventDefault();
      if (!this.getValidationUserForm(event)) {
        return;
      }
      const user = {
        email: this.email,
        nickname: this.nickname,
        password: this.password,
        username: this.username,
      };
      signUp(user)
        .then(({ error, data }) => {
          this.isLoading = true;
          setTimeout(() => {
            Object.keys(data).forEach((key) => {
              this[key] = '';
            });
            this['password'] = '';
            this['confirmPassword'] = '';
            this.isAgree = false;
            this.isSuccess = true;
            this.isLoading = false;
            this.$router.push(`/sign-up/${data.username}`);
          }, 1000);
        })
        .catch(({ message }) => {
          this.message = message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 80px 0 70px;
}
.form {
  height: 500px;
  overflow: auto;
  margin: 0;
}
</style>

