import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private apiUrl = 'https://api.jikan.moe/v4/anime'; // URL base de la API

  constructor(private http: HttpClient) {}

  getAnimes(page: number = 1, query: string = ''): Observable<any> {
    const searchQuery = query ? `&q=${query}` : '';
    return this.http.get<any>(`${this.apiUrl}?page=${page}${searchQuery}`);
  }

  getAnimeDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
