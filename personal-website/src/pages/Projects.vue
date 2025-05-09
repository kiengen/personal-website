<script setup lang="ts">
    import { ref } from 'vue';

    import Header from '../components/Header.vue';
    import FeatherButton from '../components/FeatherButton.vue';
    import InfiniteScroll from '../components/InfiniteScroll.vue';

    import { useProjectData } from '../stores/ProjectData';

    const projects = useProjectData().projects;
    const curProj = ref(projects[0] as Project);

    const toolTipPos = ref({x: 0, y: 0});
    const toolTipHidden = ref(true);
    const toolTipText = ref("");

    window.addEventListener('mousemove', updateToolTipPosition);

    function receiveProject(data: Project) : void {
        curProj.value = data;
    }

    function updateToolTipPosition(e: any) : void {
        toolTipPos.value.x = e.clientX+6;
        toolTipPos.value.y = e.clientY+4;
    }

    function updateToolTipText(txt: string) : void {
        toolTipHidden.value = false;
        toolTipText.value = txt;
    }
</script>

<template>
    <!-- tooltip that appears when hovering over frameworks-->
    <div class="z-2 pointer-events-none overflow-visible absolute w-0 h-0">
        <div v-if="!toolTipHidden" id="tooltip" :style="{left: toolTipPos.x + 'px', top: toolTipPos.y + 'px'}" class="relative bg-black min-w-20 w-fit h-fit min-h-6 text-white text-nowrap pl-2 pr-2">{{ toolTipText }}</div>
    </div>
    <div class="bg-bg w-full h-full flex flex-col min-h-108">
        <Header class="h-1/9" />
        <!-- Shows for medium and large screens -->
        <div class="hidden md:flex flex w-full h-8/9 min-h-100 flex-row grow align-center justify-center">
            <div class="flex flex-8 flex-row justify-center items-center max-w-270">
                <div class="flex flex-1 shrink"/>
                <div class="bg-neutral-600 content-center flex-20 w-1/1 h-8/9 max-h-140 border-1 rounded-md border-ui p-4 pt-0">
                    <h1 class="text-xl font-semibold text-ui h-1/10 content-center">{{ curProj.name }}</h1>
                    <!-- Shows for medium screens -->
                    <div class="lg:hidden h-17/20">
                        <div class="mt-2 mb-2 flex flex-1 w-full h-1/2 flex-row items-center">
                            <img class="min-w-10 max-w-83.25 w-3/5 h-full object-cover border-1 border-ui mr-3" :src="'assets/'+curProj.photos[0]"/>
                            <div class="flex flex-col w-2/5 h-full">
                                <p class="text-left text-ui font-semibold">Frameworks</p>
                                <div class="flex flex-wrap h-full gap-y-3.5 gap-x-3 p-1.5 content-start">
                                    <img @mouseover="updateToolTipText(framework)" @mouseleave="toolTipHidden = true" class="object-contain h-2/13 object-fill hover:scale-130 duration-200 ease-in-out" v-for="framework in curProj.frameworks" :src="'assets/frameworks/'+framework+'.svg'"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 w-full h-1/2 overflow-y-auto pr-4">
                            <p class="text-left text-ui font-semibold">What is it?</p>
                            <p class="text-left text-ui whitespace-pre-wrap">{{ curProj.description }}</p>
                        </div>
                    </div>
                    <!-- Shows for large screens -->
                    <div class="lg:flex hidden h-17/20 flex-row mt-2">
                        <div class="flex flex-5 flex-col">
                            <img class="min-w-10 min-h-10 w-full h-1/2 object-cover border-1 border-ui mr-3" :src="'assets/'+curProj.photos[0]"/>
                            <p class="mt-4 ml-3 text-left text-ui font-semibold">Frameworks</p>
                            <div class="p-3 flex flex-wrap h-8/20 gap-y-3.5 gap-x-7 p-1.5 content-start">
                                <img @mouseover="updateToolTipText(framework)" @mouseleave="toolTipHidden = true" class="object-contain h-1/4 object-fill hover:scale-120 duration-200 ease-in-out" v-for="framework in curProj.frameworks" :src="'assets/frameworks/'+framework+'.svg'"/>
                            </div>
                        </div>
                        <div class="ml-4 pl-4 flex-4 w-1/2 h-full overflow-y-auto pr-4">
                            <p class="text-left text-ui font-semibold">What is it?</p>
                            <p class="text-left text-ui whitespace-pre-wrap">{{ curProj.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 shrink"/>
            </div>
            <div class="flex flex-3 min-w-20 max-w-120 justify-center">
                <InfiniteScroll @project-data="receiveProject" class="z-2 w-1/2 max-w-80 flex-col h-full" :inputItems="projects" id="1" :clickable="true" direction="col"/>
            </div>
        </div>

        <!-- Shows for small screens -->
        <div class="md:hidden flex w-full h-full flex-col min-h-115 bg-bg">
            <div class="flex flex-col flex-5 items-center">
                <div class="flex flex-1 shrink"/>
                <!-- Project card at top of screen -->
                <div class="mt-2 mb-2 flex-10 h-1/1 grow bg-neutral-600 w-9/10 max-h-70 border-ui border-1 rounded-sm flex flex-col">
                    <div class="flex w-full h-4/5 flex-row">
                        <!-- Left Half (title/image carousel) -->
                        <div class="ml-4 mr-2 flex flex-2 w-9/20 h-full flex-col">
                            <h1 class="mt-3 m-1 w-full h-fit text-ui content-center text-xl font-semibold">{{curProj.name}}</h1>
                            <img class="w-1/1 h-full object-cover border-1 border-ui" :src="'assets/'+curProj.photos[0]"/>
                        </div>
                        <!-- Right Half (description) -->
                        <div class="mt-3 flex w-11/20 h-19/20 flex-col overflow-auto mr-3 pr-3">
                            <p class="m-4 mt-0 mb-0 font-semibold text-left text-ui">What is it?</p>
                            <p class="m-4 mr-0 mt-0 text-left flex-5 text-ui">{{curProj.description}}</p>
                        </div>
                    </div>
                    <!-- List of frameworks -->
                    <div class="ml-2 pl-2 mr-4 pr-2 overflow-x-auto flex flex-row h-3/10 items-center justify-start mt-2 pb-1 mb-1">
                        <img @mouseover="updateToolTipText(framework)" @mouseleave="toolTipHidden = true" v-for="framework in curProj.frameworks" class="first:pl-0 first:ml-0 last:mr-0 m-2 mt-1 w-fit h-4/6 object-fill hover:scale-130 duration-200 ease-in-out" :src="'assets/frameworks/'+framework+'.svg'"/>
                    </div>
                </div>
                <div class="flex flex-1 shrink"/>
            </div>
            <!-- Project Scroll at bottom of screen -->
            <div class="flex flex-4 items-center">
                <InfiniteScroll @project-data="receiveProject" class="min-h-40 max-h-50 h-full" :inputItems="projects" id="0" :clickable="true"/>
            </div>
            <div class="flex flex-1 shrink"/>
        </div>
    </div>
</template>
