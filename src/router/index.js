import Vue from 'vue'
import Router from 'vue-router'
import ListUsers from '@/components/user/ListUsers'

import Edit from '@/components/user/Edit'
import Chart from '@/components/user/Chart'
import Table from '@/components/user/Table'
import Home from '@/components/Home'
import {store} from '@/store'
import axios from 'axios'
Vue.use(Router)

export default new Router({
  routes: [
   	{
	  	path:'/',
		  name:'home',
		  component:Home,
	 },
	 {
	  	path:'/list',
		  name:'listUsers',
		  component:ListUsers,
		  // beforeEnter(to,form,next){
		  // 	console.log(to.name)
		  // 	axios.get('http://localhost/serv/index.php')
		  // 	.then((response) => { 
		  // 		console.log(response.data)
		  // 		store.dispatch('loadUserList',response.data); 
		  		
		  // 		next();

		  // 	})
		  // 	.catch((e) => console.log(e))
		  	
		  // }
	 },
	 
	 
	 {
	  	path:'/edit',
		  name:'Edit',
		  component:Edit,
	 },
	 {
	  	path:'/chart',
		  name:'chart',
		  component:Chart,
	 },
	 ,
	 {
	  	path:'/table',
		  name:'table',
		  component:Table,
		  beforeEnter(to,form,next){
		  	console.log('Table route')
		  	next()
		  }
	 }
	  
  ],

  mode:'history'
})
    
