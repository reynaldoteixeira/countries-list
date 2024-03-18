<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: 'HeaderComponent',
    props: {
    },
    data() {
      return {
      };
    },
    methods:{

    }
  }

</script>

<template>
  
  <div class="header-container">
    <div class="header-title">
      <h3>Where in the world?</h3>
    </div>

    <div class="header-dark-mode">
      <FontAwesomeIcon icon="fa-moon" />
      <p>Dark mode</p>
    </div>
  </div>

</template>

<style>


  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 48px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    .header-dark-mode {
      display: flex;
      align-items: center;

      p {
        font-weight: 600;
        margin-left: 8px;
      }
    }
  }

</style>