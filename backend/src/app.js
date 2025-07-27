require('dotenv').config();      // 1. dotenv no topo
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());         // 2. json middleware

// CORS habilitado para o front-end Angular
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Importar rotas após criar app
const pedidoRoutes = require("./routes/pedido");
const relatorioRoutes = require("./routes/relatorio");
const clienteRoutes = require("./routes/cliente");  // Certifique-se de importar clienteRoutes também
const pratoRoutes = require("./routes/prato");      // Certifique-se de importar pratoRoutes também

// Usar as rotas
app.use("/clientes", clienteRoutes);
app.use("/pratos", pratoRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/relatorios", relatorioRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});

module.exports = app;
