<template>
    <section v-if="bookToShow" class="popup book-details">
        <button @click="closeMe">x</button>
        <h1>Details of: {{bookToShow.title}}</h1>
        <img src="http://via.placeholder.com/250x150">
        <h3>${{bookToShow.price}}</h3>
        <p>{{bookToShow.description}}</p>
        <button @click="requestNextBook">Next > </button>
    </section>
</template>

<script>
import BookService from '../../services/book/book.service';
export default {
    name: 'book-details',
    props: ['book'],
    data() {
        return {
            bookToShow: null,
            isModalMode: this.book !== undefined
        }
    },
    created() {
        const bookId = +this.$route.params.bookId;
        if (bookId) {
            this.getBook(bookId);
        } else {
            this.bookToShow = this.book;
        }
    },
    methods: {
        getBook(bookId) {
            BookService.getBookById(bookId)
                .then(book => {
                    this.bookToShow = book;
                    console.log(book)
                })
        },
        closeMe() {
            if (this.isModalMode) this.$emit('close');
            else this.$router.push('/book');
        },
        requestNextBook() {
            if (this.isModalMode) {
                this.$emit('next');
                console.log('Requesting Next by emit');
            }
            else {
                this.bookToShow = BookService.getNext(this.bookToShow)
                this.$router.push(`/book/${this.bookToShow.id}`);
            }
        },
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
