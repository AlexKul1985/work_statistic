<template>
   <div>  
  <v-container  grid-list-md text-xs-center>
  <v-layout row wrap class="mb-5">
     
      <v-flex xs12 md12>
        <bar-ex :chart-data = "data"  :options=" {responsive: true, maintainAspectRatio: false}"></bar-ex>
      
      </v-flex>
      
     
    </v-layout>
   
  </v-container>
  </div>   
</template>

<script>
import BarEx from '@/components/BarEx'

import axios from 'axios'


 export default {
 
    components: {
        BarEx
     
    },
    data () {
      return {
        
        data:[]
        
      }
    },
   
    mounted(){
       console.log('created chart')
        axios({
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost/serv/index.php',
    data: {
        flag: 'get Chars'
    }
    })
    .then((response) => {
     
          console.log('Heelo Chart')
        console.log(response.data.test)
       this.data = response.data;
        console.log( this.data );

     
        

    })
    .catch(function (error) {
        console.log(error);
    });
    },
    
    
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  h1 {
    font-family: 'Helvetica', Arial;
    color: #464646;
    text-transform: uppercase;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
  }
  .Chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>
