<script>
    import { RouterView } from 'vue-router'
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';

    export default{
        components: { Header, Footer, Menu }
    }
</script>

<template>
    <div class="app">
        <Header />
        <Menu />
	    <RouterView />
        <Footer />
    </div>
</template>

<style>

</style>
