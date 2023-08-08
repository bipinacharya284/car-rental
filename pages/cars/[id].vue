<script >

 definePageMeta({
        NuxtLayout: "default"
    })
    export default{   
        // const id =1 
        setup() {
            const {car, error, load} = getCar(1)
            load()
            // console.log(cars.value.id)
            return{ car, error}
        }
    }

    


</script>


<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="car">
        <!-- Available -->
        <CardDesc :id="car.id" :image="car.image" :title="car.title" :description="car.description"/>
        
    </div>
    <div v-else>Loading...</div>
</template>

