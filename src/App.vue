<template>
  <header-app />
  
  <router-view />
  <footer-app/>
</template>

<script>


import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp,
  },
 
  
}

</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

:root {
  --clr-accent-400: hsl(12, 88%, 59%);
  --clr-accent-100: hsl(13, 100%, 96%);
  --clr-primary-400: hsl(228, 39%, 23%);
  --clr-neutral-900: hsl(232, 12%, 13%);
  --clr-neutral-200: hsl(216, 2%, 54%);
  --clr-neutral-150: hsla(216, 2%, 54%, 0.25);
  --clr-neutral-100: hsl(0, 0%, 100%);

  --fw-regular: 400;
  --fw-semi-bold: 500;
  --fw-bold: 700;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.primary-button {
  padding: 16px 32px;
  background-color: var(--clr-accent-400);
  border: none;
  border-radius: 24px;
  color: var(--clr-neutral-100);
  font-weight: var(--fw-bold);
  font-family: var(--font-family);
  cursor: pointer;
  transition: box-shadow 0.4s;
}
.primary-button:hover {
  box-shadow: 0 3px 10px hsla(12, 100%, 67%, 0.75);
}

</style>
