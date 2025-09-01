function validarQuantidade(quantidade) {
    return Number.isInteger(quantidade) && quantidade >= 1 && quantidade <= 100;
}

function validarValorTotal(valorTotal) {
    return typeof valorTotal === 'number' && valorTotal > 0 && valorTotal.toFixed(2) === valorTotal.toString();
}

module.exports = {
    validarQuantidade,
    validarValorTotal
};
