<template>
    <div class="flex flex-col m-5 p-5 rounded-lg  w-96 h-md bg-slate-100 hover:bg-slate-200 hover:cursor-pointer"
        @click="navigate">

        <div class="text-center max-w-80 max-h-70"><img class="inline w-80 h-70 rounded-lg" :src="image" alt="CarImage">
        </div>
        <div class="text-xl mt-3 font-bold text-center">{{ title }}</div>
        <div class="tex-sm italic">{{ desc }}</div>
        <div class="mt-5 text-center"><button class=" hover:bg-blue-600  bg-blue-700 p-3 text-slate-200 rounded-lg">Add to
                cart</button></div>
    </div>
</template>

<script setup>
const { id, image, title, description } = defineProps(['id', 'image', 'title', 'description'])
//const imagePath = `/_nuxt/assets/${image}`

const navigate = () => {
    navigateTo(`/cars/${id}`)
}

const desc = description.substring(0, 100) + '...'

</script>