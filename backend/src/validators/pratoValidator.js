function validarNome(nome) {
    return typeof nome === 'string' && nome.length >= 3 && nome.length <= 100;
}

function validarPreco(preco) {
    return typeof preco === 'number' && preco > 0 && preco.toFixed(2) === preco.toString();
}

module.exports = {
    validarNome,
    validarPreco
};
