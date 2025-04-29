<script setup lang="ts">
    import HeaderButton from './HeaderButton.vue';
</script>

<template>
    <div class="z-10 flex justify-between h-12">
        <div class="grow"/>
        <div class="flex grow max-w-50 items-center justify-center">
            <h1 class="unselectable font-semibold text-ui">Kiersten Engen</h1>
        </div>
        <div class="flex grow max-w-150 items-center justify-around">
            <HeaderButton msg="home" class="font-medium" @click="console.log('home')"/>
            <HeaderButton msg="projects" class="font-medium" @click="console.log('projects')"/>
            <HeaderButton msg="about" class="font-medium" @click="console.log('about')"/>
            <HeaderButton msg="contact" class="font-medium" @click="console.log('contact')"/>
            <HeaderButton msg="sun" feather={true} class="font-medium" @click="console.log('theme')"/>
        </div>
        <div class="grow"/>
    </div>
</template>
