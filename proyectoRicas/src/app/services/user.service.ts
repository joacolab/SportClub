import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogReg, Rol} from '../other/interfaces';
import {  HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
    private _http: HttpClient ) { 
    
  }

  asignarRol(rol:Rol):Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Account/addrole',rol)
  }

  listarRoles():Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Account/roles',"");
  }

  login(dat:LogReg): Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Account/login',
     dat
    ) 
  }
  register(dat:LogReg):Observable<any>{
    return this._http.post('http://159.65.222.132:803/api/Account/register',dat)
  }
  
}
