<template>
  <nav class="">
    <div >
      <ul class=" py-4 flex justify-center  mt-2 space-x-4">
        <li v-for="navList in navLists" :key="navList.id"><NuxtLink :to="navList.link"> <span class= "py-2 px-3 text-slate-900 rounded-sm hover:bg-slate-900 hover:text-slate-100">{{ navList.name }} </span></NuxtLink></li>
      </ul>   
    </div>

  </nav>
</template>

<script >
export default {
  data(){
    return{
     navLists:[
      {'id':1, 'name':"Dashboard", 'link':'/'},
      {'id':2, 'name':"Cars", 'link':'/cars'},
      {'id':3, 'name':"Cart", 'link':'/cart'},
      {'id':4, 'name':"Login", 'link':'/login'},

     ],
    }
  },
  

 
}

</script>