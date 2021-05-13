import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/other/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.css']
})

export class TablaCategoriasComponent  {
 constructor(private _serv:CategoriasService) { }
  
  
  lista :categoria[];
  cate:categoria={
    id:0,
    nombre:"",
    activo:null,
    precios:null
}
ngOnInit(): void {
  this.listarCategorias();
}

listarCategorias(){
  this._serv.ListarCategorias().subscribe(response=>{
    this.lista = response;
  })
}
DeleteCategoria(id:number){
  this._serv.DeleteCategoria(id).subscribe(Response =>{
  })
 }

}
