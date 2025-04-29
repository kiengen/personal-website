<script setup lang="ts">
    defineProps<{ msg: string
                  feather: boolean  
                }>()
</script>

<template>
    <div>
        {feather ? <vue-feather type={{msg}}></vue-feather>
        : <h1 class="bg-green-200 min-w-8 unselectable rounded-sm p-1 pl-2 pr-2 text-ui hover:cursor-pointer hover:bg-gradient-to-r hover:from-lime-300 hover:via-green-300 hover:to-cyan-400 transition duration-300 ease-in-out" @click="console.log(typeof(action))">{{msg}}</h1>}
    </div>
</template>
