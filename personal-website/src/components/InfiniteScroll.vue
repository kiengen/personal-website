<script setup lang="ts">
    import { onMounted, onBeforeUnmount, ref } from "vue";
    import ProjectTile from "./ProjectTile.vue";

    const props = defineProps<{ inputItems?: Array<{name: string, photo: string}>,
                                id?: string,
                                offset?: string,
                }>()
    
    let intervalId = 0;
    const hover = ref(false);

    function toggleHover() {
        hover.value = !hover.value;
    }

    onMounted(() => {
        const container = document.getElementById("container"+props.id) as HTMLElement;
        container.scrollLeft += parseInt(props.offset ?? "0")*100;
        intervalId = setInterval(() => {
            if(!hover.value) {
                container.scrollLeft += 1;
            }
            if(container.scrollLeft >= container.scrollWidth/3) {
                container.scrollLeft = 0;
            }
        }, 50);
    });

    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
</script>

<template>
    <div @mouseenter="toggleHover" @mouseleave="toggleHover" class="flex flex-1 flex-row w-full max-h-[25vw] h-20 overflow-y-auto no-scrollbar" ref="container" :id="'container'+id">
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo"/>
        </div>
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo"/>
        </div>
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo"/>
        </div>
    </div>
</template>
