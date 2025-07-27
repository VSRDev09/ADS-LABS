import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  nome: string;
  cpf: string;
}

export interface ClientesResponse {
  dados: Cliente[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/clientes'
  
  constructor(private http: HttpClient) {}

  getClientes(): Observable<ClientesResponse> {
    return this.http.get<ClientesResponse>(this.apiUrl);
  }

  postClientes(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  putClientes(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${id}`, cliente);
  }

  deleteClientes(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
