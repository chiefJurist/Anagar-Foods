<script>
    import AboutNav from '../components/About/AboutNav.vue';
    import AboutDescription from '../components/About/AboutDescription.vue';
    import InternationalMenu from '../components/About/InternationalMenu.vue';
    import LocalMenu from '../components/About/LocalMenu.vue';
    import LocalMenu2 from '../components/About/LocalMenu2.vue';

    export default {
        components : { AboutNav, AboutDescription, InternationalMenu, LocalMenu, LocalMenu2 }
    }
</script>

<template>
    <div class="about">
        <AboutNav />
        <AboutDescription />
        <InternationalMenu />
        <LocalMenu />
        <LocalMenu2 />
    </div>
</template>

<style>

</style>
