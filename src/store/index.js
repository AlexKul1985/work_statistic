import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store({
	
			state:{
				userList:  [
          {
            action: 'local_activity',
            title: 'Attractions',
            active: false,
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            action: 'school',
            title: 'Education',
             active: false,
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
             active: false,
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'healing',
            title: 'Health',
             active: false,
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
             active: false,
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
             active: false,
            items: [
              { title: 'List Item' }
            ]
          }
        ],
        


			},
			getters:{

				userList(state){
					return state.userList;
				}

				
			},
			mutations:{
				loadUserList(store,payload){
					store.userList = payload;
				}

			},
			actions:{
				loadUserList({commit},payload){
					commit('loadUserList',payload);
				}

			},

			strict: process.env.NODE_ENV !== 'production'


});