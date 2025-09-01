const Pedido = require("../Models/pedido");
const Cliente = require("../Models/cliente");
const Prato = require("../Models/prato");

function listar(filtro = {}) {
    return Pedido.findAll({
        where: filtro,
        attributes: ['id', 'quantidade', 'valorTotal'],
        include: [
            {
                model: Cliente,
                attributes: ['id', 'nome']
            },
            {
                model: Prato,
                attributes: ['id', 'nome', 'preco']
            }
        ]
    });
}

async function criar(dados) {
    if (!dados.clienteId || typeof dados.clienteId !== 'number') {
        return Promise.reject(new Error("clienteId é obrigatório e deve ser um número"));
    }
    if (!dados.pratoId || typeof dados.pratoId !== 'number') {
        return Promise.reject(new Error("pratoId é obrigatório e deve ser um número"));
    }
    if (!dados.quantidade || typeof dados.quantidade !== "number" || dados.quantidade < 1 || dados.quantidade > 100) {
        return Promise.reject(new Error("Quantidade deve ser um número inteiro entre 1 e 100"));
    }

    const cliente = await Cliente.findByPk(dados.clienteId);
    if (!cliente) {
        return Promise.reject(new Error("Cliente não encontrado"));
    }

    const prato = await Prato.findByPk(dados.pratoId);
    if (!prato) {
        return Promise.reject(new Error("Prato não encontrado"));
    }

    const valorTotal = prato.preco * dados.quantidade;

    return Pedido.create({
        clienteId: dados.clienteId,
        pratoId: dados.pratoId,
        quantidade: dados.quantidade,
        valorTotal: valorTotal
    });
}

async function atualizar(id, dados) {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) return null;

    if (dados.clienteId) {
        let cliente = await Cliente.findByPk(dados.clienteId);
        if (!cliente) return Promise.reject(new Error("Cliente não encontrado"));
    }
    if (dados.pratoId) {
        let pratoCheck = await Prato.findByPk(dados.pratoId);
        if (!pratoCheck) return Promise.reject(new Error("Prato não encontrado"));
    }

    if (dados.quantidade !== undefined) {
        if (typeof dados.quantidade !== "number" || dados.quantidade <= 0) {
            return Promise.reject(new Error("Quantidade deve ser um número inteiro positivo"));
        }
    }

    let prato = null;
    if (dados.pratoId) {
        prato = await Prato.findByPk(dados.pratoId);
    } else {
        prato = await Prato.findByPk(pedido.pratoId);
    }

    let quantidade = dados.quantidade !== undefined ? dados.quantidade : pedido.quantidade;
    let valorTotal = prato.preco * quantidade;

    return pedido.update({
        ...dados,
        valorTotal: valorTotal
    });
}

async function remover(id) {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) return null;

    return pedido.destroy();
}

module.exports = { listar, criar, atualizar, remover };
