<script setup lang="ts">
    import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex flex-col w-screen h-full bg-bg min-h-120">
        <div class="flex flex-col w-screen h-full">
            <Header />
            <!-- FIRST "SCREEN" - intro, fun facts -->
            <div class="flex flex-1 flex-col w-screen items-center">
                <!-- Intro -->
                <div class="max-w-300 flex flex-row w-screen h-full flex-1">
                    <!-- "Profile" image -->
                    <div class="flex flex-2 justify-center items-center">
                        <div class="flex w-9/10 h-9/10 justify-center items-center">
                            <div class="min-h-35 min-w-35 w-[30vw] h-[30vw] max-w-[30vh] max-h-[30vh]">
                                <div class="overflow-clip relative h-full w-full rounded-full">
                                    <div class="absolute l-0 t-0 h-full w-full bg-green-200 brightness-80"/>
                                    <h1 class="absolute text-ui h-full w-full t-0 l-0 content-center text-[13vmin] unselectable font-semibold">KE</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- About me -->
                    <div class="flex flex-3 items-center justify-center">
                        <div class="h-6/7 w-10/11 content-center">
                            <h1 class="text-sm sm:text-base md:text-lg align-center text-ui font-bold">about me</h1>
                            <p class="justify-center text-ui text-left text-[12.4px] sm:text-sm md:text-base">Hi! My name is Kiersten Engen, and I am a software engineering student at the University of Waterloo. I have been programming for as long as I can remember: I first started coding when I was just a kid, learning how to make applets using Lua:LOVE and competing with my siblings to see who could make the best project.</p>
                        </div>
                    </div>
                </div>
                <!-- Fun Facts -->
                <div class="flex flex-col w-screen max-w-300 h-full flex-1">
                    <div class="text-sm sm:text-base md:text-lg min-h-7 h-1/7 max-h-10 w-full content-center text-ui font-bold">
                        <h1>fun facts</h1>
                    </div>
                    <div class="flex h-full w-full items-start justify-center">
                        <div class="grid gap-2 w-15/16 h-9/10 grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-4">
                            <div class="flex flex-col w-full h-full bg-neutral-600">
                                <div class="flex-4 p-3 pb-0">
                                    <div class="relative t-0 l-0 w-full h-full">
                                        <img class="absolute t-0 l-0 w-full h-full object-cover rounded-sm" src="/public/assets/frameworks/Vite.svg"/>
                                    </div>
                                </div>
                                <div class="flex h-1/2 max-h-10 sm:max-h-25 lg:max-h-33 items-center justify-center">
                                    <div class="overflow-auto flex flex-col w-16/17 h-8/9 text-left text-ui text-[12.4px] sm:text-sm md:text-base pr-2">
                                        <p class="sm:hidden">I like reading, playing games, and cooking.</p>
                                        <p class="hidden lg:inline font-bold text-lg">hobbies</p>
                                        <p class="hidden sm:inline-block">Some of my <b class="hidden sm:inline font-bold lg:font-normal">hobbies</b> include reading, learning to cook, playing volleyball or pickleball, playing video or card games, and weightlifting.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-full h-full bg-neutral-600">
                                <div class="flex-4 p-3 pb-0">
                                    <div class="relative t-0 l-0 w-full h-full">
                                        <img class="absolute t-0 l-0 w-full h-full object-cover rounded-sm" src="/public/assets/frameworks/Vite.svg"/>
                                    </div>
                                </div>
                                <div class="flex h-1/2 max-h-10 sm:max-h-25 lg:max-h-33 items-center justify-center">
                                    <div class="overflow-auto flex flex-col w-16/17 h-8/9 text-left text-ui text-[12.4px] sm:text-sm md:text-base pr-2">
                                        <p class="sm:hidden">I love making poke!</p>
                                        <p class="hidden lg:inline font-bold text-lg">favorite recipe</p>
                                        <p class="hidden sm:inline-block">One of my favorite <b class="hidden sm:inline font-bold lg:font-normal">dishes</b> to cook is poké. I love being able to customize it with my favorite toppings, like avocado, eggs, sesame seeds, and kewpie mayo. It's basically a burrito bowl combined with sushi -- two of my other favorites.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-full h-full bg-neutral-600">
                                <div class="flex-4 p-3 pb-0">
                                    <div class="relative t-0 l-0 w-full h-full">
                                        <img class="absolute t-0 l-0 w-full h-full object-cover rounded-sm" src="/public/assets/frameworks/Vite.svg"/>
                                    </div>
                                </div>
                                <div class="flex h-1/2 max-h-10 sm:max-h-25 lg:max-h-33 items-center justify-center">
                                    <div class="overflow-auto flex flex-col w-16/17 h-8/9 text-left text-ui text-[12.4px] sm:text-sm md:text-base pr-2">
                                        <p class="sm:hidden">I love sci-fi novels, like The Martian and Ender's Game.</p>
                                        <p class="hidden lg:inline font-bold text-lg">favorite book</p>
                                        <p class="hidden sm:inline-block">I've always loved reading, and while historically my favorite <b class="hidden sm:inline font-bold lg:font-normal">books</b> were always fantastical (The Hobbit, Bone), more recently sci-fi books like Ender's Game and The Martian have been my top picks.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-full h-full bg-neutral-600">
                                <div class="flex-4 p-3 pb-0 rounded-md">
                                    <div class="relative t-0 l-0 w-full h-full">
                                        <div class="absolute t-0 l-0 w-full h-full object-cover bg-lime-200 rounded-sm"/>
                                    </div>
                                </div>
                                <div class="flex h-1/2 max-h-15 sm:max-h-25 lg:max-h-33 items-center justify-center">
                                    <div class="overflow-auto flex flex-col w-16/17 h-8/9 text-left text-ui text-[12.4px] sm:text-sm md:text-base pr-2">
                                        <p class="sm:hidden">I like reading, playing games, and cooking.</p>
                                        <p class="hidden lg:inline font-bold text-lg">favorite color</p>
                                        <p class="hidden sm:inline-block">In case you couldn't tell from the vast quantity of the <b class="hidden sm:inline font-bold lg:font-normal">color</b> present on this website, green is my favorite color.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Favorite Songs -->
    <div class="flex flex-col w-screen max-h-90 min-h-70 h-[50vh] bg-bg justify-center items-center">
        <div class="flex flex-col h-9/10 w-28/30 max-w-282">
            <h1 class="text-sm sm:text-base md:text-lg min-h-7 h-1/3 max-h-30 w-full content-end text-ui font-bold text-left pb-3">What I've been listening to</h1>
            <div class="h-full w-full">
                <div class="h-full w-full grid grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <div class="flex bg-neutral-600 rounded-lg">
                    </div>
                    <div class="flex bg-neutral-600 rounded-lg"></div>
                    <div class="flex bg-neutral-600 rounded-lg"></div>
                    <div class="flex bg-neutral-600 rounded-lg"></div>
                    <div class="hidden md:flex bg-neutral-600"></div>
                    <div class="hidden md:flex bg-neutral-600"></div>
                    <div class="hidden lg:flex bg-neutral-600"></div>
                    <div class="hidden lg:flex bg-neutral-600"></div>
                </div>
            </div>
        </div>
        <div class="h-16 content-center justify-evenly w-full">
            <Header/>
        </div>
    </div>
</template>
