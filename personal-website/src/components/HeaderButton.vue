<script setup lang="ts">
    defineProps<{ msg?: string,
                }>()
</script>

<template>
    <h1 class="min-w-8 items-center unselectable rounded-sm p-1 pl-2 pr-2 text-ui hover:cursor-pointer hover:bg-gradient-to-r hover:from-green-300 hover:to-cyan-400 hover:font-semibold hover:text-bg hover:scale-110 transition-all duration-200">{{msg}}</h1>
</template>
