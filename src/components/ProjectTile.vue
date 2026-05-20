<script setup lang="ts">
    defineProps<{ name?: string,
                  photo?: string,
                  clickable?: boolean,
                }>()
</script>

<template>
    <div :class="'object-cover flex mr-2 ml-2 min-w-50 w-fit rounded-lg border-[0.5px] border-ui overflow-hidden bg-stone-300 h-8/9 w-8/9 z-3 transition duration-200'+(clickable ? ' hover:cursor-pointer' : '')">
        <div class="rounded-lg group relative w-full h-full aspect-3/2">
            <img class="rounded-lg absolute w-full h-full object-cover brightness-70 group-hover:brightness-100 group-hover:filter-none transition-all duration-200 overflow-hidden" :src="photo"/>
            <div class="opacity-0 absolute bottom-2.5 display-flex h-4 group-hover:opacity-100">
                <p class="flex unselectable rounded-sm ml-0.5 bg-black text-white justify-center min-w-1/2 min-w-25">{{ name }}</p>
            </div>
            <div class="group absolute bg-black rounded-lg h-full w-full -top-21/20 group-hover:-top-0 transition-all duration-400 ease-out z-1">
            </div>
        </div>
    </div>
</template>
