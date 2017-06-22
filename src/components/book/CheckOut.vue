<template>
    <section class="popup">
        <button @click="closeMe">x</button>
        <h1>Purchase total price: {{totalPrice}} $</h1>
    </section>
</template>

<script>
export default {
    name: 'check-out',
    props: ['totalPrice'],
    methods: {
        closeMe() {
            this.$emit('close');
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