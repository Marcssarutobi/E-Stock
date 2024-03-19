<template>
  <main>
    <SideBar/>

  </main>
</template>

<script>

import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components:{
    SideBar
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body{
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100vh;
}
.mains{
  width: 100%;
  height: calc(100vh - 70px);
}
.dt-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
}
</style>
