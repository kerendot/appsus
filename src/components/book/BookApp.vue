<template>
  <div class="home">
    <h2>Books!</h2>

    <book-list></book-list>
    <cart-details></cart-details>
  </div>
</template>

<script>
import BookList from './BookList'
import CartDetails from './CartDetails'

export default {
  name: 'bookApp',
  components: {
        BookList,
        CartDetails
    },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
