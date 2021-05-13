import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedioDePago } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MedioDePagoService {
  constructor(private _http: HttpClient) { }

  ListarMedioDePago():Observable<any> {
    return this._http.get('http://159.65.222.132:803/api/MediosDePago');
  }
  DeleteMedioDePago(id:number):Observable<any> {
    return this._http.delete('http://159.65.222.132:803/api/MediosDePago/'+id);
  }

  PostMedioDePago(pag:MedioDePago):Observable<any> {
    return this._http.post('http://159.65.222.132:803/api/MediosDePago',pag);
  }
  PutMedioDePago(pag:MedioDePago):Observable<any> {
    return this._http.put('http://159.65.222.132:803/api/MediosDePago/'+pag.id,pag);
  }
}