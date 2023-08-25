<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1>111</h1>
	<RouterView />
</template>

<style>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
