<script>
    import { RouterView } from 'vue-router'
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default{
        components: { Header, Footer }
    }
</script>

<template>
    <div class="px-16 text-gray-600 bg-gray-100 font-custom">
        <Header />
	    <RouterView />
        <Footer />
    </div>
</template>

<style>

</style>
