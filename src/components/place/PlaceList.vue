<template>
    <section v-if="places" class="list">
        <h2>Your saved places</h2>
        <ul>
            <place-preview v-for="(place, idx) in places" 
                :key="place.id" 
                @select="selectPlace(place)" 
                @edit="editPlace(place)"
                @delete="deletePlace(place)" 
                @save="savePlace" 
                :place="place"
                :isExpanded="idx === idxToExpand">
            </place-preview>
        </ul>
    </section>
</template>

<script>
import PlaceService from '../../services/place/place.service';
import PlacePreview from './PlacePreview';

export default {
    name: 'place-list',
    props: ['places', 'idxToExpand'],
    components: {
        PlacePreview,
    },

    data() {
        return {
            selectedPlace: null,
        }
    },
    methods: {
        selectPlace(place) {
            this.$emit('select', place);
            this.selectedPlace = place;

        },
        deletePlace(place) {
            this.$emit('delete', place);
        },

        savePlace(place) {
            this.$emit('save', place);
        },
    },
}

</script>

<style scoped>
.list {
    width: 35%;
}

ul {
    list-style: none;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-flow: column wrap;
}
</style>
