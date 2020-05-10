<template>
    <div class="container-album">
        <h1>TRIBUTE TO COLD PLAY</h1>
        <div class="listSong">
            <h2>List of Coldplay Song</h2>
        </div>
         <div class="cancel">
            <div>
            <button type="button" class="btn btn-primary" @click="cancel">Back</button>
            </div>
        </div>
        <div class="layout row">
            <cardsong v-for="(song,index) in manySong" :key="index" :song="song"></cardsong>
            
        </div>
    </div>
  
</template>

<script>
import cardsong from "./SongList"
export default {
    components:{
        cardsong
    },
    props:["manySong"],
    methods:{
        cancel(){
            this.$emit('cancel')
        }
    }
}
</script>

<style scoped>
    .cancel{
        display: flex;
        justify-content: flex-end;
    }
    h1{
        color:royalblue;
        text-align: center;
    }
    .listSong{
        color: white;
        background: black;
        text-align: center;
    }

</style>