<script setup lang="ts">
    import HeaderButton from './HeaderButton.vue';
    import FeatherButton from './FeatherButton.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex justify-between h-12">
        <div class="grow"/>
        <div class="flex grow max-w-50 items-center justify-center">
            <h1 class="unselectable font-semibold text-ui">Kiersten Engen</h1>
        </div>
        <div class="flex grow max-w-150 items-center justify-around">
            <RouterLink to="/"><HeaderButton msg="home" class="font-medium" @click="console.log('home')"/></RouterLink>
            <RouterLink to="/projects"><HeaderButton msg="projects" class="font-medium"/></RouterLink>
            <RouterLink to="/about"><HeaderButton msg="about" class="font-medium"/></RouterLink>
            <RouterLink to="/contact"><HeaderButton msg="contact" class="font-medium" @click="console.log('contact')"/></RouterLink>
            <!-- <FeatherButton class="rounded-sm" iconName="sun" size="20" strokeWidth="2.2" @click="toggleDarkMode"/> -->
        </div>
        <div class="grow"/>
    </div>
</template>
