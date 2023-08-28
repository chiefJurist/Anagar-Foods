<template>
    <div class="header-container">
        <div class="inline-block text-2xl">Anagar Foods</div>

        <!--Menu for bigger screens-->
        <div class="nav-container">
            <ul class="flex">
                <li><router-link :to="{name: 'Home'}" class="header-router">Home</router-link></li>
                <li><router-link to="/about" class="header-router">About</router-link></li>
                <li><router-link to="/contact" class="header-router">Contact</router-link></li>
            </ul>
        </div>

        <!--Menu for small screens-->
    </div>
</template>
