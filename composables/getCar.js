const getCar = (id) =>{
    const car = ref([])
    const error = ref(null)

    const load = async () =>{
        try{
            let data = await fetch('http://localhost:3000/cars/' + id)
            if(!data.ok){
                throw Error('No data available')
            }
            car.value = await data.json()
        }
        catch(err){
            error.value = err.message
        }
    }
    return{car, error, load}
}

export default getCar