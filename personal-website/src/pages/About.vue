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
                    <div class="flex h-full w-full items-center justify-center">
                        <div class="grid gap-2 w-15/16 h-9/10 bg-red-500 grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-4">
                            <div class="flex flex-col w-full h-full bg-blue-200">
                                <div class="flex-4 bg-blue-400"></div>
                                <div class="flex h-1/2 max-h-10 sm:max-h-20 lg:max-h-45 bg-blue-300 items-center justify-center">
                                    <div class="overflow-auto flex flex-col w-16/17 h-8/9 bg-red-200 text-left text-ui text-xs sm:text-s lg:text-base">
                                        <p class="sm:hidden">I like reading, playing games, and cooking.</p>
                                        <p class="hidden lg:inline font-bold text-lg">hobbies</p>
                                        <p class="hidden sm:inline-block">Some of my <b class="hidden sm:inline font-bold lg:font-normal">hobbies</b> include reading, learning to cook, playing volleyball or pickleball, playing video or card games, and weightlifting.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-full bg-green-200"></div>
                            <div class="w-full h-full bg-yellow-200"></div>
                            <div class="w-full h-full bg-violet-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hidden flex flex-col w-screen h-full bg-bg min-h-205 md:min-h-140">
        <div class="w-full h-screen flex flex-col">
            <Header />
            <!-- FIRST "SCREEN" - intro, fun facts -->
            <div class="flex h-full justify-center">
                <div class="flex flex-col w-full h-full items-center justify-center min-h-190 md:min-h-120 max-w-325">
                    <!-- Intro -->
                    <div class="flex flex-row h-1/2 w-6/7">
                        <!-- "Profile" image -->
                        <div class="flex flex-col w-1/2 h-full aspect-square justify-center items-center">
                            <div class="overflow-clip relative w-[38vw] h-[38vw] max-w-[35vh] max-h-[35vh] rounded-full">
                                <div class="absolute t-0 l-0 w-full h-full bg-bg content-center font-semibold text-9xl bg-lime-200 brightness-80"/>
                                <h1 class="font-semibold absolute z-2 text-white text-[20vmin] w-full h-full content-center unselectable">KE</h1>
                            </div>
                        </div>
                        <!-- about me section -->
                        <div class="pl-2 flex flex-col w-1/2 h-full justify-center">
                            <h1 class="text-lg font-bold text-ui">about me</h1>
                            <p class="text-left text-ui">Hi! My name is Kiersten Engen, and I am a software engineering student at the University of Waterloo. I have been programming for as long as I can remember: I first started coding when I was just a kid, learning how to make applets using Lua:LOVE and competing with my siblings to see who could make the best project.</p>
                        </div>
                    </div>
                    <!-- Fun Facts -->
                    <div class="bg-a flex flex-col w-6/7 h-4/11">
                        <h1 class="text-lg font-bold justify-center h-8 content-center w-full text-ui">fun facts</h1>
                        <div class="w-full h-17/20 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 md:min-h-70 min-h-70">
                            <!-- Fun fact #1 (Hobbies) -->
                            <div class="flex flex-1 justify-center items-center">
                                <div class="flex h-9/10 w-9/10 bg-neutral-600 flex-col max-w-80">
                                    <div class="flex flex-2 bg-lime-200 brightness-85"></div>
                                    <p class="md:hidden flex flex-1 text-ui text-center justify-center items-center p-1">I love cooking, reading, and playing different games</p>
                                    <div class="md:flex flex-col hidden flex-1 text-ui justify-center p-3">
                                        <p class="lg:flex hidden min-h-8 text-lg text-ui text-center justify-center items-center font-bold">hobbies</p>
                                        <p class="block flex-1 text-md text-ui justify-center items-center text-left">Some of my <b class="lg:font-normal">hobbies</b> include reading, learning to cook, playing volleyball or pickleball, playing video or card games, and weightlifting.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Fun fact #2 (Recipe) -->
                            <div class="flex flex-1 justify-center items-center">
                                <div class="flex h-9/10 w-9/10 bg-neutral-600 flex-col max-w-80">
                                    <div class="flex flex-2 bg-lime-200 brightness-85"></div>
                                    <p class="md:hidden flex flex-1 text-ui text-center justify-center items-center p-1">I love poke</p>
                                    <div class="md:flex flex-col hidden flex-1 text-ui justify-center p-3">
                                        <p class="lg:flex hidden min-h-8 text-lg text-ui text-center justify-center items-center font-bold">favorite recipe</p>
                                        <p class="block flex-1 text-md text-ui justify-center items-center text-left">My favorite <b class="lg:font-normal">recipe</b> to make at the moment is poke! I love poke bowls; it's like a blend of burrito bowls and sushi -- two of my other favorite foods.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Fun fact #3 (idk) -->
                            <div class="flex flex-1 justify-center items-center">
                                <div class="flex h-9/10 w-9/10 bg-neutral-600 flex-col max-w-80">
                                    <div class="flex flex-2 bg-lime-200 brightness-85"></div>
                                    <p class="md:hidden flex flex-1 text-ui text-center justify-center items-center">I started "programming" on Scratch in 2013</p>
                                    <div class="md:flex flex-col hidden flex-1 text-ui justify-center p-3">
                                        <p class="lg:flex hidden min-h-8 text-lg text-ui text-center justify-center items-center font-bold">humble beginnings</p>
                                        <p class="block flex-1 text-ui justify-center items-center text-left">Before I formally learned to code, I used to make projects on <b class="lg:font-normal">Scratch</b>. I made my first (public) project on Scratch when I was 6 years old.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Fun fact #4 (Green) -->
                            <div class="flex flex-1 justify-center items-center">
                                <div class="flex h-9/10 w-9/10 bg-neutral-600 flex-col max-w-80">
                                    <div class="flex flex-2 bg-lime-200 brightness-85"></div>
                                    <p class="md:hidden flex flex-1 text-ui text-center justify-center items-center">My favorite color is green</p>
                                    <div class="md:flex flex-col hidden flex-1 text-ui justify-center p-3">
                                        <p class="lg:flex hidden min-h-8 text-lg text-ui text-center justify-center items-center font-bold">favorite color</p>
                                        <p class="block flex-1 text-ui justify-center items-center text-left">My favorite <b class="lg:font-normal">color</b> (in case you couldn't tell from how much I've been using it on this website) is green.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
