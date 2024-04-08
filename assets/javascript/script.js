let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let mapa = document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido, insira pelo menos 3 caracteres!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = "Insira um email válido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "green"
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}