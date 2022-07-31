document.onclick = function(e){
    
}
document.getElementById("btn-salvar").addEventListener('click', salvar);
document.getElementById("btn-listar").addEventListener('click', listar);
document.getElementById("btn-produto").addEventListener('click', function(){
    closeModal("modalProduto")
});

let divTable = document.getElementById("divTable");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let divModal = document.getElementById("modal-edit");
let modalProduto = document.getElementById("modalProduto")
let erroMsg = document.getElementById("msg");
let produto={};
let produtos = [];
let id = 1;

function salvar() {
    erroMsg.innerHTML="";
    let name = document.getElementById('product-name')
    let description = document.getElementById('product-desc')
    let value = document.getElementById('product-value')
    let date = new Date().getTime()

    try {
        if (name.value == "")
            throw 'Digite o nome do produto.'
        if (description.value == "")
            throw 'Digite a descrição do produto.'
        if (isNaN(value.value.replace(',', '.')))
            throw 'Digite um preço válido.'
    } catch (error) {
        erroMsg.innerHTML = (`Falha no cadastro do produto! ${error}`)
        return
    }

    let produto = {
        'id': id,
        'nome': name.value,
        'descricao': description.value,
        'valor': parseFloat(value.value.replace(',','.')).toFixed(2),
        'incluidoEm': date
    }
    //verificando
    console.log(produto);

    produtos.push(produto)
    id++

    erroMsg.innerHTML= `Produto ${produto.nome} incluído com sucesso!`;
    //verificando o push
    console.log(produtos)
}

function listar(){
    erroMsg.innerHTML="";
    divTable.style.display = "flex";
    thead.style.display = "block";
    tbody.innerHTML = "";
   
    let i = 0;

    while (i < produtos.length) {
        let linha = document.createElement('tr')
        let colNome = document.createElement('td')
        let colValue = document.createElement('td')
        let colEdit = document.createElement('td')
        let colDelete = document.createElement('td')
        

        colNome.innerHTML = `<span id='produto' onclick="exibirProduto(${i})">${produtos[i].id}  ${produtos[i].nome}</span>`;
        colValue.innerHTML = `R$ ${produtos[i].valor}`;
        colEdit.innerHTML = `<span class='bx bx-edit-alt'onclick="editProduto(${i})"></span>`;
        colDelete.innerHTML = `<span class='bx bx-trash' onclick="deleteProduto(${i})"></span>`;

        linha.appendChild(colNome)
        linha.appendChild(colValue)
        linha.appendChild(colEdit)
        linha.appendChild(colDelete)
        tbody.appendChild(linha)
        i++
    } 

    
    

}

function exibirProduto(id){
    
    modalProduto.style.display = 'block';
    document.getElementById("exibirid").innerText = " id: "+ produtos[id].id;
    document.getElementById("exibirNome").innerText = " Produto: " + produtos[id].nome;
    document.getElementById("exibirdescricao").innerText = "Descrição: " + produtos[id].descricao;
    document.getElementById("exibirvalor").innerText = "Preço: R$" + produtos[id].valor;
    document.getElementById("incluidoEm").innerText = " Incluído em: " + new Date((produtos[id].incluidoEm)).toLocaleDateString("pt-BR");

}

function editProduto(id){
    document.getElementById("product-name-edit").value=produtos[id].nome;
    document.getElementById("product-desc-edit").value=produtos[id].descricao;
    document.getElementById("product-value-edit").value=produtos[id].valor;

    divModal.style.display = 'block';
    document.getElementById("btn-edit").addEventListener('click', function(){
        editarModal(id)});
    
}


function editarModal(id){
    let novoNome = document.getElementById("product-name-edit").value;
    let novaDesc = document.getElementById("product-desc-edit").value;
    let novoValor = document.getElementById("product-value-edit").value;

//edita no objeto
if( novoNome !== produtos[id].nome){
    produtos[id].nome = novoNome;
}
if(novaDesc !== produtos[id].descricao){
    produtos[id].descricao = novaDesc;
}
if(novoValor !== produtos[id].valor){
    produtos[id].valor = novoValor;
}
//fechar a janela
    closeModal("modal-edit");
    listar();
}

function openModal(x){

    if(typeof x == 'undefined' || x === null){
        console.log(x);
        return;
    }
    divModal.style.display = 'block';
}


function closeModal(x){  
    const local = document.getElementById(x)  

    if(typeof x == 'undefined' || x === null){
        return;
    }
    local.style.display = 'none';
}
   

function deleteProduto(item){
        let novaLista = [];
        let i = 0;
    
        while (i < produtos.length) {
            if (i != item) {
                novaLista.push(produtos[i])
            }
            i++
        }
    
        produtos = novaLista
        listar()
    }


