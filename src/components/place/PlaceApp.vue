<template>
  <section>
    <section class="main-area">
      <map-cmp :places="places" :selectedPlace="selectedPlace" @create="createPlace" @expand="expandSelected"></map-cmp>
  
      <place-list :places="places" @select="selectPlace" @save="savePlace" @delete="deletePlace" :idxToExpand="idxToExpand">
      </place-list>
  
      <ui-modal ref="createModal">
        <div slot="header">
          <h1>Save a new place</h1>
          
        </div>
        <h3>{{newPlaceAddress}}</h3>
        <ui-textbox floating-label label="Name" placeholder="Name..." v-model="newPlaceName">
        </ui-textbox>
  
        <ui-textbox floating-label label="Tags (comma seperated)" placeholder="E.g. food, park, walking" v-model="newPlaceTags">
        </ui-textbox>
  
        <ui-button @click="savePlace" color="primary" icon="done" :icon-position="iconPosition" type="secondary">Save</ui-button>
    
      </ui-modal>
  
    </section>
  
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
    PlaceList,
  },
  data() {
    return {
      places: null,
      selectedPlace: null,
      newPlaceName: '',
      newPlaceTags: '',
      newPlacePosition: null,
      newPlaceAddress: null,
      iconPosition: 'Left',
      idxToExpand: null
    }
  },

  created() {
    PlaceService.getPlaces().then(places => {
      this.places = places;
    })
  },
  computed: {
    newPlace: function () {
      let newPlace = {
        name: this.newPlaceName,
        tags: this.newPlaceTags,
        address: this.newPlaceAddress,
        position: this.newPlacePosition
      }
      return newPlace;
    }
  },
  methods: {
    openModal(ref) {
      this.$refs[ref].open();
    },
    closeModal(ref) {
      this.$refs[ref].close();
      this.newPlacePosition = null;
       this.newPlaceAddress = null; 
    },
    createPlace(position, address) {
      this.newPlacePosition = position;
      this.newPlaceAddress = address;
      this.openModal('createModal');
    },
    selectPlace(place) {
      this.selectedPlace = place;
    },

    deletePlace(place) {
      PlaceService.deletePlace(place);
    },

    savePlace() {
      PlaceService.savePlace(this.newPlace);
      this.closeModal('createModal');
      this.newPlaceName = '';
      this.newPlaceTags = '';
      this.newPlaceAddress = '';
    },
    expandSelected(placeIdx){
      this.idxToExpand = placeIdx;
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

.main-area {
  display: flex;
  width: 98%;
}
</style>

