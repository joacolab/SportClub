import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private _http: HttpClient) { }

ListarActividad():Observable<any> {
  return this._http.get('http://159.65.222.132:803/api/Actividades');
}
DeleteActividad(id:number):Observable<any> {
  return this._http.delete('http://159.65.222.132:803/api/Actividades/'+id);
}
PostActividad(act:Actividad):Observable<any> {
  return this._http.post('http://159.65.222.132:803/api/Actividades/',act);
}
PutActividad(act:Actividad):Observable<any> {
  return this._http.put('http://159.65.222.132:803/api/Actividades/'+act.id,act);
}
EliminarActividad(id:number):Observable<any>{
  return this._http.delete('http://159.65.222.132:803/api/Actividades/'+id);
  }

}