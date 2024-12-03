const cpf = document.getElementById('cpf');
const nome = document.getElementById('nome');
const funcao = document.getElementById('funcao');
const btnSave = document.getElementById('btnSave');
const listaFuncionarios = document.getElementById('listaFuncionarios'); 

function salvarFuncionario() {
    const funcionario = {
        cpf: cpf.value,
        nome: nome.value,
        funcao: funcao.value
    };

    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.push(funcionario);
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    console.log('Funcionário salvo com sucesso!', funcionario);
    console.log(funcionarios)
    limparCampos();
    exibirFuncionarios(); 
}

function limparCampos() {
    cpf.value = '';
    nome.value = '';
    funcao.value = '';
}

function exibirFuncionarios() {
    
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

    
    listaFuncionarios.innerHTML = '';

    
    funcionarios.forEach((funcionario, index) => {
        const funcionarioDiv = document.createElement('div');
        funcionarioDiv.classList.add('funcionario'); 
        funcionarioDiv.innerHTML = `
            <p><strong>Funcionário ${index + 1}</strong></p>
            <p>CPF: ${funcionario.cpf}</p>
            <p>Nome: ${funcionario.nome}</p>
            <p>Função: ${funcionario.funcao}</p>
            <hr>
        `;
        listaFuncionarios.appendChild(funcionarioDiv);
    });
}

btnSave.addEventListener('click', salvarFuncionario);

document.addEventListener('DOMContentLoaded', exibirFuncionarios);
