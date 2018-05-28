<template>
        <div>
	
  		 <v-list>
          <v-list-group
            v-for="item in userList"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
               <v-btn color="info" @click = "onInfo(subItem.title)" >Info</v-btn>
            </v-list-tile>
          </v-list-group>
        </v-list>
		   <v-dialog v-model="dialog" max-width="290">
		      <v-card>
		        <v-card-title class="headline">Use Google's location service?</v-card-title>
		        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
		        <v-card-actions>
		          <v-spacer></v-spacer>
		          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
		          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
		        </v-card-actions>
		      </v-card>
		   </v-dialog>
		   <v-snackbar
     		 color="indigo" dark
		      v-model="snackbar"
		    >
		      Hello world!!!
		      <v-btn flat @click.native="snackbar = false">Close</v-btn>
		    </v-snackbar>
		   

        </div>

      
</template>

<script>
import axios from 'axios'
export default {
 data () {
 	return {
 		
        dialog: false,
        snackbar:false,
        userList:  [],

 	}

 },
 methods:{
 	onPopup(e){
 		
 	},
 	onInfo(title){
 		console.log(title)
 	}
 },
  beforeRouteEnter (to, from, next) {
   console.log('beforeRouteEnter_TABLE',to)
         axios({
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost/serv/index.php',
    data: {
        flag: 'get Users'
    }
})
.then((response) => {
    // Vue.nextTick(() => {
      

    // })
    next((vm) => {
      vm.userList = response.data;
    })
    

})
.catch(function (error) {
    console.log(error);
});
    
  },
 // computed:{
 // 	userList(){
 // 		return this.$store.getters.userList;
 // 	}
 }

</script>
<style>
  
</style>
