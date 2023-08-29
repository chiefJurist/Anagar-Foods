<script>
    export default {
       props: ['showMenu'],

        methods: {
            toggle() {
                this.$emit('control')
            }
        }
    }
</script>

<template>
    <transition name="slide-fade" mode="in-out">
        <div v-if="showMenu" class="bg-orange-600 w-full fixed top-0 h-full">
            <div class="p-5 pt-8 font-light block text-gray-300 text-3xl text-right">
                <button @click="toggle">X</button>
            </div>
            <router-link to="/" class="menu-link"  @click="toggle">Home</router-link>
            <router-link to="/about" class="menu-link"  @click="toggle">About</router-link>
            <router-link to="/contact" class="menu-link"  @click="toggle">Contact</router-link>
        </div>
    </transition>
</template>

<style>
    .slide-fade-enter-active{
    transition: opacity 0.5s, transform 0.5s;
    }
    .slide-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
    }
    .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-100px);
    }
    .slide-fade-enter-from{
        opacity: 0.8;
        transform: translateX(-100px);
    }
</style>
