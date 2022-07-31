document.getElementById("btn-salvar").addEventListener('click', salvar);
document.getElementById("btn-listar").addEventListener('click', listar);
document.getElementById("btn-produto").addEventListener('click', function () {
    closeModal("modalProduto")
});
document.getElementById("colNome").addEventListener('click', ordenarNome);
document.getElementById("colValor").addEventListener('click', ordenarValor);
document.getElementById("colId").addEventListener('click', ordenarId);
document.getElementById("btn-search").addEventListener('click', pesquisar);


let pesqUsuario = document.getElementById("Usersearch");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let divModal = document.getElementById("modal-edit");
let modalProduto = document.getElementById("modalProduto")
let erroMsg = document.getElementById("msg");
let produto = {};
let produtos = [];
//     {
//         id: 0,
//         nome: 'banana',
//         descricao: 'amarela',
//         valor: 10,
//         incluidoEm: new Date().getTime()
//     },
//     {
//         id: 1,
//         nome: 'amora',
//         descricao: 'vermelha',
//         valor: 10,
//         incluidoEm: new Date().getTime()
//     },
//     {
//         id: 2,
//         nome: 'maça',
//         descricao: 'verde',
//         valor: 10,
//         incluidoEm: new Date().getTime()
//     },
//     {
//         id: 3,
//         nome: 'uva',
//         descricao: 'roxa',
//         valor: 10,
//         incluidoEm: new Date().getTime()
//     },
//     {
//         id: 4,
//         nome: 'abacate',
//         descricao: 'verde',
//         valor: 10,
//         incluidoEm: new Date().getTime()
//     }];
// let id = 5;
let id=1;
  

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
            throw 'Digite adescrição do produto.'
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
        'valor': parseFloat(parseFloat(value.value.replace(',', '.')).toFixed(2)),
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

function listar() {
    erroMsg.innerHTML="";
    divTable.style.display="flex"
    thead.style.display = "block"
    tbody.innerHTML = "";

    for( i = 0; i<produtos.length; i++ ) {
        let linha = document.createElement('tr')
        let colId = document.createElement('td')
        let colNome = document.createElement('td')
        let colValue = document.createElement('td')
        let colEdit = document.createElement('td')
        let colDelete = document.createElement('td')

        colId.innerHTML = `<span> ${produtos[i].id}</span>`;
        colNome.innerHTML = `<span id='produto' onclick="exibirProduto(${i})"> ${produtos[i].nome}</span>`;
        colValue.innerHTML = `R$ ${produtos[i].valor}`;
        colEdit.innerHTML = `<span class='bx bx-edit-alt'onclick="editProduto(${i})"></span>`;
        colDelete.innerHTML = `<span class='bx bx-trash' onclick="deleteProduto(${i})"></span>`;

        linha.appendChild(colId)
        linha.appendChild(colNome)
        linha.appendChild(colValue)
        linha.appendChild(colEdit)
        linha.appendChild(colDelete)
        tbody.appendChild(linha)
       
    }




}

function exibirProduto(id) {

    modalProduto.style.display = 'block';
    document.getElementById("exibirid").innerText = " id: "+ produtos[id].id;
    document.getElementById("exibirNome").innerText = " Produto: " + produtos[id].nome;
    document.getElementById("exibirdescricao").innerText = "Descrição: " + produtos[id].descricao;
    document.getElementById("exibirvalor").innerText = "Preço: R$" + produtos[id].valor;
    document.getElementById("incluidoEm").innerText = " Incluído em: " + new Date((produtos[id].incluidoEm)).toLocaleDateString("pt-BR");

}

function editProduto(id) {
    document.getElementById("product-name-edit").value = produtos[id].nome;
    document.getElementById("product-desc-edit").value = produtos[id].descricao;
    document.getElementById("product-value-edit").value = produtos[id].valor;

    divModal.style.display = 'block';
    document.getElementById("btn-edit").addEventListener('click', function () {
        editarModal(id)
    });

}


function editarModal(id) {
    let novoNome = document.getElementById("product-name-edit").value;
    let novaDesc = document.getElementById("product-desc-edit").value;
    let novoValor = document.getElementById("product-value-edit").value;

    //edita no objeto
    if (novoNome !== produtos[id].nome) {
        produtos[id].nome = novoNome;
    }
    if (novaDesc !== produtos[id].descricao) {
        produtos[id].descricao = novaDesc;
    }
    if (novoValor !== produtos[id].valor) {
        produtos[id].valor = parseFloat(novoValor);
    }
    //fechar a janela
    closeModal("modal-edit");
    listar();
}

function openModal(x) {

    if (typeof x == 'undefined' || x === null) {
        console.log(x);
        return;
    }
    divModal.style.display = 'block';
}


function closeModal(x) {
    const local = document.getElementById(x)

    if (typeof x == 'undefined' || x === null) {
        return;
    }
    local.style.display = 'none';
}

//deletando o primeiro item
function deleteProduto(id) {
    console.log(id, produtos[id]),
    produtos.splice(id, 1)
    listar()
    }
   

function ordenarNome() {
    produtos.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > a.nome) {
            return 1;
        }
    })
    listar()
}

function ordenarValor() {
    produtos.sort(function (a, b) {
        if (a.valor < b.valor) {
            return -1;
        }
        if (a.valor > a.valor) {
            return 1;
        }
    })
    listar()
}

function ordenarId() {
    produtos.sort(function (a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > a.id) {
            return 1;
        }
    })
    listar()
}

function pesquisar(){
    if(pesqUsuario.value === ""){
        return listar();
    }else{
        let pesquisado = produtos.filter(function(a){
            if (a.nome.includes(pesqUsuario.value.toLowerCase().trim())){
                console.log(a.nome)
                return true;
            }
            if (a.descricao.includes(pesqUsuario.value.toLowerCase().trim())){
                return true;
            }return false;
        });
        // console.log(pesqUsuario.value)
        // console.log(pesquisado);
        let produtosBackup = produtos;
        // console.log(produtos);

        produtos = pesquisado;
        listar();
        produtos = produtosBackup;
        
    }
}



