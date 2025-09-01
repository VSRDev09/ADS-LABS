const Cliente = require("../Models/cliente");
const { validarCPF } = require("../validators/cpfValidator");

function listar(filtro = {}) {
    return Cliente.findAll({
        where: filtro,
        attributes: ['id', 'nome', 'cpf']
    });
}

function criar(dados){
    if (!dados.nome || typeof dados.nome !== 'string' || dados.nome.length < 3 || dados.nome.length > 100) {
        return Promise.reject(new Error("Nome do cliente deve ter entre 3 e 100 caracteres"));
    }
    if (!dados.cpf || typeof dados.cpf !== 'string' || !validarCPF(dados.cpf)) {
        return Promise.reject(new Error("CPF inválido"));
    }
    return Cliente.create(dados);
}

function atualizar(id, dados) {
    return Cliente.findByPk(id).then(cliente => {
        if(!cliente) return null;

        return cliente.update(dados);
    });
}

function remover(id) {
    return Cliente.findByPk(id).then(cliente => {
        if (!cliente) return null;

        return cliente.destroy();
    });
}




module.exports = { listar, criar, atualizar, remover };