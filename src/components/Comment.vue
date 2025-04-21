<script setup lang="ts">
import SubComment from './SubComment.vue';

</script>

<template>
    <div>
        <div class="h-1/3">
            <div class="flex flex-col ">
                <div class="flex space-x-5">
                    <img class="w-14 h-14 rounded-full" src="https://avatar.iran.liara.run/public/boy?username=Ash"
                        alt="">
                    <div>
                        <p class="text-xl ">cirkovic55</p>
                        <p class="text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora
                            nesciunt?
                            Cupiditate ratione nihil, aut accusamus, repudiandae animi repellat dolor placeat ea,
                            nostrum
                            reiciendis illum iste magni impedit cumque incidunt iusto. Voluptas libero, delectus, illo
                            amet
                            impedit minima itaque ad, debitis tenetur iusto tempore! Odio temporibus itaque excepturi ad
                            suscipit!</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="pr-10 ">
                        <button class="px-2 text-xl hover:cursor-pointer hover:text-black">Reply</button>
                    </div>
                    <button>show</button>
                </div>

            </div>

            <div class=" pl-30 pt-6">
                <SubComment />
                <SubComment />
                <SubComment />
            </div>
        </div>
    </div>
</template>