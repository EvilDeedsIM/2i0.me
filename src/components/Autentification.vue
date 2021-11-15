<template>
  <div>
    <form method="get" class="form" id="login-form">
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
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  inheritAttrs: false,
  props: ['loggedInFlag'],
  data() {
    return {
      loginFlag: true,
      userName: null,
      password: null,
      URL: 'https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    };
  },

  created() {},

  methods: {
    async loginUser() {
      if (this.userName && this.password) {
        const response = await axios.get(this.URL);
        const users = Object.entries(response.data);
        const user = users.filter((item) => {
          return item[1].userName === this.userName;
        })[0];

        this.$emit('auth-user', {
          id: user[0],
          data: user[1],
        });

        if (user[1].password === this.password) {
          setTimeout(() => {
            this.$router.push('/');
          }, 500);
        }
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
