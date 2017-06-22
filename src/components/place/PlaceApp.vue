<template>
  <section>
    <h1> Places </h1>
    <map-cmp></map-cmp>
    <place-list></place-list>
  </section>
</template>
 
 <script>
 import MapCmp from './MapCmp';
 import PlaceList from './PlaceList';
 export default {
   name:'place-app',
    components:{
        MapCmp,
        PlaceList
    },
 }
 </script>

