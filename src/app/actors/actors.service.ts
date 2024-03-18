import { Injectable } from '@angular/core';
import { actorCrationDTO, actorDTO } from './actors.models';
import { formatDateForData } from '../utilities/utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + '/actors'


 get(): Observable<any>{
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response'});
  }


  // get(): Observable<actorDTO[]>{
  //   return this.http.get<actorDTO[]>(this.apiURL);
  // }


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
      formData.append('dateOfBirth', formatDateForData(actor.dateOfBirth));
    }

    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;
  }


}
