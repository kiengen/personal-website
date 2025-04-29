<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue';
    import Header from './components/Header.vue';
</script>

<template>
	<Header />
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="bg-white" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>
