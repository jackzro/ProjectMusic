<template>
    <div>
        <div class="landingPage" v-show=!loggedIn>
            <login-form v-show=registerIs @googleSign="googleSign" @buttonRegister="buttonRegister" @loginForm="loginForm"></login-form>
            <register-form v-show=!registerIs @buttonLogin="buttonLogin" @registerForm="registerForm"></register-form>
        </div>
        <div class="musicPage" v-show="loggedIn&&!isSong">
            <albumLayout :allAlbum="allAlbum" @songList="songList" @song="song" @logout='logout'></albumLayout>
        </div>
        <div class="songPage" v-show="loggedIn&&isSong">
            <songLayout :manySong="manySong" @cancel="cancel"></songLayout>
        </div>
    </div>
</template>

<script>
import loginForm from "./components/LoginForm"
import registerForm from "./components/RegisterForm"
import albumLayout from "./components/AlbumLayout"
import songLayout from "./components/SongLayout"
import axios from "axios"

export default {
    name: 'App',
    data() {
        return {
            isSong:false,
            registerIs:false,
            loggedIn:false,
            allAlbum:[],
            manySong:[]
        };
    },
    components:{
        loginForm,
        registerForm,
        albumLayout,
        songLayout
    },
    methods:{
        googleSign(){
            this.getAlbum()
            this.loggedIn=true
        },
        logout(){
            localStorage.removeItem('token')
            this.loggedIn=false
        },
        cancel(){
            this.isSong=false
        },
        songList(){
            this.isSong=true
        },
        buttonRegister(){
            this.registerIs=false
        },
        buttonLogin(){
            this.registerIs=true
        },
        registerForm(member){
            axios({
                method:"post",
                url:"http://localhost:3000/register",
                data:{
                    email:member.email,
                    password:member.password
                }
            })
            .then(user=>{
                this.$toasted.success("You have successfully registered");
            })
            .catch(err=>{
                let error = err.response.data.message
                if(typeof error =='string'){
                    this.$toasted.error(err.response.data.message)
                }else{
                    for (let i = 0; i < error.length; i++) {
                    this.$toasted.error(error[i].message);
                    }
                }   
            })
        },
        loginForm(anggota){
            axios({
                method:'post',
                url:"http://localhost:3000/login",
                data:{
                    email:anggota.email,
                    password:anggota.password
                }
            })
            .then(user=>{
                localStorage.setItem("token", user.data.token)
                this.$toasted.success("You have successfully Logged In");
                this.loggedIn=true
            })
            .catch(err=>{
                let error = err.response.data.message
                if(typeof error =='string'){
                    this.$toasted.error(err.response.data.message)
                }else{
                    for (let i = 0; i < error.length; i++) {
                    this.$toasted.error(error[i].message);
                    }
                }   
            })
        },
        getAlbum(){
            const token=localStorage.getItem('token')
            axios({
                method:"get",
                url:"http://localhost:3000/album",
                headers:{
                    token:token
                }
            })
            .then(data=>{
                const list_album=data.data.message.body.album_list
                for (let i = 0; i < list_album.length; i++) {
                    this.allAlbum.push({
                        id:list_album[i].album.album_id,
                        name:list_album[i].album.album_name,
                        rating:list_album[i].album.album_rating,
                        release_date:list_album[i].album.album_release_date,
                        copyright:list_album[i].album.album_copyright
                    })
                }
            })
            .catch({})
        },
        song(id){
            const token=localStorage.getItem('token')
            axios({
                method:"get",
                url:"http://localhost:3000/song",
                params:{
                    album_id:id,
                },
                headers:{
                    token:token
                }
            })
            .then(data=>{
                this.manySong=[]
                const x=data.data.message.body.track_list
                for (let i = 0; i < x.length; i++) {
                    this.manySong.push({
                        name:x[i].track.track_name,
                        rating:x[i].track.track_rating
                    })
                    
                }
            })
            .catch({})
        }
    },
    created(){
        if(localStorage.getItem('token')){
            this.getAlbum()
            this.loggedIn=true
        }   
    }
}
</script>
    

<style>
body{
    background-image: url("../coldplay.jpg");
}
.landingPage{
    width: 600px;
    margin: 50px auto;
    text-align: center;
    color: black;
}

</style>