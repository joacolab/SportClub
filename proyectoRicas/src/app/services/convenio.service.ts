import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convenio } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  constructor(private _http: HttpClient) { }

ListarConvenio():Observable<any> {
  return this._http.get('http://159.65.222.132:803/api/Convenios');
}

 PostConvenio(con:Convenio):Observable<any> {
  return this._http.post('http://159.65.222.132:803/api/Convenios',con);
}

PutConvenio(con:Convenio):Observable<any> {
  return this._http.put('http://159.65.222.132:803/api/Convenios/'+con.id,con);
}

DeleteConvenio(id:number):Observable<any>{
  return this._http.delete('http://159.65.222.132:803/api/Convenios/'+id);
}



}