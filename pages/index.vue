<template>
  <section class="container">
    <div>
      <logo style="width : 45%; margin : auto;" />
      <h1 class="title">
        CaméScope
      </h1>
      <h2 class="subtitle">
        Agnès de Lestrange &amp; Nicolas RUCHE
      </h2>
      <div class="links">
        <nuxt-link to="documentation" class="button--green">Documentation</nuxt-link>
        <a href="https://github.com/Mistergix/designS2" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

<style></style>
