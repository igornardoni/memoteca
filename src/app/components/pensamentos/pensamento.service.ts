import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {
  private readonly apiUrl: string = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  // Lista de pensamentos da API
  getPensamentos(pagina: number): Observable<Pensamento[]> {
    const itensPorPagina= 6;

    let params = new HttpParams().set('_page', pagina).set('_limit', itensPorPagina);

    return this.http.get<Pensamento[]>(this.apiUrl, {params: params});
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

