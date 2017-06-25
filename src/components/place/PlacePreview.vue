<template>
    <section class="place-preview">
        <li>
            <ui-collapsible id="test" @open="selectPlace" :title="place.name" :open="isExpanded">
                <h4>{{place.address}}</h4>
               
                <place-details :place="place">
                </place-details>
    
                <ui-icon-button @click.stop="deletePlace" icon="delete" tooltip="Delete" tooltip-position="top center"></ui-icon-button>
                <ui-icon-button @click.stop="editPlace" icon="edit" tooltip="Edit" tooltip-position="top center"></ui-icon-button>
    
                <ui-modal ref="editModal">
                    <div slot="header">
                        <h1>Edit Saved Place: {{place.name}}</h1>
                    </div>
    
                    <ui-textbox floating-label label="Name" placeholder="Enter your name" v-if="editMode" v-model="placeToEdit.name"></ui-textbox>
    
                    <ui-textbox floating-label label="Tags (comma seperated)" placeholder="Enter comma seperated tags" v-if="editMode" v-model="placeToEdit.tags"></ui-textbox>
    
                    <ui-button @click="save" color="primary" icon="done" :icon-position="iconPosition" type="secondary">Apply</ui-button>
                    <!--<ui-button @click="cancel" color="orange" icon="delete" :icon-position="iconPosition" type="secondary">Dismiss</ui-button>-->
    
                </ui-modal>
    
            </ui-collapsible>
    
        </li>
    </section>
</template>

<script>
import PlaceDetails from './PlaceDetails';

export default {
    name: 'place-preview',
    props: ['place','isExpanded'],
    components: {
        PlaceDetails,
    },
    data() {
        return {
            editMode: false,
            placeToEdit: null,
            iconPosition: 'Left'
        }
    },
    // created(){
    //     this.isExpanded = (this.idxToExpand === this.place.id);
    // },
    // computed: {
    //     isExpanded: () => {
    //         if(this.place)
    //         return this.idxToExpand === this.place[id];
    //     }
    // },
    methods: {
        openModal(ref) {
            this.$refs[ref].open();
        },
        closeModal(ref) {
            this.$refs[ref].close();
            this.editMode = false;
        },
        editPlace() {
            this.placeToEdit = JSON.parse(JSON.stringify(this.place));
            this.placeToEdit.tags = this.placeToEdit.tags.join(', ');
            this.editMode = true;
            this.openModal('editModal');
        },
        deletePlace() {
            this.$emit('delete');
        },
        selectPlace() {
            this.$emit('select');
        },
        save() {
            this.closeModal('editModal');
            this.$emit('save', this.placeToEdit);
        },
        cancel() {
            this.closeModal('editModal');
        },
    }

}
</script>

<style scoped>

</style>
