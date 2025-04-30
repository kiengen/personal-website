<script setup lang="ts">
    defineProps<{ name?: string,
                  photo?: string,
                }>()
</script>

<template>
    <div class="object-cover flex m-2 p-1 rounded-md border-2 border-green-400 border-ui w-[30vw] min-w-30 max-w-60 hover:scale-105 transition duration-200">
        <div class="group relative w-full h-full">
            <img class="absolute w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:filter-none" :src="photo"/>
            <div class="absolute w-full h-full bg-gradient-to-r bg-green-300 opacity-40 group-hover:opacity-0 transition"></div>
            <div class="bg-a display-flex w-full h-full">
                <p class="flex bg-black text-white justify-center min-w-1/2">{{ name }}</p>
            </div>
        </div>
    </div>
</template>
