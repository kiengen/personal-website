<script setup lang="ts">
    import Header from './Header.vue';
    import FeatherButton from './FeatherButton.vue';
    import InfiniteScroll from './InfiniteScroll.vue';

    const projects = [{name: "Godot Game", photo: "godot.png"},
                      {name: "GLASSES", photo: ""},
                      {name: "1", photo: ""},
                      {name: "Darwin Game", photo: "darwin.png"},
                      {name: "Clue Bot", photo: ""},
                      {name: "Grades App", photo: ""},
                      {name: "trvl", photo: ""},
                      {name: "Personal Website", photo: ""},
                      {name: "CheckMate", photo: ""},
                      {name: "Something else", photo: ""},
                      {name: "a", photo: ""},
                      {name: "b", photo: ""},
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
    <div class="bg-black w-full h-full flex flex-col min-h-85 justify-center">
        <div class="h-full max-h-150 flex flex-col">
            <h1 class="text-3xl text-ui h-15">Projects</h1>
            <InfiniteScroll :inputItems="projects"/>
            <div class="flex-1 w-full bg-b">
            </div>
            <div class="flex-1 w-full bg-green-100">
            </div>
        </div>
    </div>

    <!-- THIRD SECTION (Contact) -->
    <div class="w-full h-full flex flex-col min-h-85 justify-center">
    </div>
</template>
