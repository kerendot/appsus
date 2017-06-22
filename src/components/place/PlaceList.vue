<template>
    <section v-if="places">
        <div>
            <h2>You have {{places.length}} saved places</h2>
            <!--<button @click="isCreateMode=true">Add new place</button>-->
            <!--<filter-book @filter="setFilter">
            </filter-book>-->
            <!--<book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
            </book-details>-->
            <!--<book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook" @cancel="closeEdit">
            </book-edit>-->
            <ul>
                <place-details v-for="place in places" 
                :key="place.id"
                @click.native="selectPlace(place)"  
                :place="place">
                </place-details>
            </ul>
        </div>
    </section>
</template>

<script>
import PlaceService from '../../services/place/place.service';
import PlaceDetails from './PlaceDetails';
import bus from '../../bus';

export default {
    name: 'place-list',
    components: {
        PlaceDetails
    },
    created() {
        PlaceService.getPlaces().then(places => {
            this.places = places;
        })
    },
    data() {
        return {
            places: null,
            selectedPlace: null,
            editedPlace: null,
            isCreateMode: false
        }
    },
    methods: {
        selectPlace(place) {
            this.selectedPlace = place;
            bus.$emit('placeSelected',this.selectedPlace);

        },
        resetSelected() {
            this.selectedPlace = null;
        },
        editPlace(place) {
            console.log('Editing the place', place)
            this.editedPlace = place;
        },
        deletePlace(place) {
            PlaceService.deletePlace(place);
        },

        savePlace(place) {
            PlaceService.savePlace(place);
            this.closeEdit();
        }
    }
}

</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}


</style>
