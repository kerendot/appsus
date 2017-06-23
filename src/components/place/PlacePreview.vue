<template>
    <section class="place-preview">
        <li>
            <h1>{{place.name}}</h1>
            <!--<p>{{place.tags}}</p>-->
            <button @click.stop="editPlace">&#9998;</button>
            <button @click.stop="deletePlace">x</button>
        </li>
    </section>
</template>

<script>
export default {
    name: 'place-preview',
    props: ['place'],
    methods: {
        editPlace() {
            this.$emit('edit');
        },
        deletePlace() {
            this.$emit('delete');
        },
    }

}
</script>

<style scoped>
li {
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>
