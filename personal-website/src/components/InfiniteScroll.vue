<script setup lang="ts">
    import { onMounted, onBeforeUnmount } from "vue";

    defineProps<{ inputItems?: Array<{name: string, photo: string}>,
                }>()
    
    let intervalId = 0;

    onMounted(() => {
        intervalId = setInterval(() => {
            const container = document.getElementById("container") as HTMLElement;
            container.scrollLeft += 1;
            if(container.scrollLeft >= container.scrollWidth/3) {
                container.scrollLeft = 0;
                console.log("hi");
            }
        }, 50);
    });

    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
</script>

<template>
    <div class="flex flex-1 flex-row w-full bg-ui h-20 overflow-y-auto no-scrollbar" ref="container" id="container">
        <div v-for="item in inputItems" :key="item.name">
            {{item.name}}
        </div>
        <div v-for="item in inputItems" :key="item.name">
            {{item.name}}
        </div>
        <div v-for="item in inputItems" :key="item.name">
            {{item.name}}
        </div>
    </div>
</template>
