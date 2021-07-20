<template>
  <div>
    <h3>Account Info</h3>

    <form class="mb-8" @submit.prevent="infoSubmitHandler">
      <div class="mb-3">
        <v-text-field v-model="user.first_name" label="First Name"/>
      </div>

      <div class="mb-3">
        <v-text-field v-model="user.last_name" label="Last Name"/>
      </div>

      <div class="mb-3">
        <v-text-field v-model="user.email" label="email" type="email"/>
      </div>

      <v-btn color="primary" type="submit">Save</v-btn>
    </form>

    <h3>Change Password</h3>

    <form @submit.prevent="passwordSubmitHandler">
      <div class="mb-3">
        <v-text-field v-model="password" label="Password" />
      </div>

      <div class="mb-3">
        <v-text-field v-model="password_confirm" label="Password confirm"/>
      </div>

      <v-btn color="primary" type="submit">Save</v-btn>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
      password: '',
      password_confirm: '',
    };
  },
  methods: {
    async infoSubmitHandler() {
      const { data } = await axios.put('/users/info', {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
      });

      await this.$store.dispatch('setUser', data);
    },
    async passwordSubmitHandler() {
      await axios.put('/users/password', {
        password: this.password,
        password_confirm: this.password_confirm,
      });
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
