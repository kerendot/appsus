<template>
    <section v-if="places">
        <div>
            <h2>You have {{places.length}} saved places</h2>
    
            <place-details v-if="selectedPlace" @close="resetSelected" @next="selectNext" :place="selectedPlace">
            </place-details>
            <place-edit v-if="editedPlace || isCreateMode" :place="editedPlace" @save="savePlace" @cancel="closeEdit">
            </place-edit>
            <button @click="isCreateMode=true">Add place</button>
            <ul>
                <place-preview v-for="place in places" :key="place.id" @click.native="selectPlace(place)" @edit="editPlace(place)" @delete="deletePlace(place)" :place="place">
                </place-preview>
            </ul>
        </div>
    </section>
</template>

<script>
import PlaceService from '../../services/place/place.service';
import PlaceDetails from './PlaceDetails';
import PlacePreview from './PlacePreview';
import PlaceEdit from './PlaceEdit';
import bus from '../../bus';

export default {
    name: 'place-list',
    props: ['places'],
    components: {
        PlacePreview,
        PlaceEdit,
        PlaceDetails
    },

    data() {
        return {
            editedPlace: null,
            isCreateMode: false,
           selectedPlace: null
        }
    },
    methods: {
        selectPlace(place) {
            this.$emit('select', place);
            this.selectedPlace = place;

        },
        selectNext() {
            this.selectedPlace = PlaceService.getNext(this.selectedPlace);
        },
        resetSelected() {
            this.selectedPlace = null;
        },
        editPlace(place) {
            this.editedPlace = place;
        },
        deletePlace(place) {
            this.$emit('delete', place);
        },

        savePlace(place) {
            this.$emit('save', place);
            this.closeEdit();
        },
        closeEdit() {
            this.editedPlace = null;
            this.isCreateMode = false;
        },
    },
    // watch: {
    //     'selectedPlace': function (selectedPlace) {
    //         console.log('selected Changed');
    //         this.selectedPlaceForDetails = selectedPlace;
    //     }
    // }
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
