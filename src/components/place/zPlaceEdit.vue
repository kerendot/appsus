<template>
    <section class="popup place-edit">
        <!--<h1>Edit: {{place.name}}</h1>
            <label>Name:</label>
            <input type="text" v-model="placeToEdit.name" />
            <label>Tags:</label>
            <input type="text" v-model="placeToEdit.tags" />
            <button @click="save">Save</button>
            <button @click="cancel">Cancel</button>-->
    
        <ui-modal ref="modal5">
            <div slot="header">
                <h1>Edit: {{place.name}}</h1>
            </div>
    
            Hey, some
            <b>nice</b> text here.
        </ui-modal>
    
    </section>
</template>

<script>
export default {
    name: 'place-edit',
    props: ['place'],
    data() {
        return {
            placeToEdit: null
        }
    },
    created() {
       
        // this.$refs['modal5'].open();
        this.placeToEdit = Object.assign({}, this.place)
    },
    methods: {
        save() {
            this.$emit('save', this.placeToEdit);
        },
        cancel() {
            this.$emit('cancel');
        },


    },
    
}
</script>

<style scoped>
.popup {
    background: gold;
    padding: 10px;
    border-radius: 1em;
    text-align: center;
    position: absolute;
    left: 40%;
    top: 50%;
}
</style>