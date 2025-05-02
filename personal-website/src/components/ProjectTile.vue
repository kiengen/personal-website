<script setup lang="ts">
    defineProps<{ name?: string,
                  photo?: string,
                  clickable?: boolean,
                }>()
</script>

<template>
    <div v-if="clickable" class="object-cover flex m-2 p-1 rounded-md border-2 bg-a border-ui w-[30vw] min-w-30 max-w-60 hover:scale-105 transition duration-200">
        <div class="group relative w-full h-full">
            <img class="absolute w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:filter-none" :src="photo"/>
            <div class="absolute w-full h-full bg-gradient-to-r bg-green-300 opacity-40 group-hover:opacity-0 transition"></div>
            <div class="opacity-0 absolute bottom-2.5 display-flex h-4 group-hover:opacity-100">
                <p class="flex unselectable rounded-sm ml-0.5 bg-black text-white justify-center min-w-1/2 min-w-25">{{ name }}</p>
            </div>
        </div>
    </div>
</template>
