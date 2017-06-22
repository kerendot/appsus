<template>
    <section class="popup book-details">
        <button @click="closeMe">x</button>
        <h1>Details of: {{book.title}}</h1>
        <img src="http://via.placeholder.com/250x150">
        <h3>${{book.price}}</h3>
        <p>{{book.description}}</p>
        <button @click="requestNextBook">Next > </button>
    </section>
</template>

<script>
export default {
    name: 'book-details',
    props: ['book'],
    methods: {
        closeMe() {
            console.log('close me!');
            this.$emit('close');
        },
        requestNextBook() {
            console.log('Requesting Next');
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
