<template>
  <main class="mains">

    <div class="stock">

        <div class="head">
            <i class="fas fa-store"></i>
            <span class="name">Stock</span>
        </div>

        <div class="links mt-2">
            
            <div class="link">
                <span :class="lien1" @click="EntrerView">Entrer</span>
            </div>
            <div class="link">
                <span :class="lien2" @click="SortieView">Sortie</span>
            </div>

        </div>

        <div class="content">
            <div class="Entrer" v-if="Entrer">
                <DataTable class="table table-striped table-hover " :options="{
                    responsive: true, autowidth: false, dom: 'Bfrtip', language: {
                        search: 'Rechercher :', zeroRecords: 'Aucune données disponible', info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
                        paginate: { previous: 'Previous', next: 'Next', first: 'First', last: 'Last' }
                    }
                }">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Nom du Produits</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Quantité Stock</th>
                            <th scope="col">Prix Unitaire</th>
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
            <div class="Sortie" v-if="Sortie">
                <DataTable class="table table-striped table-hover " :options="{
                    responsive: true, autowidth: false, dom: 'Bfrtip', language: {
                        search: 'Rechercher :', zeroRecords: 'Aucune données disponible', info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
                        paginate: { previous: 'Previous', next: 'Next', first: 'First', last: 'Last' }
                    }
                }">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Nom du Produits</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Quantité Sortie</th>
                            <th scope="col">Prix Total</th>
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
import 'datatables.net-buttons/js/buttons.print'
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
    name: 'stockVue',
    components: {
        DataTable
    },
    data(){
        return {
            lien1: 'link active',
            lien2: 'link',
            Entrer: true,
            Sortie: false
        }
    },
    methods: {
        EntrerView() {
            this.lien1 = 'link active'
            this.lien2 = 'link'
            this.Entrer = true
            this.Sortie = false
        },
        SortieView() {
            this.lien1 = 'link '
            this.lien2 = 'link active'
            this.Entrer = false
            this.Sortie = true
        }
    }
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
    overflow-y: scroll;
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
}
.stock .links{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.stock .links .link{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    transition: all .5s ease;
}
.stock .links .link:active{
    transform: scale(0.9);
}
.stock .links .link span{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
    transition: all .5s ease;
}

.stock .links .link span.active{
    border-bottom: 4px solid #0a2c5a;
}


.stock .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.stock .content .Entrer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.stock .content .Entrer .datatable{
    width: 100%;
   padding: 20px;
   height: 100%;
}
.stock .content .Sortie{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.stock .content .Sortie .datatable{
    width: 100%;
   padding: 20px;
   height: 100%;
}
.dropdown-toggle::after{
    display: none;
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