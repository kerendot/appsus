<template>
    <section class="popup place-create">
        <h1>New Place</h1>
        <label>Name:</label>
        <input type="text" v-model="name"/>
        <br/>
        <label>Tags (comma seperated):</label>
        <input type="text" v-model="tags" placeholder="example: food, park, walking"/>
        <br/>
        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
    </section>
</template>

<script>
export default {
    name: 'place-create',
    props: ['position'],
    data() {
        return {
            name:null,
            tags:null
        }
    },
    computed:{
        newPlace: function(){
            let newPlace = {
                name:this.name, 
                tags: this.tags, 
                position:this.position
            }
            return newPlace;
        }
    },
    methods: {
        save() {
            this.$emit('save', this.newPlace);
        },
        cancel() {
            this.$emit('cancel');
        }
    }
}
</script>

<style  lang="scss"  scoped>
.popup {
    background: gold;
    padding: 10px;
    border-radius: 1em;
    text-align: center;
    position: absolute;
    z-index: 99;
    left: 40%;
    top: 50%;
    
    input{
        width: 300px;
    }
}
</style>