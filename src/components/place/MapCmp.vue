<template>
  <gmap-map :center="center" :zoom="zoom" style="width: 500px; height: 300px">
    <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
  </gmap-map>
</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import bus from '../../bus';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCry_PLFjoDuWFTJp-4ecimkVkkeMmcPU',
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input 
  }
});

export default {
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [{
        position: { lat: 10.0, lng: 10.0 }
      }, {
        position: { lat: 11.0, lng: 11.0 }
      }],
      zoom:13
    }
  },
  created() {
    bus.$on('placeSelected', (place) => {
      // console.log('map got event! place:',place);
      this.center.lat = place.lat;
      this.center.lng = place.lng;
      this.zoom = 15;
      this.markers[0].position.lat = place.lat;
      this.markers[0].position.lng = place.lng;
    })
  }
}
</script> 