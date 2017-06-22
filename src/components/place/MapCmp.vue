<template>
  <section>
    <button @click="resetZoom">Reset Zoom</button>
    <gmap-autocomplete  @place_changed="setPlace">
      </gmap-autocomplete>
      {{inputLatLng.lat}},
    {{inputLatLng.lng}}
    
    <gmap-map class="map" :center="center" :zoom="zoom" style="width: 800px; height: 500px">
      <marker-modal slot="visible" v-if="newPosition"
        @create="createPlace"
        @close="closeModal"
      ></marker-modal>
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="markerClicked"></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
import MarkerModal from './MarkerModal';

const CENTER_DEFAULT = { lat: 32.087893, lng: 34.803038 };
const ZOOM_DEFAULT = 13;
const ZOOM_CLOSE = 18;

export default {
  props: ['places', 'selectedPlace'],
  components:{
    MarkerModal
  },
  data() {
    return {
      center: CENTER_DEFAULT,
      zoom: ZOOM_DEFAULT,
      selectedMark: null,
      inputLatLng: {},
      newPosition: null
    }
  },
  computed: {
    //function to compute markers from places
    markers: function () {
      if (this.places) {
        let markers = [];
        markers = this.places.map(place => {
          return { position: { lat: place.position.lat, lng: place.position.lng } }
        })
        // console.log('markers computed: ', markers)
        return markers;
      }
    },
  },
  methods: {
    resetZoom() {
      this.center = CENTER_DEFAULT;
      this.zoom = ZOOM_DEFAULT;
    },
     setPlace(place) {
        this.inputLatLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        let newMarker = {position:this.inputLatLng};
        this.markers.push(newMarker);
        this.center = this.inputLatLng;
        this.zoom = ZOOM_CLOSE;
      },
      markerClicked(e){
        //check if this marker exists in the existing/saved Places (compare lng and lat)
        //toFixed(5) is used to take into account minor deviations
        let placeIdx = this.places.findIndex(place => {
          return place.position.lat.toFixed(5) === e.latLng.lat().toFixed(5) && place.position.lng.toFixed(5) === e.latLng.lng().toFixed(5) 
        })
        if (placeIdx === -1){
          //converting the e object to a position object 
          this.newPosition = {lat: +e.latLng.lat().toFixed(5), lng: +e.latLng.lng().toFixed(5)}
        }
      },
      createPlace(){
        console.log('send create emit to app')
        this.$emit('create',this.newPosition);
        this.closeModal();

      },
      closeModal(){
        this.newPosition = false;
      }

  },
  watch: {
    'selectedPlace': function (place, oldPlace) {
      this.selectedMark = { position: place.position }
      this.center = this.selectedMark.position;
      this.zoom = ZOOM_CLOSE;
    }
  }
}
</script> 

<style>
/*
  .marker-modal{
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
   position: absolute;
   background: #fff;
   border: 1px solid black;
   border-radius: 5px;
   }*/

</style>