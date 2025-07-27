import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Prato {
    id?: number;
    nome: string;
    preco: number;
}

export interface PratosResponse{
    dados: Prato[];
}

@Injectable({
    providedIn: 'root'
})
export class PratosService {
    private apiUrl = 'http://localhost:3000/pratos';

    constructor(private http: HttpClient) {}

    getPratos(): Observable<PratosResponse> {
        return this.http.get<PratosResponse>(this.apiUrl);
      }
    
      postPratos(prato: Prato): Observable<Prato> {
        return this.http.post<Prato>(this.apiUrl, prato);
      }
    
      putPratos(id: number, prato: Prato): Observable<Prato> {
        return this.http.put<Prato>(`${this.apiUrl}/${id}`, prato);
      }
    
      deletePratos(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
      }

}