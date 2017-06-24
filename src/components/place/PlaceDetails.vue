<template>
    <section class="popup place-details">
        <!--<button @click="closeMe">x</button>-->
        <!--<h1>Details of: {{place.name}}</h1>-->
        <!--{{place.tags}}-->
        <h5>Tags: 
            <place-tag v-for="(tag, idx) in place.tags" :key="idx" :tag="tag">{{place.tags}}</place-tag>
        </h5>
        <!--<button @click="requestNextPlace">Next > </button>-->
    </section>
</template>

<script>
import PlaceTag from './PlaceTag'

export default {
    name: 'place-details',
    props: ['place'],
    components:{
        PlaceTag
    },
    methods: {
        closeMe() {
            this.$emit('close');
        },
        requestNextPlace() {
            this.$emit('next');
        }
    }
}
</script>

<style scoped>
    /*.popup {
        background: gold;
        padding: 10px;
        border-radius: 1em;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 80%;
    }*/
</style>
