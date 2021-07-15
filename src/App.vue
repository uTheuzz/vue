<template>
  <div id="app">
    <v-card elevation="2">
      <div v-for="product in products" :key="product.id_product">
        <product
          :pname="product.product_name"
          :pamount="product.product_amount"
          :pprice="product.product_price">
        </product>
      </div>
    </v-card>
  </div>
</template>


<script>
import ProductsApi from './services/ProductsApi';
import Product from './components/Product';

  export default {
    name: 'App',
    components: {
      Product
    },
    data() {
      return {
        products: []
      }
    },
    created() {
      ProductsApi.getAllProducts(products => {
        this.products = products.produtos;      
      })
    }
  }
</script>-
