<template>
<section>
  <button @click="resetZoom">Reset Zoom</button>
    <gmap-map :center="center" :zoom="zoom" style="width: 800px; height: 500px">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import bus from '../../bus';
import PlaceService from '../../services/place/place.service';

const CENTER_DEFAULT = { lat: 32.087893, lng: 34.803038 };
const ZOOM_DEFAULT = 13;
const ZOOM_CLOSE = 18;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCry_PLFjoDuWFTJp-4ecimkVkkeMmcPU',
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input 
  }
});

export default {
  props: ['places', 'selectedPlace'],
  data() {
    return {
      center: CENTER_DEFAULT,
      zoom: ZOOM_DEFAULT,
      selectedMark: null
    }
  },
  computed: {
    //function to compute markers from places
    markers: function () {
      if (this.places) {
        let markers = [];
        markers = this.places.map(place => {
          return { position: { lat: place.lat, lng: place.lng } }
        })
        console.log('markers computed: ',markers)
        return markers;
      }
    },
    // selectedMark: function(){
    //     // function to compute a marker from a place
    //     console.log('selectedMark is computing!!: ');
    //     if (this.selectedPlace) {
    //       return { position: { lat: this.selectedPlace.lat, lng: selectedPlace.lng } }
    //   }
    // }

  },
  methods: {
    resetZoom(){
      this.center = CENTER_DEFAULT;
      this.zoom = ZOOM_DEFAULT;
    }
  },
  watch: {
    'selectedPlace': function (place, oldPlace) {
      this.selectedMark = { position: { lat: place.lat, lng: place.lng } }
      this.center = this.selectedMark.position;
      this.zoom = ZOOM_CLOSE;
    }
  }
}
</script> 