<template>
  <section>
    <h1> Places </h1>
  
    <map-cmp :places="places" :selectedPlace="selectedPlace" @create="createPlace"></map-cmp>
    <place-create v-if="newPlacePosition" :position="this.newPlacePosition" @save="savePlace" @cancel="closeCreate">
    </place-create>
    <place-list :places="places" @select="selectPlace" @save="savePlace" @delete="deletePlace">
    </place-list>
  
  </section>
</template>
 
 <script>


import PlaceService from '../../services/place/place.service';
import MapCmp from './MapCmp';
import PlaceList from './PlaceList';
import PlaceCreate from './PlaceCreate';

export default {
  name: 'place-app',
  components: {
    MapCmp,
    PlaceList,
    PlaceCreate
  },
  data() {
    return {
      places: null,
      selectedPlace: null,
      newPlacePosition: null

    }
  },

  created() {
    PlaceService.getPlaces().then(places => {
      this.places = places;
    })
  },
  methods: {
    createPlace(position) {
      this.newPlacePosition = position;
    },
    selectPlace(place) {
      this.selectedPlace = place;
    },

    deletePlace(place) {
      PlaceService.deletePlace(place);
    },

    savePlace(place) {
      PlaceService.savePlace(place);
      this.newPlacePosition = null;
      this.closeCreate();
    },
    closeCreate() {
      this.newPlacePosition = null;
    },
  }
}
</script>

