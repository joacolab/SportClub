import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private _http: HttpClient) { }

ListarContrato():Observable<any> {
  return this._http.get('http://159.65.222.132:803/api/Contratos');
}
CrearContrato(cont:Contrato):Observable<any> {
  return this._http.post('http://159.65.222.132:803/api/Contratos',cont);
}
EditarContrato(cont:Contrato):Observable<any> {
  return this._http.put('http://159.65.222.132:803/api/Contratos/'+cont.id_Contrato,cont);
}
BorrarContrato(id:number):Observable<any>{
  return this._http.delete('http://159.65.222.132:803/api/Contratos/'+id);
}

}