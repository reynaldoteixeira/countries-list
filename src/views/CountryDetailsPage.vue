<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';

  export default {
    name: 'CountryDetailsPage',
    props: [],
    data() {
      return{}
    },
    methods:{
      backToHomePage() {
        this.$router.push('/');
      }
    }
  }
</script>

<template>
  <HeaderComponent />

  <div class="container-content">
    <button class="btn-navigate" @click="backToHomePage()"> Back </button>
  </div>
</template>

<style>
  .container-content {
    display: flex;
    flex-direction: column;
    min-height: 84vh;
    background-color: hsl(0, 0%, 98%);
    padding: 40px; 

    .btn-navigate {
      height: 30px;
      width: 100px;
      background-color: white;
      border-radius: 4px;
      border: none;
      box-shadow: 0px 1px 6px hsl(0, 0%, 52%);
      cursor: pointer;
    }
  }

</style>