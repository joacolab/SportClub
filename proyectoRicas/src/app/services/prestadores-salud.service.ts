import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { prestador  } from '../other/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PrestadoresSaludService {

  constructor(
    private _http: HttpClient
  ) { }

ListaPrestador():Observable<any> {
  return this._http.get<any>('http://159.65.222.132:803/api/PrestadoresDeSalud');
}

CrearPrestador(pre:prestador):Observable<any>{
  return this._http.post('http://159.65.222.132:803/api/PrestadoresDeSalud',pre);
}

EditarPrestador(pre:prestador):Observable<any>{
return this._http.put('http://159.65.222.132:803/api/PrestadoresDeSalud/'+pre.id,pre);
}

EliminarPrestador(id:number):Observable<any>{
return this._http.delete('http://159.65.222.132:803/api/PrestadoresDeSalud/'+id);
}

}