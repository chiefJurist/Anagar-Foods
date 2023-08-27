<script>
    import { RouterView } from 'vue-router'
    import Header from './components/Header.vue';

    export default{
        components: { Header }
    }
</script>

<template>
    <div class="px-16 text-gray-600 bg-gray-100 font-custom">
        <Header />
	    <RouterView />
    </div>
</template>

<style>

</style>
