import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoria } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private _http: HttpClient) { }


  ListarCategorias():Observable<categoria[]>{
    return this._http.get<any>("http://159.65.222.132:803/api/Categorias");
  }
  
  CrearCategoria(cat:categoria):Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Categorias',cat);
  }
  
  DeleteCategoria(id:number):Observable<any>{
    return this._http.delete('http://159.65.222.132:803/api/Categorias/'+id);
  }

  PutCategoria(cat:categoria):Observable<any>{
    return this._http.put('http://159.65.222.132:803/api/Categorias/'+cat.id,cat);
  }

}

