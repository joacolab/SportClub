import { Component, OnInit } from '@angular/core';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { prestador } from 'src/app/other/interfaces';

@Component({
  selector: 'app-tabla-prestadoresdesalud',
  templateUrl: './tabla-prestadoresdesalud.component.html',
  styleUrls: ['./tabla-prestadoresdesalud.component.css']
})
export class TablaPrestadoresdesaludComponent implements OnInit {

  constructor(private _serv:PrestadoresSaludService) { }
  lista:prestador[];
  page = 1;
  pageSize = 4;
  collectionSize ;
  pre:prestador={
    nombre:"",
    activo:null
  }

  ngOnInit(): void {
    this.listarPrestadores();
  }

  listarPrestadores(){
    this._serv.ListaPrestador().subscribe(request=>{
      this.lista=request;
    })
  }
  eliminarPrestador(id:number){
    this._serv.EliminarPrestador(id).subscribe(resp=>{
    })
  }
 
}
