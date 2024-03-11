<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import { onMounted } from 'vue';

  let listOfCountries: any[];

  onMounted(() => {
    getCountryList();
  })  

  function getCountryList() {
    const countrieUrl = 'https://restcountries.com/v3.1/all'
    
    const countrieFieldsFilter = [
      'name',
      'population',
      'region',
      'subregion',
      'capital',
      'tld', //Top Level Domain
      'currencies',
      'languages',
      'flags',
    ];

    axios.get(`${countrieUrl}?fields=${countrieFieldsFilter.join(',')}`).then(response => {
      if (response) {
        listOfCountries = response.data;
      }
    }).catch(err => {
      console.log(err)
    });
  }

</script>

<template>
  
  <HeaderComponent />

  <div class="content-container">

    <div class="search-field">
      <FontAwesomeIcon icon="fa-search" class="search-icon"/>
      <input type="text" placeholder="Search for country..." />
    </div>

    <div class="country-cards-area">
        <div class="country-card" v-for="country in listOfCountries">
          <img :src="country.flags.png" alt="flag">

          <div class="card-content">
            <p class="country-name">{{ country.name.official }}</p>
            
    
            <div class="topic">
              <span class="topic-title">Population:</span> <span>{{ country.population }}</span>
            </div>
            
            <div class="topic">
              <span class="topic-title">Region:</span> <span>{{ country.region }}</span>
            </div>

            <div class="topic">
              <span class="topic-title">Capital:</span> <span>{{ country.capital[0] }}</span>
            </div> 

          </div>
        </div>
    </div>

  </div>

</template>

<style>

  .content-container {
    display: flex;
    flex-direction: column;
    min-height: 84vh;
    background-color: hsl(0, 0%, 98%);
    padding: 40px;

    .search-field {
      .search-icon {
        position: absolute;
        left: 50px;
        top: 122px;
      }

      input {
        height: 40px;
        width: 400px;
        padding-left: 40px;
        border-radius: 4px;
        border: none;
        box-shadow: 0px 2px 4px hsl(0, 0%, 52%);
      }

      input:focus-visible {
        outline-color: hsl(0, 0%, 52%);
      }
    }

    .country-cards-area {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 40px;

      .country-card {
        display: flex;
        flex-direction: column;
        height: 300px;
        width: 250px;
        background-color: hsl(0, 0%, 100%);
        border-radius: 4px;
        margin: 0 50px 50px 0;

        img {
          width: 250px;
          height: 150px;
          border-radius: 4px;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          padding: 16px;

          .country-name {
            font-weight: 800;
          }

          .topic {
            display: flex;
            flex-direction: row;
            font-size: 12px;

            .topic-title {
              font-weight: 600;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }

</style>
