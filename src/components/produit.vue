<template>
  <main class="mains">

    <div class="produit">
        <div class="head">
            <i class="fas fa-tags"></i>
            <span class="name">Liste des Produits</span>
        </div>

        <div class="content">
            <DataTable class="table table-striped table-hover " :options="{responsive:true,autowidth:false,dom:'Bfrtip',language:{
                search:'Rechercher :',zeroRecords:'Aucune données disponible',info:'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
                paginate:{previous:'Previous',next:'Next',first:'First',last:'Last'}
            }}">
                <thead class="table-light">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Nom du Produits</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Quantité Stock</th>
                        <th scope="col">Prix Unitaire</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>ABC123</td>
                        <td>Lunettes de soleil</td>
                        <td>Accessoires</td>
                        <td>50</td>
                        <td>19.99</td>
                        <td><div class="point" style="width: 20px; height: 20px; border-radius: 50%; background: green;"></div></td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>XYZ789</td>
                        <td>Montre intelligente</td>
                        <td>Électronique</td>
                        <td>30</td>
                        <td>79.99</td>
                        <td><div class="point" style="width: 20px; height: 20px; border-radius: 50%; background: green;"></div></td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>PQR456</td>
                        <td>Chapeau de magicien</td>
                        <td>Vêtements</td>
                        <td>15</td>
                        <td>12.50</td>
                        <td><div class="point" style="width: 20px; height: 20px; border-radius: 50%; background: red;"></div></td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>LMN789</td>
                        <td>Enceinte Bluetooth</td>
                        <td>Électronique</td>
                        <td>25</td>
                        <td>49.99</td>
                        <td><div class="point" style="width: 20px; height: 20px; border-radius: 50%; background: orange;"></div></td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>DEF567</td>
                        <td>Cahier de croquis</td>
                        <td>Fournitures artistiques</td>
                        <td>40</td>
                        <td>8.99</td>
                        <td><div class="point" style="width: 20px; height: 20px; border-radius: 50%; background: green;"></div></td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </DataTable>
        </div>





        <i class="fa fa-plus bas"></i>
    </div>
    
  </main>
</template>

<script>
import DataTable from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-buttons-bs5'
import  'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-responsive-bs5'
import JsZip from 'jszip'
window.JSZip = JsZip
DataTable.use(DataTableLib)
DataTable.use(pdfmake)
DataTable.use(ButtonsHtml5)
pdfmake.vfs = pdfFonts.pdfMake.vfs

export default {
    name:'Produit-vue',
    components:{
        DataTable
    }
}
</script>

<style scoped>
.produit{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
}
.produit .head{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.produit .head i{
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
.produit .head .name{
    font-size: 28px;
    font-weight: 500;
}
.produit .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
}
.produit .content .datatable{
   width: 100%;
   padding: 20px;
   height: 100%;
}
.dropdown-toggle::after{
    display: none;
}

.produit .bas{
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