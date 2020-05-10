<template>
<div>
    <div class="container-album">
        <h1>TRIBUTE TO COLD PLAY</h1>
        <div class="listAlbum">
            <h2>List of Coldplay Album</h2>
        </div>
         <div class="logout">
            <div>
            <button type="button" class="btn btn-primary" @click="logout">Logout</button>
            </div>
        </div>
         <div class="layout row">
            <card v-for="(album,index) in allAlbum" :key="index" :album="album" @songList="songList" @song="song"></card>
        </div>
    </div>
  
</div>
  
</template>

<script>

import card from "./CardAlbum"
export default {
    data(){
        return {
           
        }
    },
    props:["allAlbum"],
    components:{
        card
    },
    methods:{
        songList(){
            this.$emit('songList')
        },
        song(id){
            this.$emit('song',id)
        },
        logout(){
            this.$emit('logout')
        }
    }
}
</script>

<style scoped>

    .logout{
        display: flex;
        justify-content: flex-end;
    }
  
    h1{
        color:royalblue;
        text-align: center;
    }
    .listAlbum{
        color: white;
        background: black;
        text-align: center;
    }

</style>