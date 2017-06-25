<template>
  <section class="map-cmp">
    <!--<button @click="infoMsg">test</button>-->
    <h2> Search for a place to save</h2>
    <ui-button color="orange" type="primary" @click.native="resetZoom">Reset Zoom</ui-button>
    <gmap-autocomplete class="search-input" @place_changed="setPlace">
    </gmap-autocomplete>
    <gmap-map class="map" :center="center" :zoom="zoom">
      <ui-modal slot="visible" @create="createPlace" ref="createModal">
        <div slot="header">
          <h1>Save as a new place?</h1>
        </div>
        <ui-button @click="createPlace" color="primary" icon="done" :icon-position="iconPosition" type="secondary">Yes</ui-button>
  
      </ui-modal>
  
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="markerClicked"></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>

const CENTER_DEFAULT = { lat: 32.087893, lng: 34.803038 };
const ZOOM_DEFAULT = 13;
const ZOOM_CLOSE = 18;

export default {
  props: ['places', 'selectedPlace'],
  components: {
  },
  data() {
    return {
      center: CENTER_DEFAULT,
      zoom: ZOOM_DEFAULT,
      inputLatLng: {},
      inputAddress: null,
      newPosition: null,
      iconPosition: 'left'
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
    infoMsg() {
      this.$notify.info({
        title: 'Info',
        message: 'Click the Marker to save a new place',
        offset: 100
      })
    },

    openModal(ref) {
      this.$refs[ref].open();
    },
    closeModal(ref) {
      this.$refs[ref].close();
      this.newPosition = null;
    },
    resetZoom() {
      this.center = CENTER_DEFAULT;
      this.zoom = ZOOM_DEFAULT;
    },
    setPlace(place) {
      console.log(place.formatted_address);
      this.inputLatLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }
      this.inputAddress = place.formatted_address;
      let newMarker = { position: this.inputLatLng };
      this.markers.push(newMarker);
      this.zoomTo(this.inputLatLng);
      this.infoMsg();
    },
    markerClicked(e) {
      //compute position obj from the event
      //toFixed(6) is used to ignore minor deviations
      let clickedMarkerPosition = { lat: +e.latLng.lat().toFixed(6), lng: +e.latLng.lng().toFixed(6) };
      this.zoomTo(clickedMarkerPosition);
      //check if this marker exists in the existing/saved Places (compare position)
      let placeIdx = this.places.findIndex(place => {
        //using stringify to perform deep comparison of objects props
        return JSON.stringify(place.position) === JSON.stringify(clickedMarkerPosition)
      })
      if (placeIdx === -1) {
        //converting the e object to a position object 
        this.newPosition = clickedMarkerPosition;
        this.openModal('createModal');
      }
      else{
        //expand relevant place in the list
        this.$emit('expand', placeIdx)
      }
    },
    createPlace() {
      this.$emit('create', this.newPosition, this.inputAddress);
      this.closeModal('createModal');
    },
    zoomTo(position) {
      this.center = position;
      this.zoom = ZOOM_CLOSE;
    }

  },
  watch: {
    'selectedPlace': function (place, oldPlace) {
      this.zoomTo(place.position);
    }
  }
}
</script> 

<style>
.map-cmp {
  width: 65%;
}

.search-input {
  width: 90%;
  max-width: 300px;
  margin: 10px;
}

.map {
  width: 100%;
  height: 500px;
}
</style>