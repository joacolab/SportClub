import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _http: HttpClient) { }

  ListarPersona():Observable<Persona[]> {
    return this._http.get<Persona[]>('http://159.65.222.132:803/api/Personas');
  }

  DeletePersona(id:number):Observable<Persona> {
    return this._http.delete<Persona>('http://159.65.222.132:803/api/Personas/'+id);
  }
  
  PostPersona(per:Persona):Observable<any> {
    return this._http.post('http://159.65.222.132:803/api/Personas',per)
  };

  PutPersona(per:Persona):Observable<any>{
    return this._http.put('http://159.65.222.132:803/api/Personas/'+per.id,per)
  };
  
 
}