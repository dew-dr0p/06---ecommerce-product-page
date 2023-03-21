<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import ProductPage from './components/ProductPage.vue';

</script>

<template>
  <header>
    <nav class="border-b border-blue-grayish grid grid-cols-[4fr,2fr,1fr] py-7 mb-10">
      <NavBar />
    </nav>
  </header>

  <main class="grid grid-cols-2 m-auto mt-10">
    <ProductPage />
  </main>
</template>

<style scoped>
</style>
