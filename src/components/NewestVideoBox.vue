<template>
    <div class="h-1/3 flex ">
        <div class="h-1/3 pr-1">
            <div class="relative w-[900px]">
                <img class=" object-contain hover:cursor-pointer hover:opacity-70 w-full"
                    src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
                    alt="">
                <div class=" hover:cursor-pointer absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                    <h3 class="text-3xl text-white font-bold">
                        {{threeVideos[0]?.title}}
                        <!-- {{ threeVideos[0].title }} -->
                     </h3>
                </div>
            </div>
        </div>
        <div class=" hover:cursor-pointer flex flex-col w-full space-y-1">
            <div class="h-1/2 bg-blue-200">
                <div class="relative w-full h-[286px] overflow-hidden">
                    <img class="h-full w-full object-cover hover:cursor-pointer hover:opacity-70"
                        src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
                        alt="" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800/80">
                        <h3 class=" hover:cursor-pointer text-3xl text-white font-bold">
                            {{threeVideos[1]?.title}}
                        </h3>
                    </div>
                </div>

            </div>
            <div class="h-1/2 bg-blue-500">
                <div class="relative w-full h-[286px] overflow-hidden">
                    <img class="h-full w-full object-cover hover:cursor-pointer hover:opacity-70"
                        src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
                        alt="" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800/80">
                        <h3 class="text-3xl text-white font-bold">
                            {{threeVideos[2]?.title}}
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['threeVideos'])
</script>