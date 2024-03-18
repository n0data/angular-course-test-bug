import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genres.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + '/genres'

  getAll(): Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<genreDTO>{
    return this.http.get<genreDTO>(`${this.apiURL}/${id}`);
  }


  create(genre: genreCreationDTO){
    return this.http.post(this.apiURL, genre);
  }


  edit(id:number, genre: genreCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }


  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
  