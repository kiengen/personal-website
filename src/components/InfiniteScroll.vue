<script setup lang="ts">
    import { onMounted, onBeforeUnmount, ref, defineEmits } from "vue";
    import ProjectTile from "./ProjectTile.vue";

    const props = defineProps<{ inputItems?: any[],
                                id?: string,
                                offset?: string,
                                clickable?: boolean,
                                direction?: string,
                }>()
    
    //let intervalId = 0;
    const hover = ref(false);

    const container = ref(document.getElementById("container"+props.id) as HTMLElement);
    
    const emit = defineEmits(['project-data']);
    
    function sendData(projectData: object) : void {
        emit('project-data', projectData);
    }

    function toggleHover() {
        hover.value = !hover.value;
    }

    onMounted(() => {
        container.value = document.getElementById("container"+props.id) as HTMLElement;
        if(props.direction) {
            container.value.scrollTop += parseInt(props.offset ?? "0")*100;
        }
        else {
            container.value.scrollLeft += parseInt(props.offset ?? "0")*100;
        }
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
        if(props.direction) {
            if(container.value.scrollTop >= container.value.scrollHeight/3) {
                container.value.scrollTop = 0.05;
            }
            else if(container.value.scrollTop <= 0.04) {
                container.value.scrollTop = container.value.scrollHeight/3-0.05;
            }
        }
        else {
            if(container.value.scrollLeft >= container.value.scrollWidth/3) {
                container.value.scrollLeft = 0.05;
            }
            else if(container.value.scrollLeft <= 0.04) {
                container.value.scrollLeft = container.value.scrollWidth/3-0.05;
            }
        }
    }

    /**onBeforeUnmount(() => {
        clearInterval(intervalId);
    });**/
</script>

<template>
    <div @scroll="scrollCheck" @mouseenter="toggleHover" @mouseleave="toggleHover" :class="'flex flex-1 flex-'+(direction ? 'col h-fit w-1/1' : 'row w-fit h-1/1')+' overflow-auto no-scrollbar'" ref="container" :id="'container'+id">
        <div :class="'flex flex-1 '+(direction ? 'h-screen flex-col' : 'w-screen flex-row')">
            <div class="flex flex-1 w-full h-full" v-for="item in inputItems" :key="item.name">
                <ProjectTile :name="item.name" :photo="'assets/'+item.photos[0]" :clickable="clickable" @click="sendData(item)"/>
            </div>
            <div class="flex flex-1 w-full h-full" v-for="item in inputItems" :key="item.name">
                <ProjectTile :name="item.name" :photo="'assets/'+item.photos[0]" :clickable="clickable" @click="sendData(item)"/>
            </div>
            <div class="flex flex-1 w-full h-full" v-for="item in inputItems" :key="item.name">
                <ProjectTile :name="item.name" :photo="'assets/'+item.photos[0]" :clickable="clickable" @click="sendData(item)"/>
            </div>
            </div>
    </div>
</template>
