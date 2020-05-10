<template>
  <div class="login" >
      <form id="form-login" @submit.prevent="login">
          <h2 id="h2-login">Login</h2>
          <p id="signError" style="color:red"></p>
          <div class="form-login-email">
            <input type="email" placeholder="Email Id" v-model="email" id="input-email-login" >
          </div>
          <div class="form-login-password">
          <input type="password" placeholder="Password" v-model="password" id="input-password-login">
          </div>
          <button type="submit" id="loginbutton" class="btn btn-primary">Submit</button>
      </form>
    <div class="control">
    <label for="">Do Not Have Account ??</label>
    <button v-on:click.prevent="registerButton()" class="btn btn-primary">Register</button>
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
    </g-signin-button>
    </div>
</template>

<script>
import axios from "axios"
export default {
   data(){
    return {
      email:"",
      password:"",
      member:{
        email:'',
        password:''
      },
      googleSignInParams: {
        client_id:"559351047103-2k4bc63kr1hnvqpe53l7p6j5hl93d681.apps.googleusercontent.com"
      }
    }
  },
    methods:{
        login(){
            this.member.email=this.email
            this.member.password=this.password
            this.$emit('loginForm',this.member)
            this.email=''
            this.password=''
        },
        registerButton(){
            this.$emit("buttonRegister")
        },
        onSignInSuccess (googleUser) {
            const profile = googleUser.getBasicProfile() // etc etc
            let id_token = googleUser.getAuthResponse().id_token;
            axios({
                url: "http://localhost:3000/googleSignIn",
                data: {
                id_token:id_token
                },
                method:"post"
            })
            .then(result => {
            localStorage.setItem("token", result.data.token);
            this.googleSign()
            this.$toasted.success("You have successfully login");
            })
            .catch(err => {})
        },
        onSignInError (err) {
        this.$toasted.error(err.error)
        },
        googleSign(){
            this.$emit('googleSign')
        }
    }
}
</script>

<style>

.control{
    margin-top: -250px;
    color: white;
}

#form-login{
    width: 500px;
    background: black;
    margin: 200px auto;
    padding: 50px 0;
    color:#fff;
    box-shadow: 0 0 20px 2px black;
}

#h2-login {
    text-align: center;
    margin-bottom: 40px; 
}

.form-login-email,.form-login-password{
    margin: 31px auto;
    width:80%;
    border-bottom: 1px solid #fff;
    padding-top: 10px;
    padding-bottom: 5px;
}

#input-email-login,#input-password-login{
    width: 90%;
    border:none;
    outline:none;
    background: transparent;
    color:#fff;
}

::placeholder{
    color: #ccc;
        
}

#loginbutton {
    margin: 40px auto 20px;
    width: 80%;
    display: block;
    outline: none;
    padding: 10px 0;
    border: 1px solid #fff;
    cursor: pointer;
    background: transparent;
    color: white;
    font-size: 16px;

}

::-webkit-input-placeholder {
/* Chrome/Opera/Safari */
color: #c5ecfd;
}

.g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #00a4a2;
    color: #fff;
    box-shadow: 0 3px 0 #00fffc;
    cursor: pointer;
}

</style>