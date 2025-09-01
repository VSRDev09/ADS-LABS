const express = require("express");
const router = express.Router();

const PratoController = require("../Controllers/pratoController");
const { checkNomePrato, checkPreco, checkNomePratoValido, checkPrecoValido } = require("../middlewares/middleware");

// Criar prato
router.post("/", checkNomePrato, checkPreco, checkNomePratoValido, checkPrecoValido, PratoController.criar);

// Listar todos os pratos
router.get("/", PratoController.listar);

// Atualizar prato
router.put("/:id", PratoController.atualizar);

// Deletar prato
router.delete("/:id", PratoController.remover);

module.exports = router;
