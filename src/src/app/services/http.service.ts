import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAnimeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/anime/${id}`);
  }

  getTopAnime(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top/anime`);
  }

  searchAnime(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/anime?q=${query}`);
  }
}
