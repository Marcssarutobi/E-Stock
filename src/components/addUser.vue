<template>
  <div class="mains">

    <div class="addUser">

        <div class="head">
            <i class="fas fa-user-plus"></i>
            <span class="name">Ajouter un Compte</span>
        </div>

        <div class="content">

            <div class="forms">

                <div class="image">
                    <label id="fileUpload">
                        <input type="file" id="fileUpload" hidden>
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Parcourir le fichier à télécharger</p>
                    </label>
                    <section v-if="uploading" class="progress-area">
                        <li class="rows">
                            <i class="fas fa-file-alt"></i>
                            <div class="contents">
                                <div class="details">
                                    <span class="name"> image_01.png ~ Téléchargement</span>
                                    <span class="percent">50%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                        </li>
                    </section>
                    <section v-if="uploaded" class="uploaded-area">
                        <li class="rows">
                            <div class="contents">
                                <i class="fas fa-file-alt"></i>
                                <div class="details">
                                    <span class="name"> image_01.png ~ Télécharger</span>
                                    <span class="size">70 KB</span>
                                </div>
                                <i class="fas fa-check"></i>
                            </div>
                        </li>
                    </section>
                </div>
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="text" class="form-control" id="floatingInput" placeholder="Doe" style="background: #ececec;">
                            <label for="floatingInput">Nom</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="text" class="form-control" id="floatingInput" placeholder="John" style="background: #ececec;">
                            <label for="floatingInput">Prénom</label>
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="email" class="form-control" id="floatingInput" placeholder="Doe" style="background: #ececec;">
                            <label for="floatingInput">Adresse Email</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="number" class="form-control" id="floatingInput" placeholder="John" style="background: #ececec;">
                            <label for="floatingInput">Âge</label>
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <select name="" class="form-select" id="floatingInput" style="background: #ececec;">
                                <option selected disabled>Selectionnez une option</option>
                                <option value="marié">Marié</option>
                                <option value="célibataire">Célibataire</option>
                            </select>
                            <label for="floatingInput">Situation Matrimonial</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="text" class="form-control" id="floatingInput" placeholder="John" style="background: #ececec;">
                            <label for="floatingInput">Ville</label>
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <input type="number" class="form-control" id="floatingInput" placeholder="Doe" style="background: #ececec;">
                            <label for="floatingInput">Numéro de téléphone</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3" >
                            <select name="" class="form-select" id="floatingInput" style="background: #ececec;">
                                <option selected disabled>Selectionnez un role</option>
                                <option value="marié">Caisse</option>
                                <option value="célibataire">Administrateur</option>
                            </select>
                            <label for="floatingInput">Role</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3 w-100">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Doe" style="background: #ececec;">
                    <label for="floatingInput">Mot de passe</label>
                </div>

                <div class="btnt">
                    <div></div>
                    <button class="btn btn-orther btn-lg rounded-0">Enrégistrer</button>
                </div>

            </div>

        </div>

    </div>

  </div>
</template>

<script>
export default {
    name:"AddUser",
    data(){
        return{
            uploading: false,
            uploaded: false
        }
    }
}
</script>

<style scoped>

.btn-lg{
    background: #0a2c5a;
    color: #fff;
}

.addUser{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    overflow-y: scroll;
}
.addUser .head{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.addUser .head i{
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
.addUser .head .name{
    font-size: 28px;
    font-weight: 500;
}
.addUser .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 200px;
}
.content .forms{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
}
.forms .image{
    background: #fff;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
}
.forms .image label{
    border: 3px dashed #0a2c5a;
    height: 197px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    cursor: pointer;
}
.forms .btnt{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
label i{
    color: #0a2c5a;
    font-size: 50px;
}
label p{
    color: #0a2c5a;
    font-size: 18px;
}
section .rows{
    background: #ececec;
    margin-bottom: 10px;
    list-style: none;
    padding: 15px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
section .rows i{
    font-size: 30px;
    color: #0a2c5a;
}
.progress-area .rows .contents{
    width: 100%;
    margin-left: 15px;
}
section .rows .details span{
    font-size: 18px;
}
.progress-area .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.progress-area .progress-bar{
    height: 8px;
    width: 100%;
    background: #fff;
    border-radius: 30px;
}
.progress-bar .progress{
    height: 100%;
    width: 0%;
    background: #0a2c5a;
    border-radius: inherit;
}
.uploaded-area .rows .contents{
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
}
.uploaded-area .rows .details{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.uploaded-area .rows .details .size{
    font-size: 17px;
}
.uploaded-area .fa-check{
    font-size: 20px;
}


</style>