<template>
    <section class="book-details">
        <li>
            <h1>{{place.name}}</h1>
            <p>{{place.tags}}</p>
        </li>
    </section>
</template>

<script>
export default {
    name: 'place-details',
    props: ['place'],
    methods: {
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
