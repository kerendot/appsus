<template>
    <li class="card product book-preview">
        <h2>{{book.title}}</h2>
        <img src="http://via.placeholder.com/250x150">
        <h3>${{book.price}}</h3>
        <button @click.stop="editBook">&#9998;</button>
        <button @click.stop="deleteBook">x</button>
        <button @click.stop="addToCart">+</button>
        <button @click.stop="subtractFromCart">-</button>
    </li>
</template>

<script>
export default {
    // name: 'book-preview',
    props: ['book'],
    methods: {

        editBook() {
            this.$emit('edit');
        },
        deleteBook() {
            this.$emit('delete');
        },
        addToCart() {
            this.$emit('add');
            // this.$router.push('cart');
        },
        subtractFromCart() {
            this.$emit('subtract');
            // this.$router.push('cart');
        }
    }
}
</script>

