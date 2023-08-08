const getCars = () =>{
    const cars = ref([])
    const error = ref(null)

    const load = async () =>{
        try{
            let data = await fetch('http://localhost:3000/cars')
            if(!data.ok){
                throw Error('No data available')
            }
            cars.value = await data.json()
        }
        catch(err){
            error.value = err.message
        }
    }
    return{cars, error, load}
}

export default getCars