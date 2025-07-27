import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { PratosService, Prato } from '../../services/pratos.services';
import { PedidosService, Pedido } from '../../services/pedidos.services';
import { RelatoriosService, TopClientePedidos, TopClienteGastos, PratoMaisPedido } from '../../services/relatorios.services';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  selectedSection: string | null = null;

  clientes: Cliente[] = [];
  clienteParaPost: Cliente = { nome: '', cpf: '' };
  clienteParaPut: Cliente = { id: 0, nome: '', cpf: '' };
  idClienteParaDelete: number | null = null;

  pratos: Prato[] = [];
  pratoParaPost: Prato = { nome: '', preco: 0 };
  pratoParaPut: Prato = { id: 0, nome: '', preco: 0 };
  idPratoParaDelete: number | null = null;

  pedidos: Pedido[] = [];
  pedidoParaPost: Pedido = { quantidade: 1, clienteId: 0, pratoId: 0 };
  pedidoParaPut: Pedido = { id: 0, quantidade: 1, clienteId: 0, pratoId: 0 };
  idPedidoParaDelete: number | null = null;

  topClientesPedidos: TopClientePedidos[] = [];
  topClientesGastos: TopClienteGastos[] = [];
  pratosMaisPedidos: PratoMaisPedido[] = [];

  selectedReport: string | null = null;

  loadReport(reportType: string) {
    this.selectedReport = reportType;

    switch (reportType) {
      case 'pedidos':
        this.getTopClientesPedidos();
        break;
      case 'gastos':
        this.getTopClientesGastos();
        break;
      case 'pratos':
        this.getPratosMaisPedidos();
        break;
    }
  }



  constructor(
    private clientesService: ClientesService,
    private pratosService: PratosService,
    private pedidosService: PedidosService,
    private relatoriosService: RelatoriosService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  openSection(section: string) {
    this.selectedSection = this.selectedSection === section ? null : section;
    if (section === 'relatorios') {
      this.getTopClientesPedidos();
      this.getTopClientesGastos();
      this.getPratosMaisPedidos();
    }
  }

  // CLIENTES
  getClientes() {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        console.log('Dados recebidos: ', data);
        this.clientes = data.dados;
      },
      error: (err) => console.error('Erro ao buscar clientes:', err)
    });
  }

  postCliente() {
    if (!this.clienteParaPost.nome || !this.clienteParaPost.cpf) {
      alert('Preencha nome e CPF para criar cliente');
      return;
    }
    this.clientesService.postClientes(this.clienteParaPost).subscribe({
      next: () => {
        alert('Cliente criado com sucesso!');
        this.getClientes();
        this.clienteParaPost = { nome: '', cpf: '' }; // limpar campos
      },
      error: (err) => console.error('Erro ao criar cliente:', err)
    });
  }

  putCliente() {
    if (!this.clienteParaPut.id || !this.clienteParaPut.nome || !this.clienteParaPut.cpf) {
      alert('Preencha id, nome e CPF para atualizar cliente');
      return;
    }
    this.clientesService.putClientes(this.clienteParaPut.id, this.clienteParaPut).subscribe({
      next: () => {
        alert('Cliente atualizado com sucesso!');
        this.getClientes();
        this.clienteParaPut = { id: 0, nome: '', cpf: '' }; // limpar campos
      },
      error: (err) => console.error('Erro ao atualizar cliente:', err)
    });
  }

  deleteClientes() {
    if (!this.idClienteParaDelete) {
      alert('Informe o ID do cliente para deletar');
      return;
    }
    this.clientesService.deleteClientes(this.idClienteParaDelete).subscribe({
      next: () => {
        alert('Cliente deletado com sucesso!');
        this.getClientes();
        this.idClienteParaDelete = null; // limpar campo
      },
      error: (err) => console.error('Erro ao deletar cliente:', err)
    });
  }

  // PRATOS
  getPratos() {
    this.pratosService.getPratos().subscribe({
      next: (data) => {
        this.pratos = data.dados;
      },
      error: (err) => console.error('Erro ao buscar pratos:', err)
    });
  }

  postPrato() {
    if (!this.pratoParaPost.nome || !this.pratoParaPost.preco) {
      alert('Preencha nome e preço do prato');
      return;
    }
    this.pratosService.postPratos(this.pratoParaPost).subscribe({
      next: () => {
        alert('Prato criado com sucesso!');
        this.getPratos();
        this.pratoParaPost = { nome: '', preco: 0 };
      },
      error: (err) => console.error('Erro ao criar prato:', err)
    });
  }

  putPrato() {
    if (!this.pratoParaPut.id || !this.pratoParaPut.nome || !this.pratoParaPut.preco) {
      alert('Preencha ID, nome e preço do prato');
      return;
    }
    this.pratosService.putPratos(this.pratoParaPut.id, this.pratoParaPut).subscribe({
      next: () => {
        alert('Prato atualizado!');
        this.getPratos();
        this.pratoParaPut = { id: 0, nome: '', preco: 0 };
      },
      error: (err) => console.error('Erro ao atualizar prato:', err)
    });
  }

  deletePrato() {
    if (!this.idPratoParaDelete) {
      alert('Informe o ID do prato para deletar');
      return;
    }
    this.pratosService.deletePratos(this.idPratoParaDelete).subscribe({
      next: () => {
        alert('Prato deletado com sucesso!');
        this.getPratos();
        this.idPratoParaDelete = null;
      },
      error: (err) => console.error('Erro ao deletar prato:', err)
    });
  }

  //PEDIDOS
  getPedidos() {
    this.pedidosService.getPedidos().subscribe({
      next: (res) => {
        this.pedidos = res.dados;
      },
      error: (err) => console.error('Erro ao buscar pedidos:', err)
    });
  }

  postPedido() {
    const { quantidade, clienteId, pratoId } = this.pedidoParaPost;
    if (!quantidade || !clienteId || !pratoId) {
      alert('Preencha quantidade, clienteId e pratoId');
      return;
    }
    this.pedidosService.postPedido(this.pedidoParaPost).subscribe({
      next: () => {
        alert('Pedido criado com sucesso!');
        this.getPedidos();
        this.pedidoParaPost = { quantidade: 1, clienteId: 0, pratoId: 0 };
      },
      error: (err) => console.error('Erro ao criar pedido:', err)
    });
  }

  putPedido() {
    const { id, quantidade, clienteId, pratoId } = this.pedidoParaPut;
    if (!id || !quantidade || !clienteId || !pratoId) {
      alert('Preencha id, quantidade, clienteId e pratoId');
      return;
    }
    this.pedidosService.putPedido(id, this.pedidoParaPut).subscribe({
      next: () => {
        alert('Pedido atualizado com sucesso!');
        this.getPedidos();
        this.pedidoParaPut = { id: 0, quantidade: 1, clienteId: 0, pratoId: 0 };
      },
      error: (err) => console.error('Erro ao atualizar pedido:', err)
    });
  }

  deletePedido() {
    if (!this.idPedidoParaDelete) {
      alert('Informe o ID do pedido para deletar');
      return;
    }
    this.pedidosService.deletePedido(this.idPedidoParaDelete).subscribe({
      next: () => {
        alert('Pedido deletado com sucesso!');
        this.getPedidos();
        this.idPedidoParaDelete = null;
      },
      error: (err) => console.error('Erro ao deletar pedido:', err)
    });
  }

  // RELATÓRIOS
  getTopClientesPedidos() {
    this.relatoriosService.getTopClientesPedidos().subscribe({
      next: (res) => this.topClientesPedidos = res.dados,
      error: (err) => console.error('Erro ao buscar top clientes por pedidos:', err)
    });
  }

  getTopClientesGastos() {
  this.relatoriosService.getTopClientesGastos().subscribe({
    next: (res) => {
      console.log(res.dados[0]);
      this.topClientesGastos = res.dados; // 👈 Isso só funciona se "dados" for uma chave do objeto
    },
    error: (err) => {
      console.error('Erro ao buscar top clientes por gastos:', err);
    }
  });
}


  getPratosMaisPedidos() {
    this.relatoriosService.getPratosMaisPedidos().subscribe({
      next: (res) => this.pratosMaisPedidos = res.dados,
      error: (err) => console.error('Erro ao buscar pratos mais pedidos:', err)
    });
  }


}
