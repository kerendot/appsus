<template>
  <section>
    <h1> Places </h1>
    <map-cmp :places="places" :selectedPlace="selectedPlace"></map-cmp>
    <place-list :places="places" 
      @select="selectPlace" 
      @save="savePlace" 
      @delete="deletePlace">
    </place-list>
  
  </section>
</template>
 
 <script>
import PlaceService from '../../services/place/place.service';
import MapCmp from './MapCmp';
import PlaceList from './PlaceList';
export default {
  name: 'place-app',
  components: {
    MapCmp,
    PlaceList
  },
  data() {
    return {
      places: null,
      selectedPlace: null
    }
  },

  created() {
    PlaceService.getPlaces().then(places => {
      this.places = places;
    })
  },
  methods: {
    selectPlace(place) {
      this.selectedPlace = place;
    },

    deletePlace(place) {
      PlaceService.deletePlace(place);
    },

    savePlace(place) {
      PlaceService.savePlace(place);
    },
  }
}
</script>

