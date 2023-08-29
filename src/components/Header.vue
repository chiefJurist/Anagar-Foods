<script>
    export default {
       methods: {
            toggle() {
                this.$emit('control')
            }
       }
    }
</script>

<template>
    <div class="header-container">
        <div class="inline-block text-4xl py-5 sm:py-0 sm:text-2xl">Anagar Foods</div>

        <!--Menu for bigger screens-->
        <div class="nav-container">
            <ul class="flex">
                <li><router-link :to="{name: 'Home'}" class="header-router">Home</router-link></li>
                <li><router-link to="/about" class="header-router">About</router-link></li>
                <li><router-link to="/contact" class="header-router">Contact</router-link></li>
            </ul>
        </div>

        <!--Menu for small screens-->
        <div @click="toggle" class="burger sm:hidden">
            <ion-icon name="menu-outline" class="font-bold text-3xl"></ion-icon>
        </div>
    </div>
</template>
