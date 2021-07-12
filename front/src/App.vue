<template>
  <v-app>
    <v-container>
      <Nav />

      <v-main>
        <router-view/>
      </v-main>
    </v-container>

  </v-app>
</template>

<script>
  import Nav from "./components/basic/blocks/Nav";
export default {
  name: 'App',
  components: {
    Nav
  },
  data: () => ({
    //
  }),
};
</script>
