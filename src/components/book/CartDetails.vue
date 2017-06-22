<template>
    <section>
        <p v-if="cartItems.length === 0">Your shopping cart is empty</p>
        <div class="cart-items">
        <cart-item v-for="cartItem in cartItems" 
        :key="cartItem.item.id" 
        @add="addToCart(cartItem)"
        @subtract="subtractFromCart(cartItem)"
        @clear="clearFromCart(cartItem)"
        :cartItem="cartItem"
        >
        </cart-item>
        </div>
    
        <p class="title is-3">Total of: {{totalPrice}} $</p>
        <button class="button is-success is-medium" @click="doCheckout">Checkout</button>
    
        <check-out v-if="isCheckout" :totalPrice="totalPrice" @close="closeCheckout">
        </check-out>
    
    </section>
</template>

<script>
import CartService from '../../services/book/cart.service';
import CartItem from './CartItem';
import CheckOut from './Checkout';

export default {
    name: 'cart-details',
    components:{
        CartItem,
        CheckOut
    },
    data() {
        return {
            cartItems: CartService.getCartItems(),
            isCheckout: false            
        }
    },
    computed:{
        totalPrice: function(){ 
            //I send "this.cartItems" in order for this prop to be reactive
            return CartService.getCartTotal(this.cartItems);
        }
    },
    methods: {
        doCheckout(){
            this.isCheckout = true;
        },
        closeCheckout(){
            this.isCheckout = false;
        },
        addToCart(cartItem){
            CartService.addToCart(cartItem.item);
        },
        subtractFromCart(cartItem){
            CartService.subtractFromCart(cartItem.item.id);
        },
        clearFromCart(cartItem){
            CartService.clearItem(cartItem.item.id);
        }
    }
}
</script>

<style>
 .cart-items{
     display: flex;
     flex-direction: column;
     justify-content: center;   
     align-items: center;
 }
 .card{
        width: 300px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
}
</style>
