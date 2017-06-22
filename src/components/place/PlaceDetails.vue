<template>
    <section class="popup place-details">
        <button @click="closeMe">x</button>
        <h1>Details of: {{place.name}}</h1>
        <h3>${{place.tags}}</h3>
        <button @click="requestNextPlace">Next > </button>
    </section>
</template>

<script>
export default {
    name: 'place-details',
    props: ['place'],
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
