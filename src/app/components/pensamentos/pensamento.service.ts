import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {
  private readonly apiUrl: string = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  // Lista de pensamentos da API
  getPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.apiUrl);
  }

  // Criação de pensamentos
  createPensamentos(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.apiUrl, pensamento);
  }

  // Editar pensamentos
  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.apiUrl}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  // Excluir pensamentos
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  // Buscar pensamento pelo ID
  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pensamento>(url);
  }

}

