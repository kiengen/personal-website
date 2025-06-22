<script setup lang="ts">
    import Header from '../components/Header.vue';
    import HeaderButton from '../components/HeaderButton.vue';
    import FeatherButton from '../components/FeatherButton.vue';
    import InfiniteScroll from '../components/InfiniteScroll.vue';

    import { useProjectData } from '../stores/ProjectData';

    // the info about all of my proejcts (name, photo source, id for url)
    const projects = useProjectData().projects;
</script>

<template>
    <!-- FIRST SECTION (Intro) -->
    <div class="w-full h-full flex flex-col min-h-85">
        <Header />
        <div class="flex flex-col h-3/5 justify-center items-center">
            <p class="h-20 content-center text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text from-lime-300 via-green-300 to-cyan-400">Hi! I'm <b>Kiersten</b>.</p>
            <p class="w-9/10 text-lg text-ui">I am a software engineering student with a passion for programming.</p>
            <div class="flex w-1/3 min-w-56 max-w-70 flex-row h-14 justify-around items-end">
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="github"/>
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="linkedin"/>
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="mail"/>
            </div>
        </div>
        <div class="flex-3 content-end">
            <vue-feather type="arrow-down" class="flex text-ui" size="40" stroke-width="1"></vue-feather>
        </div>
        <div class="flex-1"></div>
    </div>

    <!-- SECOND SECTION (Project Carousel) -->
    <h1 class="bg-bg text-3xl text-ui h-15 font-medium">Projects</h1>
    <div class="bg-bg w-full aspect-video max-h-120 flex flex-col min-h-100 justify-center">
        <div class="mask-x-from-75% mask-x-to-95% h-full w-full max-h-150 flex flex-col">
            <InfiniteScroll class="h-1/1 min-h-20" :inputItems="projects" id="1" :clickable="false"/>
            <InfiniteScroll class="h-1/1 min-h-20" :inputItems="projects" id="2" :clickable="false" offset="3"/>
            <InfiniteScroll class="h-1/1 min-h-20" :inputItems="projects" id="3" :clickable="false" offset="9"/>
        </div>
    </div>
    <div class="bg-bg flex w-full h-15 justify-center items-end">
        <HeaderButton class="flex border-1 max-w-50 max-h-8" msg="view all projects"/>

    </div>
    <div class="bg-bg h-30 content-end">
        <Header />
    </div>
</template>

