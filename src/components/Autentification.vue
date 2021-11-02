<template>
  <h3 v-if="isUser">Is User</h3>
  <form method="post" class="form" id="login-form" v-if="loginFlag">
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
    <button type="submit" class="btn" @click.prevent="postUser">Login</button>
    <button class="change-btn" @click.prevent="changeLoginFlag">Register</button>
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
    <button type="submit" class="btn" @click.prevent="postUser">Login</button>
    <button class="change-btn" @click="changeLoginFlag">Register</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isUser: false,
      loginFlag: true,

      userName: null,
      password: null,
      URL: 'https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    };
  },
  mounted() {},
  methods: {
    async postUser() {
      if (this.userName && this.password) {
        const response = await axios.get(this.URL);
        const user = Object.values(response.data).filter(
          (item) => item.userName === this.userName
        )[0];

        console.log(user, this.userName);
        if (user.userName === this.userName) {
          console.log('Already registered');
          this.isUser = true;
          return;
        }

        await axios.post(this.URL, {
          userName: this.userName,
          password: this.password,
        });
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
  color: var(--light-pink);
  text-decoration: underline;
  font-size: 0.8rem;
}
</style>
