import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { precio } from '../other/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  constructor(private _http: HttpClient) { }

ListarPrecios():Observable<any> {
  return this._http.get('http://159.65.222.132:803/api/Precios');
}
 
CrearPrecios(pre:precio):Observable<any> {
  console.log(pre)
  return this._http.post('http://159.65.222.132:803/api/Precios',pre);
}

PutPrecios(pre:precio):Observable<any> {
  return this._http.put('http://159.65.222.132:803/api/Precios/'+pre.id,pre);
}

DeletePrecios(id:number):Observable<any>{
  return this._http.delete('http://159.65.222.132:803/api/Precios/'+id);
}

}