<template>
   <div class="register" >
      <form id="form-register" @submit.prevent="register">
          <h2 id="h2-register">Register</h2>
          <div class="form-register-email">
            <input type="email" v-model="email" placeholder="Email Id" id="input-email">
          </div>
          <div class="form-register-password">
            <input type="password" v-model="password" placeholder="Password" id="input-password">
          </div>
          <button type="submit" id="registerbutton" class="btn btn-primary">Submit</button>
      </form>
      <div class="control">
          <label for="">Have Account ??</label>
          <button v-on:click.prevent="loginButton()" class="btn btn-primary">Login</button>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        email:"",
        password:"",
        member:{
            email:'',
            password:''
            },
        }
    },
    methods:{
        register(){
        this.member.email=this.email
        this.member.password=this.password
        this.$emit('registerForm',this.member)
        this.email=''
        this.password=''
        },
        loginButton(){
        this.$emit("buttonLogin")
        }
    }

}
</script>

<style>
.control{
    margin-top: -250px;
    color: white;
}

#form-register{
    width: 500px;
    background: rgba(0,0,0,0.8);
    margin: 200px auto;
    padding: 50px 0;
    color:#fff;
    box-shadow: 0 0 20px 2px rgba(0,0,0,0.5);
}

#h2-register {
    text-align: center;
    margin-bottom: 40px; 
}

.form-register-email,.form-register-password{
    margin: 31px auto;
    width:80%;
    border-bottom: 1px solid #fff;
    padding-top: 10px;
    padding-bottom: 5px;
}


#input-email,#input-password{
    width: 90%;
    border:none;
    outline:none;
    background: transparent;
    color:#fff;
}

::placeholder{
    color: #ccc;
        
}


#registerbutton {
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

</style>