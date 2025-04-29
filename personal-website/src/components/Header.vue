<script setup lang="ts">
    import HeaderButton from './HeaderButton.vue';
    import { ref } from 'vue';
    const isDarkTheme = ref(false);
    const count = ref(0);
</script>

<template>
    <div class="flex justify-between h-12">
        <div class="grow"/>
        <div class="flex grow max-w-50 items-center justify-center">
            <h1 class="font-semibold">Kiersten Engen</h1>
        </div>
        <div class="flex grow max-w-150 items-center justify-around">
            <HeaderButton msg="home" class="font-medium" @click="console.log('home')"/>
            <HeaderButton msg="projects" class="font-medium" @click="console.log('projects')"/>
            <HeaderButton msg="about" class="font-medium" @click="console.log('about')"/>
            <HeaderButton msg="contact" class="font-medium" @click="console.log('contact')"/>
            <HeaderButton msg="o" class="font-medium" @click="console.log('theme')"/>
        </div>
        <div class="grow"/>
    </div>
    <div class="-z-2 opacity-50 absolute overflow-hidden top-0 left-0 h-15 w-full">
        <div class="relative -top-7 -left-10 w-3/1 h-20 bg-blue-200 blur-[6px]"></div>
    </div>
</template>
