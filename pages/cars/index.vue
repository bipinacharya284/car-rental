<script >
definePageMeta({
    NuxtLayout: "default"
})
export default {
    setup() {
        const { cars, error, load } = getCars()
        load()
        // console.log(cars.value.id)
        return { cars, error }
    }
}


</script>
<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="cars" class="flex flex-wrap">
        <div v-for="car in cars" :key="car.id">
            <Card :id="car.id" :image="car.image" :title="car.title" :description="car.description" />
        </div>
    </div>

    <div v-else>Loading...</div>
</template>


