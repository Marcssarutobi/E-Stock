<template>
  <div class="body">
    
    <nav>
      <div class="logo_text">
        <div class="logo">
          <i class="fas fa-boxes-stacked"></i>
        </div>
        <div class="text">
          <span>E-Stock</span>
        </div>
      </div>
      <div class="links">
        <ul class="mt-3">
          <li>
              <router-link to="/">
                <i class="fas fa-home"></i>
                <span class="text_link">Accueil</span>
              </router-link>
          </li>
          <li>
              <router-link to="/produits">
                <i class="fas fa-tags"></i>
                <span class="text_link">Produits</span>
              </router-link>
          </li>
          <li>
              <router-link to="/stock">
                <i class="fas fa-store"></i>
                <span class="text_link">Stock</span>
              </router-link>
          </li>
          <li>
              <router-link to="/vente">
                <i class="fas fa-shopping-cart"></i>
                <span class="text_link">Vendre</span>
              </router-link>
          </li>
          <li>
              <a href="#">
                <i class="fas fa-arrow-right-arrow-left"></i>
                <span class="text_link">Historique</span>
              </a>
          </li>
        </ul>
        <div class="person">
          <div class="info">
            <div class="image">
              <img src="../assets/img1.jpg" alt="">
            </div>
            <div class="name_post">
              <span class="name">Jonh DOE</span>
              <span class="post">Caisse</span>
            </div>
          </div>
          <div class="btns">
            <i class="fas fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </div>
    </nav>

    <div class="view">
      <div class="navbars">
        <i class="fas fa-bars bars" id="bars"></i>
        <!-- <div class="forms">
          <input type="search" placeholder="Rechercher ...">
          <i class="fas fa-search"></i>
        </div> -->
        <div class="icons">
          <a href="#"><i class="fas fa-bell"></i></a>
          <a href="#"><i class="fas fa-cog" id="btn_cog"></i></a>
        </div>
      </div>
      <router-view/>
    </div>

    <div class="cog ">
      <div class="haut">
        <h1>Paramètres</h1>
        <i class="fas fa-x" id="x"></i>
      </div>
      <div class="bas">

        <router-link to="#" class="sub_menu_linke">
          <span class="icon_link"><i class='fas fa-user-pen'></i></span>
          <sapn class="name_link">Modifier un Compte</sapn>
          <sapn class="icon_link"><i class='fas fa-chevron-right' id="chevron"></i></sapn>
        </router-link>
        <router-link to="/addUser" class="sub_menu_linke">
          <span class="icon_link"><i class='fas fa-user-plus'></i></span>
          <sapn class="name_link">Ajouter un Compte</sapn>
          <sapn class="icon_link"><i class='fas fa-chevron-right' id="chevron"></i></sapn>
        </router-link>
        <a href="#" class="sub_menu_linke">
          <span class="icon_link"><i class="fa-solid fa-circle-question"></i></span>
          <sapn class="name_link">Aide & Support</sapn>
          <sapn class="icon_link"><i class='fas fa-chevron-right' id="chevron"></i></sapn>
        </a>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBar',
  mounted(){
    const  bars = document.querySelector('#bars')
    const nav = document.querySelector('nav')

    bars.addEventListener('click',()=>{
      nav.classList.toggle('active')
    })

    document.querySelector('#btn_cog').addEventListener('click',()=>{
      document.querySelector('.cog').classList.toggle('active')
    })
    document.querySelector('#x').addEventListener('click',()=>{
      document.querySelector('.cog').classList.remove('active')
    })
    
    document.querySelectorAll('.sub_menu_linke').forEach(btn => {
      btn.addEventListener('click', () => {
          document.querySelector('.cog').classList.remove('active');
      });
    });

  }
}
</script>

<style>
.body{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
nav{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background: #061d3d;
  gap: 10px;
  overflow: hidden;
  transition: .6s all ease;
}
nav.active{
  width: 85px;
}
nav .logo_text{
  width: 100%;
  height: 88px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #0a2c5a;
}
nav .logo_text .logo{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .9s ease;
}
nav.active .logo_text .logo{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .logo_text .logo i{
  font-size: 35px;
  color: #fff;
}
nav.active .logo_text .text{
  display: none;
}
nav .logo_text .text span{
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}
nav .links{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
nav .links ul{
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}
nav .links ul li{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
}
nav .links ul li a{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all .5s ease;
}
nav .links ul li .router-link-active{
  background: #0a2c5a;
}
nav .links ul li a:hover{
  background: #0a2c5a;
}
nav .links ul li a i{
  font-size: 25px;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all .9s ease;
}
nav.active .links ul li a i{
  font-size: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
nav .links ul li a .text_link{
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
  transition: all .6s ease;
}
nav.active .links ul li a .text_link{
  display: none;
}
nav .links .person{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background: #0a2c5a;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
}
nav .links .person .info{
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  overflow: hidden;
  transition: all .6s ease;
}
nav.active .links .person .info{
  display: none;
}
nav .links .person .info .image{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
nav .links .person .info .image img{
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
nav .links .person .info .name_post{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
nav .links .person .info .name_post .name{
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
}
nav .links .person .info .name_post .post{
  color: #fff;
  font-size: 17px;
}
nav .links .person .btns{
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .9s ease;
}
nav.active .links .person .btns{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .links .person .btns i{
  color: #fff;
  font-size: 19px;
}
.view{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start ;
}
.view .navbars{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  width: 100%;
  z-index: 100;
}
.view .navbars .bars{
  font-size: 22px;
  cursor: pointer;
}
.view .navbars .forms{
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.view .navbars .forms input{
  width: 90%;
  height: 49px;
  border: none;
  background: #e1e1e1;
  padding: 0 10px;
  border-radius: 10px 0 0 10px;
}
.view .navbars .forms i{
  width: 10%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #061d3d;
  color: #fff;
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  cursor: pointer;
}
.view .navbars .icons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.view .navbars .icons a {
  text-decoration: none;
  color: #061d3d;
  font-size: 22px;
}
.cog{
  position: fixed;
  top: 88px;
  right: 0;
  background: #fff;
  width: 400px;
  max-width: 0;
  height: calc(100vh - 88px);
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  overflow: hidden;
  transition: all 0.5s ease;
}
.cog.active{
  max-width: 400px;
}
.cog .haut{
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  height: 80px;
  padding: 20px;
  width: 100%;
}
.cog .haut h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
}
.cog .haut i {
    font-size: 20px;
    cursor: pointer;
}
.cog .bas{
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.cog .bas .sub_menu_linke{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-decoration: none;
  gap: 10px;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  color: #0a2c5a;
}
.cog .bas .sub_menu_linke:hover{
  background: #e5e5e5;
  border-radius: 10px;
}
.cog .bas .sub_menu_linke .icon_link{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
}
.cog .bas .sub_menu_linke  .name_link{
  flex: 5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 19px;
  white-space: nowrap;
}
.cog .bas .sub_menu_linke #chevron {
    transition: transform 0.5s;
}

.cog .bas .sub_menu_linke:hover #chevron {
    transform: translateX(5px);
}
</style>
