<template>
  <v-app>
    <navbar/>

    <div class="container-fluid">
      <div class="row">
        <main-menu/>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="table-responsive">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    MainMenu,
  },
  async mounted() {
    try {
      const { data } = await axios.get('/user');

      await this.$store.dispatch('setUser', data);
    } catch (e) {
      await this.$router.push('/login');
    }
  },
};
</script>
