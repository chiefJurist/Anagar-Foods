<template>
    <div class="header-container">
        <span class="inline-block text-6xl text-blue-800">Anagar Foods</span>
        <nav class="nav-container">
            <ul class="flex">
                <li><router-link :to="{name: 'Home'}" class="header-router">Home</router-link></li>
                <li><router-link to="/about" class="header-router">About</router-link></li>
                <li><router-link to="/contact" class="header-router">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>
