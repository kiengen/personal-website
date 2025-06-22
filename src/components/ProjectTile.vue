<script setup lang="ts">
    defineProps<{ name?: string,
                  photo?: string,
                  clickable?: boolean,
                }>()
</script>

<template>
    <div :class="'object-cover flex mr-2 ml-2 p-0.5 min-w-50 w-fit rounded-md border-2 border-ui h-8/9 w-8/9 transition duration-200 '+(clickable ? 'hover:cursor-pointer hover:scale-105' : '')">
        <div class="group relative w-full h-full aspect-3/2">
            <img class="absolute w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:filter-none" :src="photo"/>
            <div class="absolute w-full h-full bg-gradient-to-r bg-green-300 opacity-40 group-hover:opacity-0 transition"></div>
            <div class="opacity-0 absolute bottom-2.5 display-flex h-4 group-hover:opacity-100">
                <p class="flex unselectable rounded-sm ml-0.5 bg-black text-white justify-center min-w-1/2 min-w-25">{{ name }}</p>
            </div>
        </div>
    </div>
</template>
