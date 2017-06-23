<template>
    <section class="marker-modal">

            <h1>I am a marker modal</h1>
             <h2>Save a new Place?</h2>

            <button @click="createPlace">Create</button>
            <button @click="close">x</button>

    </section>
</template>

<script>
export default {
    name: 'marker-modal',
    props: [],
    methods: {
        createPlace(){
            this.$emit('create')
        },
        close(){
            console.log('cancel')
            this.$emit('close')
        }

    }

}
</script>

<style scoped>
  .marker-modal{
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
   position: absolute;
   background: #fff;
   border: 1px solid black;
   border-radius: 5px;
}
</style>
