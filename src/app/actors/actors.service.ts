import { Injectable } from '@angular/core';
import { actorCrationDTO, actorDTO, actorsMovieDTO } from './actors.models';
import { formatDateFormData } from '../utilities/utils';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + '/actors'


 get(page: number, recordsPerPage: number): Observable<any>{
  let params = new HttpParams();
  params = params.append('page', page.toString());
  params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response',params});
  }


  searchByName(name: string) : Observable<actorsMovieDTO[]>{
    const headers =new HttpHeaders('Content-Type: application/json');
    return this.http.post<actorsMovieDTO[]>(`${this.apiURL}/searchByName`, 
    JSON.stringify(name),{headers});
  }


  getById(id: number): Observable<actorDTO>{
    return  this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }





  edit(id: number, actor: actorCrationDTO){
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }




  create (actor: actorCrationDTO){
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);

  }

  private buildFormData( actor: actorCrationDTO): FormData{
    const formData = new FormData;

    formData.append('name',actor.name);

    if(actor.biography){
      formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth){
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;
  }


}
