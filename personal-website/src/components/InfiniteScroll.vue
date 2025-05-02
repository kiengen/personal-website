<script setup lang="ts">
    import { onMounted, onBeforeUnmount, ref } from "vue";
    import ProjectTile from "./ProjectTile.vue";

    const props = defineProps<{ inputItems?: Array<{name: string, photo: string}>,
                                id?: string,
                                offset?: string,
                                clickable?: boolean,
                }>()
    
    let intervalId = 0;
    const hover = ref(false);

    const container = ref(document.getElementById("container"+props.id) as HTMLElement);

    function toggleHover() {
        hover.value = !hover.value;
    }

    onMounted(() => {
        container.value = document.getElementById("container"+props.id) as HTMLElement;
        container.value.scrollLeft += parseInt(props.offset ?? "0")*100;
        /**intervalId = setInterval(() => {
            if(!hover.value) {
                container.scrollLeft += 1;
            }
            if(container.scrollLeft >= container.scrollWidth/3) {
                container.scrollLeft = 0;
            }
        }, 50);**/
    });

    function scrollCheck() : void {
        if(container.value.scrollLeft >= container.value.scrollWidth/3) {
            container.value.scrollLeft = 0.05;
        }
        else if(container.value.scrollLeft <= 0.04) {
            container.value.scrollLeft = container.value.scrollWidth/3-0.05;
        }
    }

    /**onBeforeUnmount(() => {
        clearInterval(intervalId);
    });**/
</script>

<template>
    <div @scroll="scrollCheck" @mouseenter="toggleHover" @mouseleave="toggleHover" class="flex flex-1 flex-row w-full h-50 overflow-y-auto no-scrollbar" ref="container" :id="'container'+id">
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo" :clickable="clickable"/>
        </div>
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo" :clickable="clickable"/>
        </div>
        <div class="flex flex-1 w-screen h-full" v-for="item in inputItems" :key="item.name">
            <ProjectTile :name="item.name" :photo="'assets/'+item.photo" :clickable="clickable"/>
        </div>
    </div>
</template>
