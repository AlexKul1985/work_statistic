<template>
  <v-app>
  <v-navigation-drawer v-model = "drawer" fixed app>
     <v-container grid-list-md >
    <v-layout row wrap>
      <v-flex xs4 >
        <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4"

        >
          <img src="./assets/file.png" alt="avatar" height="200">
        </v-avatar class="px-0">
      </v-flex>
       <v-flex xs8>
       
          <v-card-text ><h3 class="color_text">Александр</h3></v-card-text>
       
      </v-flex>
    </v-layout>
  </v-container>
      
      
     
       
    <v-list>
          <v-list-tile  avatar  v-for = " u in urls" :key = "u.title" :to = "u.url">
            <v-list-tile-action>
              <v-icon  >{{u.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="u.title"></v-list-tile-title>
            </v-list-tile-content>
           
          </v-list-tile>
        </v-list>
  </v-navigation-drawer>
   <v-toolbar  color="indigo" dark fixed app>
     <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="home" @click = "onHome">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat  v-for = " u in urls" :key = "u.title" :to = "u.url"> {{u.title}}</v-btn>
     
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <transition name="fade" mode="out-in"> 
      <router-view></router-view>
    </transition>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
export default {
  data(){
    return {
      drawer:false,
      urls:[{title:'List',url:'/list', icon:'view_list'},{title:'Edit',url:'/edit', icon:'edit'},{title:'Graphics',url:'/chart', icon:'graphic_eq'},{title:'Table',url:'/table', icon:'table_chart'}],
      slider: 80,
      tile: false,
      avatarSize:60

    }
  },
  watch:{
    '$route' (to,from){
      console.log('WATCH',to)
    }
  },
  methods:{
    onHome(){
      this.$router.push('/')
    }
  }

 }
</script>
<style scoped>
.home{
  cursor: pointer;
}
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.color_text{
  color:#777;
}
</style>
