<template>
  <div class="body">
    
    <div class="main">
        <div class="right">
            <div class="logo">
                <i class="fas fa-boxes-stacked"></i>
                <span class="text">E-Stock</span>
            </div>
            <div class="panel">
                <div class="content">
                    <h1>Content de te revoir !</h1>
                    <p>Veuillez vous connecter avec vos informations personnelles</p>
                </div>
            </div>
        </div>
        <div class="left">

            <div class="forms">
                <h2 class="title">Connexion</h2>
                <div class="input-field">
                    <i class='fas fa-user'></i>
                    <input type="text" placeholder="Nom d'utilisateur">
                </div>
                <div class="input-field">
                    <i class='fas fa-lock'></i>
                    <input :type="inputType" placeholder="Mot de passe">
                    <i @click="togglePassword" :class="eyeIcon" class=" show"></i>
                </div>
                <input type="submit" value="Se Connecter" class="btns">
            </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"LoginView",
    data(){
        return {
            showPassword: false
        }
    },
    methods:{
        togglePassword(){
            this.showPassword = !this.showPassword
        }
    },
    computed:{
        eyeIcon(){
            return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
        },
        inputType() {
            return this.showPassword ? 'text' : 'password';
        }
    }
}
</script>

<style scoped>
    .body{
        background: #e1e1e1;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 80vh;
        background: #fff;
        box-shadow:  0 0 28px rgba(0, 0, 0, .25),
                     0 0 10px rgba(0, 0, 0, .22);
        overflow: hidden;
        border-radius: 20px;
    }
    .main .right{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        background: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)), url("../assets/img2.png"),no-repeat;
        background-size: cover;
    }
    .main .right .logo{
        width: 100%;
        height: 11%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;
        gap: 15px;
    }
    .right .logo i{
        color: #fff;
        font-size: 25px;
    }
    .right .logo .text{
        font-size: 20px;
        color: #fff;
        font-weight: 600;
    }
    .main .right .panel{
        width: 100%;
        height: 89%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
    }
    .right .panel .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: -100px;
    }
    .panel .content h1{
        text-align: center;
        font-weight: 600;
        color: #fff;
    }
    .panel .content p{
        font-size: 20px;
        color: #fff;
        text-align: center;
    }
    .main .left{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
    }
    .main .left .forms{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 40%;
        min-width: 100%;
        padding: 0 60px; 
        gap: 10px;
    }
    .main .left .forms .title{
        font-size: 45px;
        color: #061d3d;
        margin-bottom: 10px;
        margin: 0;
    }
    .main .left .forms .input-field{
        width: 100%;
        height: 50px;
        background: #dddddd;
        margin: 10px 0;
        border: none;
        border-radius: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .left .forms .input-field i{
        flex: 1;
        text-align: center;
        color: #061d3d;
        font-size: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left .forms .input-field .show{
        cursor: pointer;
    }
    .left .forms .input-field input{
        flex: 5;
        background: transparent;
        color: #11101d;
        border: none;
        outline: none;
        width: 100%;
        font-size: 20px;
        font-weight: 600;
        height: 100%;
    }
    .left .forms .btns{
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 50px;
        background: #0a2c5a;
        color: #fff;
        font-weight: 600;
        margin: 10px 0;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.6s ease-in-out;
    }
</style>