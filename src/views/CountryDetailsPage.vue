<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import axios from 'axios';

  export default {
    name: 'CountryDetailsPage',
    data() {
      return{
        countrySelected:Object
      }
    },
    methods:{
      backToHomePage() {
        this.$router.push('/');
      },
      getCountryByName() {
        const countryName = this.$route.params.name;
        
        const countryNameUrl = 'https://restcountries.com/v3.1/name/' + countryName
        try {
            axios.get(countryNameUrl).then(response => {
              this.countrySelected = response.data[0];
            })
          } catch(e) {}
      }
    },
    beforeMount() {
      this.getCountryByName();
    }
  }
</script>

<template>
  <HeaderComponent />

  <div class="container-content">
    <button class="btn-navigate" @click="backToHomePage()"> Back </button>

    <div class="container-country-details">
      <div class="country-flag">
        <img :src="countrySelected.flags?.png" :alt="countrySelected.flags?.alt">
      </div>
    </div>

    <div class="country-details">

    </div>
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

    .container-country-details {
      margin-top: 48px;

      .country-flag {
        img {
          height: 300px;
          border: 1px solid gray;
        }
      }
    }
  }

</style>