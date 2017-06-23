<template>
  <section class="map-cmp">
    <button @click="resetZoom">Reset Zoom</button>
    <gmap-autocomplete class="search-input" @place_changed="setPlace">
      </gmap-autocomplete>
    <gmap-map class="map" :center="center" :zoom="zoom" style="width: 100%; height: 500px">
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
        this.zoomTo(this.inputLatLng)
        // this.center = this.inputLatLng;
        // this.zoom = ZOOM_CLOSE;
      },
      markerClicked(e){
        //compute position obj from the event
         //toFixed(6) is used to ignore minor deviations
        let clickedMarkerPosition = {lat: +e.latLng.lat().toFixed(6), lng: +e.latLng.lng().toFixed(6)};
        this.zoomTo(clickedMarkerPosition);
        //check if this marker exists in the existing/saved Places (compare position)
        let placeIdx = this.places.findIndex(place => {
           //using stringify to perform deep comparison of objects props
          return JSON.stringify(place.position) === JSON.stringify(clickedMarkerPosition) 
        })
        if (placeIdx === -1){
          //converting the e object to a position object 
          this.newPosition = clickedMarkerPosition;
        }
      },
      createPlace(){
        this.$emit('create',this.newPosition);
        this.closeModal();

      },
      closeModal(){
        this.newPosition = false;
      },
      zoomTo(position){
        this.center = position;
        this.zoom = ZOOM_CLOSE;
      }

  },
  watch: {
    'selectedPlace': function (place, oldPlace) {
      this.zoomTo(place.position);
      // this.center = place.position;
      // this.zoom = ZOOM_CLOSE;
    }
  }
}
</script> 

<style>
.map-cmp{
  width: 800px;
}
.search-input{
  width: 90%;
  max-width: 300px;
}

</style>