const { validarQuantidade, validarValorTotal } = require("../validators/pedidoValidator");

const checkQuantidadeValida = (req, res, next) => {
    if (!validarQuantidade(req.body.quantidade)) {
        return res.status(400).json({ message: "Quantidade inválida (mínimo 1, máximo 100)" });
    }
    next();
};

const checkValorTotalValido = (req, res, next) => {
    const valorTotal = parseFloat(req.body.valorTotal);
    if (!validarValorTotal(valorTotal)) {
        return res.status(400).json({ message: "Valor total inválido (deve ser positivo e até 2 casas decimais)" });
    }
    next();
};
function checkCampoObrigatorio(campo, nomeCampo) {
    return (req, res, next) => {
        if (!req.body[campo]) {
            return res.status(400).json({ message: `Por favor envie o campo: ${nomeCampo}` });
        }
        next();
    };
}


const { validarCPF } = require("../validators/cpfValidator");

const checkNome = checkCampoObrigatorio("nome", "nome");

const checkCpfValido = (req, res, next) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(400).json({ message: "CPF é obrigatório" });
    }

    if (!validarCPF(cpf)) {
        return res.status(400).json({ message: "CPF inválido" });
    }
    next();
};

const { validarNome, validarPreco } = require("../validators/pratoValidator");

const checkPreco = checkCampoObrigatorio("preco", "preço");
const checkNomePrato = checkCampoObrigatorio("nome", "nome do prato");

const checkNomePratoValido = (req, res, next) => {
    if (!validarNome(req.body.nome)) {
        return res.status(400).json({ message: "Nome do prato inválido (mínimo 3, máximo 100 caracteres)" });
    }
    next();
};

const checkPrecoValido = (req, res, next) => {
    const preco = parseFloat(req.body.preco);
    if (!validarPreco(preco)) {
        return res.status(400).json({ message: "Preço inválido (deve ser positivo e até 2 casas decimais)" });
    }
    next();
};

module.exports = {
    checkNome,
    checkCpfValido,
    checkPreco,
    checkNomePrato,
    checkNomePratoValido,
    checkPrecoValido,
    checkQuantidadeValida,
    checkValorTotalValido
};