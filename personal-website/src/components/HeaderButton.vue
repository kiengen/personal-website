<script setup lang="ts">
    import { ref } from 'vue';

    type buttonFunc = () => void;

    defineProps<{ msg: string
                  action: buttonFunc
                }>()
    const isDarkTheme = ref(false);
</script>

<template>
    <h1 class="" @click="console.log(typeof(action))">{{msg}}</h1>
</template>
