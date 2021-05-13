import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, asapScheduler } from 'rxjs';
import { Noticia } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) {}

  ListaNoticias():Observable<any> {
    return this._http.get('http://159.65.222.132:803/api/Noticias/Activas');
  }

  PaginarNoticias(id1:number,id2:number):Observable<any>{
    return this._http.get('http://159.65.222.132:803/api/Noticias/Paged/'+id1+"/"+id2)
  }

  CrearNoticia(not:Noticia):Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Noticias',not);
  }
  
  BorarNoticia(id:number):Observable<any>{
    return this._http.delete('http://159.65.222.132:803/api/Noticias/'+id);
  }

  ActualizarNoticia(id:number,not:Noticia):Observable<any>{
    return this._http.put('http://159.65.222.132:803/api/Noticias/'+id,not);
  }
}

