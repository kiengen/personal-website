<script setup lang="ts">
    defineProps<{ iconName?: string,
                  strokeWidth?: string,
                  size?: string,
                  clickFunc?: string,
                }>()
</script>

<template>
    <vue-feather :type="iconName" :stroke-width="strokeWidth" :size="size" class="min-w-8 unselectable p-1 pl-2 pr-2 text-ui hover:cursor-pointer hover:bg-gradient-to-r hover:from-green-300 hover:to-cyan-400 hover:font-semibold hover:text-bg hover:scale-115 transition-all duration-200" :@click="clickFunc"/>
</template>
