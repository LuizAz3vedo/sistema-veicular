import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../../Veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:3000/veiculo';

  constructor(private http: HttpClient) {}

  // Obter todos os veículos
  getAll(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }


  getById(id: string | number): Observable<Veiculo> {
  
    const idString = String(id);
    return this.http.get<Veiculo>(`${this.apiUrl}/${idString}`);
  }


 
  getByMarca(marca: string): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}?marca=${marca}`);
  }

  
  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

  
  update(id: string, veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`${this.apiUrl}/${id}`, veiculo);
  }

 
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
