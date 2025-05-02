<script setup lang="ts">
    import Header from '../components/Header.vue';
    import FeatherButton from '../components/FeatherButton.vue';
    import InfiniteScroll from '../components/InfiniteScroll.vue';

    import { useProjectData } from '../stores/ProjectData';

    const projects = useProjectData().projects;
</script>

<template>
    <!-- FIRST SECTION (Intro) -->
    <div class="w-full h-full flex flex-col min-h-85">
        <Header />
        <div class="hidden md:flex flex w-full h-full flex-row">
            <div class="flex flex-4 flex-col bg-a justify-center items-center">
                <div class="lg:hidden w-9/10 h-7/10 bg-ui p-3">
                    <div class="flex-1 bg-a w-full h-1/3">
                    </div>
                    <div class="flex-1 bg-b w-full h-1/2">
                    </div>
                </div>
                <div class="hidden lg:flex w-9/10 h-7/10 bg-ui p-3">
                    <div class="flex-1 bg-a h-full">
                        <h1>Project Name</h1>
                        <div>
                            <!-- PHOTOS -->
                        </div>
                        <div>
                            <!-- Frameworks/skills -->
                        </div>
                    </div>
                    <div class="flex-1 bg-b w-full h-1/2">
                        <div>
                            <!-- Description -->
                        </div>
                        <div>
                            <!-- Frameworks/skills -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-5 bg-b">
            </div>
        </div>
        <div class="md:hidden flex w-full h-full flex-col">
            <div class="flex flex-4 items-center">
                <div class="m-10 w-full h-3/4 border-ui border-1 rounded-sm flex flex-row">
                    <div class="flex w-full h-full bg-a flex-col">
                        <h1 class="m-1 w-full text-ui">Project Name</h1>
                        <div class="h-full bg-b">Photo Carousel</div>
                    </div>
                    <div class="flex w-full h-full bg-b flex-col">
                        <p class="m-4 mt-2 text-left flex-5">This will contain a brief description of the project. What it is, why I made it, all sorts of different things like that.</p>
                        <div class="bg-a flex-2">Framework image bar</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-5 bg-b">
                <InfiniteScroll :inputItems="projects" id="0" :clickable="true"></InfiniteScroll>
            </div>
        </div>
    </div>
</template>
