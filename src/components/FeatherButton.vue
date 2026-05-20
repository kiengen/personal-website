<script setup lang="ts">
    defineProps<{ iconName?: string,
                  strokeWidth?: string,
                  size?: string,
                  clickFunc?: string,
                  href?: string,
                }>()
</script>

<template>
    <a target="_blank" :href="href" class="group flex r-full min-h-8.5 min-w-10.5 border-white unselectable hover:cursor-pointer hover:bg-gradient-to-r hover:from-green-300 hover:font-semibold hover:text-bg hover:to-cyan-400 hover:scale-110 hover:border-none transition-all duration-200 justify-center">
        <vue-feather :type="iconName" :stroke-width="strokeWidth" :size="size" class=" unselectable text-ui content-center group-hover:font-semibold group-hover:text-bg transition-all duration-200" :@click="clickFunc"/>
    </a>
</template>