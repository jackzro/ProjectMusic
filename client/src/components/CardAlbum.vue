<template>
    <div class="card col-6">
        <div class="card-body" >
            <h5 class="card-title"><i class="fas fa-record-vinyl"></i>-{{album.name}}</h5>
            <h5 class="card-title"><i class="fas fa-star"></i>-{{album.rating}}</h5>
            <h5 class="card-title"><i class="fas fa-calendar-alt"></i>-{{album.release_date}}</h5>
            <h5 class="card-title"><i class="fas fa-copyright"></i>-{{album.name}}</h5>
            <button class="btn btn-primary" @click="songList" v-on:click="song(album.id)">Songs</button>
        </div>
    </div>
    
</template>

<script>
export default {
    props:["album"],
    methods:{
        songList(){
            this.$emit('songList')
        },
        song(id){
            this.$emit('song',id)
        }
    }
}
</script>

<style>
.card{
    margin-top: 10px;
    background-color: slategray;
}

</style>