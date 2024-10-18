const form = document.getElementById('form-nomedocontato');
const imgCadastrado = '<img src="./images/verde.png" />';
const imgNaoCadastrado = '<img src="./images/vermelho.jpg" />';


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value ? imgCadastrado : imgNaoCadastrado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});