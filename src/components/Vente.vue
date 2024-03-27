<template>
    <main class="mains">
        
        <div class="vente">
        
            <div class="head">
                <i class="fas fa-shopping-cart"></i>
                <span class="name">Vente</span>
            </div>

            <div class="content">
            
                <div class="top">
                    
                    <div class="search">
                        <div class="inputs">
                            <input type="text" placeholder="Rechercher Produits...">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="result">
                            


                        </div>
                    </div>

                </div>
                <div class="bottom">
                
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr class="table-dark">
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix Unitaire</th>
                                <th>Prix Prix Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ventillateur</td>
                                <td> <button class="btn btn-dark"> <i class="fas fa-minus"></i> </button> <span class="number">1</span> <button class="btn btn-dark"><i class="fas fa-plus"></i></button> </td>
                                <td>250000 FCFA </td>
                                <td>250000 FCFA </td>
                                <td> <button class="btn btn-dark"> <i class="fas fa-trash-can"></i> </button> </td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <div class="toto">
                        <div></div>
                        <div class="total">
                            <span class="title">Total: </span>
                            <span class="prix">250000 FCFA </span>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>

    </main>
</template>
<script>
export default {
    name: "VenteView"
}
</script>
<style>
    .vente{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        overflow-y: scroll;
    }
    .vente .head{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .vente .head i{
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
    .vente .head .name{
        font-size: 28px;
        font-weight: 500;
    }
    .vente .content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 25px;
    }
    .content .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
    }
    .content .top .search{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        border-radius: 10px;
        position: relative;
    }
    .top .search .inputs{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
    .inputs input{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 19px;
        padding: 0 0 0 15px;
        background: #fff;
        border-radius: 10px;
    }
    .inputs i{
        font-size: 19px;
    }
    .search .result{
        width: 100%;
        height: 300px;
        background: #fff;
        position: absolute;
        top: 85px;
        border-radius: 10px;
        z-index: 100;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        display: none;
    }
    .content .bottom{
        width: 100%;
        height: 100%;
        padding: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        border-radius: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 15px;
    }
    .content .bottom .toto{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 60px;
    }
    .bottom .toto .total{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px;
        background: #e1e1e1;
    }
    .toto .total .title{
        font-size: 20px;
        font-weight: 600;
    }
    .toto .total .prix{
        font-size: 19px;
        font-weight: 500;
    }
    .number{
        margin: 0 20px;
    }
    
</style>