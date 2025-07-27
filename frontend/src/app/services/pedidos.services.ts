import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pedido {
  id?: number;
  quantidade: number;
  valorTotal?: number; 
  clienteId: number;
  pratoId: number;
}

export interface PedidosResponse {
  dados: Pedido[];
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  
  getPedidos(): Observable<PedidosResponse> {
    return this.http.get<PedidosResponse>(this.apiUrl);
  }


  postPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

  
  putPedido(id: number, pedido: Pedido): Observable<Pedido> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.put<Pedido>(this.apiUrl, pedido, { params });
  }

 
  deletePedido(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(this.apiUrl, { params });
  }
}
