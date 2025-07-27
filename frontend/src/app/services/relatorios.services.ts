import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TopClientePedidos {
  cliente: string;
  totalPedidos: number;
}

export interface TopClienteGastos {
  cliente: string;
  valorGasto: string;
}

export interface PratoMaisPedido {
  prato: string;
  quantidade: number;
}

export interface TopClienteGastosResponse {
  dados: TopClienteGastos[];
}

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {
  private apiUrl = 'http://localhost:3000/relatorios';

  constructor(private http: HttpClient) {}

 getTopClientesPedidos(): Observable<{ dados: TopClientePedidos[] }> {
  return this.http.get<{ dados: TopClientePedidos[] }>(`${this.apiUrl}/clientes-mais-pedidos`);
}

getTopClientesGastos(): Observable<{ dados: TopClienteGastos[] }> {
  return this.http.get<{ dados: TopClienteGastos[] }>(`${this.apiUrl}/clientes-mais-gastaram`);
}

getPratosMaisPedidos(): Observable<{ dados: PratoMaisPedido[] }> {
  return this.http.get<{ dados: PratoMaisPedido[] }>(`${this.apiUrl}/pratos-mais-pedidos`);
}

}
