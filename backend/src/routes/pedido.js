const express = require("express");
const router = express.Router();

const PedidoController = require("../Controllers/pedidoController");

const { checkQuantidadeValida, checkValorTotalValido } = require("../middlewares/middleware");

// Criar pedido
router.post("/", checkQuantidadeValida, checkValorTotalValido, PedidoController.criar);

// Listar todos os pedidos
router.get("/", PedidoController.listar);

// Atualizar pedido
router.put("/:id", PedidoController.atualizar);

// Deletar pedido
router.delete("/:id", PedidoController.remover);

module.exports = router;
