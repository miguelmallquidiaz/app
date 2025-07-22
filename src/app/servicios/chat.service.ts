import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://backend-asistente-ia.onrender.com/respuesta';

  constructor(private http: HttpClient) {}

  enviarPregunta(pregunta: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { pregunta });
  }
}