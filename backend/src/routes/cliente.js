const express = require("express");
const router = express.Router();

const ClienteController = require("../Controllers/clienteController");
const { checkNome, checkCpf, checkCpfValido, checkCpfOpcional } = require("../middlewares/middleware");

// Criar cliente
router.post("/", checkNome, checkCpfValido, ClienteController.criar);

//Listar todos os clientes
router.get("/", ClienteController.listar);

// Deletar cliente 
router.delete("/:id", ClienteController.remover);

// atualizar cliente
router.put("/:id", checkNome, checkCpfValido, ClienteController.atualizar);

module.exports = router;