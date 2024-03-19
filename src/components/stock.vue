<template>
  <main class="mains">

    <div class="stock">

        <div class="head">
            <i class="fas fa-store"></i>
            <span class="name">Stock</span>
        </div>

        <div class="content">

        </div>

        <i class="fa fa-plus bas"></i>
    </div>

  </main>
</template>

<script>
export default {
    name:'stockVue'
}
</script>

<style>

.stock{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
}
.stock .head{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.stock .head i{
    font-size: 28px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a2c5a;
    color: #fff;
    border-radius: 50%;
}
.stock .head .name{
    font-size: 28px;
    font-weight: 500;
}
.stock .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
}


.stock .bas{
    position: fixed;
    width: 50px;
    height: 50px;
    background: #0a2c5a;
    color: #fff;
    bottom: 40px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 28px;
    cursor: pointer;
    z-index: 1000;
}
</style>