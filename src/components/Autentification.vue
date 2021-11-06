<template>
  <div v-if="loggedIn">
    <h3 class="registered-user" v-if="registeredUser">
      This nickname is taken
    </h3>
    <h3 class="logged-in" :style="`color:${loginMessageColor}`" v-if="loggedIn">
      {{ loginText }}
    </h3>
    <form method="get" class="form" id="login-form" v-if="loginFlag">
      <h1>Login</h1>
      <input
        type="text"
        id="userName"
        placeholder="username"
        v-model="userName"
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        v-model="password"
      />
      <button type="submit" class="btn" @click.prevent="loginUser">
        Login
      </button>
      <button class="change-btn" @click.prevent="changeLoginFlag">
        Register
      </button>
    </form>
    <form method="post" class="form" id="register-form" v-else>
      <h1>Register</h1>
      <input
        type="text"
        id="userName"
        placeholder="username"
        v-model="userName"
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        v-model="password"
      />
      <input
        type="password"
        id="second-password"
        placeholder="password repeat"
        v-model="secondPassword"
      />
      <button type="submit" class="btn" @click.prevent="registerUser">
        Register
      </button>
      <button class="change-btn" @click="changeLoginFlag">Login</button>
    </form>
  </div>

  <div>
    <p>You are Logged In</p>
    <p>Logout or go somewhere else</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      registeredUser: false,
      loggedIn: false,
      loginFlag: true,

      loginText: '',
      loginMessageColor: 'gg',

      userName: null,
      password: null,
      secondPassword: null,
      URL: 'https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    };
  },

  methods: {
    async loginUser() {
      if (this.loginFlag) {
        if (this.userName && this.password) {
          const response = await axios.get(this.URL);
          const user = Object.values(response.data).filter(
            (item) => item.userName === this.userName
          )[0];
          if (user.password === this.password) {
            this.loggedIn = true;
            this.loginMessageColor = 'var(--green)';
            this.loginText = 'You are in';

            localStorage.setItem('username', this.userName);
            localStorage.setItem('password', this.password);

            setTimeout(() => {
              this.$emit('loginTextNew', 'logout');
              this.$emit('loggedIn', this.loggedIn);
              this.$router.push('/');
            }, 500);
          } else {
            this.loginMessageColor = 'var(--red)';
            this.loginText = 'Wrong password';
          }
        }
      }
    },

    async registerUser() {
      if (!this.loginFlag) {
        if (
          this.userName &&
          this.password &&
          this.secondPassword &&
          this.password === this.secondPassword
        ) {
          const response = await axios.get(this.URL);
          const user = Object.values(response.data).filter(
            (item) => item.userName === this.userName
          )[0];
          if (user && user.userName === this.userName) {
            this.isUser = true;
            return;
          }

          await axios.post(this.URL, {
            userName: this.userName,
            password: this.password,
            timers: [],
          });
        }
      }
    },

    changeLoginFlag() {
      this.loginFlag = !this.loginFlag;
      if (this.registeredUser) this.registeredUser = !this.registeredUser;
      if (this.loggedIn) {
        this.loggedIn = !this.loggedIn;
        this.$emit('loginTextNew', 'logout');
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
  text-align: center;
}

h3 {
  margin-bottom: 1rem;
}

p {
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
}

.logged-in {
  color: var(--green);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  padding: 0.2rem 0.3rem;
  line-height: 1rem;
  font-size: 1rem;
}

input:not(:last-child) {
  margin-bottom: 0.5rem;
}

.btn {
  padding: 0.2rem 0.3rem;
  height: 2rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1rem;
}

.change-btn {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--light-blue);
  text-decoration: underline;
  font-size: 0.8rem;
}
</style>
