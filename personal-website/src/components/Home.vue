<script setup lang="ts">
    import Header from './Header.vue';
    import FeatherButton from './FeatherButton.vue';
    import InfiniteScroll from './InfiniteScroll.vue';

    const projects = [{name: "Godot Game", photo: "godot/1.png"},
                      {name: "GLASSES", photo: "uome/1.png"},
                      {name: "Platformer", photo: "platformer/1.png"},
                      {name: "Darwin Game", photo: "darwin/1.png"},
                      {name: "Clue Bot", photo: "clue/1.png"},
                      {name: "Grades App", photo: "grades/1.png"},
                      {name: "trvl", photo: "trvl/1.png"},
                      {name: "Personal Website", photo: "website/1.png"},
                      {name: "CheckMate", photo: "uome/1.png"},
                      {name: "Calculator", photo: "calculator/1.png"},
                      {name: "a", photo: "darwin/3.png"},
                      {name: "b", photo: "website/2.png"},
                      {name: "c", photo: ""},
    ];
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
    <div class="bg-bg w-full h-[80vw] max-h-300 flex flex-col min-h-85 justify-center">
        <div class="h-full w-full max-h-150 flex flex-col">
            <h1 class="text-3xl text-ui h-15">Projects</h1>
            <InfiniteScroll :inputItems="projects" id="1"/>
            <InfiniteScroll :inputItems="projects" id="2" offset="3"/>
            <InfiniteScroll :inputItems="projects" id="3" offset="9"/>
        </div>
    </div>

    <!-- THIRD SECTION (Contact) -->
    <div class="bg-bg w-full h-full flex flex-col min-h-85 justify-center">
    </div>
</template>
