<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { onMounted, ref } from 'vue';

    import SwishJSON from '/assets/home/swish_clean.json';

    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import HeaderButton from '../components/HeaderButton.vue';
    import FeatherButton from '../components/FeatherButton.vue';
    import InfiniteScroll from '../components/InfiniteScroll.vue';

    import { projects } from '../../data/projects';

    const router = useRouter();

    const bg_pause = ref(true);

    function receiveProject(data: Project) : void {
        router.push({
            path: '/projects',
            query: {
                project: data.id,
            }
        });
    }

    onMounted(() => {
        // wait a second...
        setTimeout(() => {
            // start swish animation...

            // wait a second...
            setTimeout(() => {
            }, 1000);
        }, 2000);
    });
</script>

<template>
    <!-- FIRST SECTION (Intro) -->
    <div class="w-full h-full flex flex-col min-h-85">
        <div class="absolute w-full h-full">
            <div class="flex flex-1 w-full h-full z-0 justify-center items-center">
                <div class="flex w-3/7 min-w-80 h-6/7">
                    <div class="relative w-full h-full">
                        <img class="absolute w-50 h-50 invert opacity-13 -left-25 -top-12 min-[619px]:-top-8" src="/assets/home/star1.png"/>
                        <img class="absolute w-50 h-50 invert opacity-13 -right-35 top-1/3" src="/assets/home/star2.png"/>
                        <img class="absolute w-50 h-50 invert opacity-13 -right-19 top-5/12" src="/assets/home/star3.png"/>
                    </div>
                </div>
            </div>
        </div>
        <Header class="z-1" />
        <div class="flex flex-col h-3/5 justify-center items-center">
            <div class="mix-blend-screen absolute w-100 h-3/5 min-h-51 top-12 left-(1/2)">
                <div class="relative w-0 h-0 top-1/2 left-1/2">
                    <Vue3Lottie class="absolute -left-22 min-[619px]:-top-43 -top-46 opacity-13 z-3 blur-[0px] mask-t-from-50% mask-t-to-90%" :animationData="SwishJSON" :loop="false" :speed="1" :autoPlay="true" :height="320" :width="320">
                    </Vue3Lottie>
                </div>
            </div>
            <p class="h-20 content-center text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text from-lime-300 via-green-300 to-cyan-400 z-2">Hi! I'm <b>Kiersten</b>.</p>
            <p class="w-9/10 text-lg text-ui">I am a software engineering student with a passion for programming.</p>
            <div class="flex w-1/3 min-w-56 max-w-70 flex-row h-14 justify-around items-end z-5">
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="github" href="https://github.com/kiengen"}/>
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="linkedin" href="https://linkedin.com/in/kiersten-engen"/>
                <FeatherButton class="border-1 rounded-full" strokeWidth="1.5" iconName="mail" href="mailto:ksengen@uwaterloo.ca"/>
            </div>
        </div>
        <div class="flex-3 content-end z-1">
            <vue-feather type="arrow-down" class="flex text-ui" size="40" stroke-width="1"></vue-feather>
        </div>
        <div class="flex-1 z-1"></div>
    </div>

    <!-- SECOND SECTION (Project Carousel) -->
    <h1 class="bg-bg text-3xl text-ui h-15 font-medium">Projects</h1>
    <div class="bg-bg w-full aspect-video max-h-120 flex flex-col min-h-100 justify-center">
        <div class="mask-x-from-75% mask-x-to-95% h-full w-full max-h-150 flex flex-col">
            <InfiniteScroll @project-data="receiveProject" class="h-1/1 min-h-20" :inputItems="projects" id="1" :clickable="true" direction="left"/>
            <InfiniteScroll @project-data="receiveProject" class="h-1/1 min-h-20" :inputItems="projects" id="2" :clickable="true" offset="3" direction="right"/>
            <InfiniteScroll @project-data="receiveProject" class="h-1/1 min-h-20" :inputItems="projects" id="3" :clickable="true" offset="9" direction="left"/>
        </div>
    </div>
    <div class="bg-bg flex w-full h-15 justify-center items-end">
        
    <RouterLink to="/projects">
        <HeaderButton class="flex border-1 max-w-50 max-h-8" msg="view all projects"/>
    </RouterLink>
    </div>
    <div class="bg-bg h-35 content-end">
        <Footer />
    </div>
</template>

