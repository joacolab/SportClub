import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PreciosService } from 'src/app/services/precios.service';
import {  categoria, precio } from 'src/app/other/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TablaPreciosComponent } from '../tabla-precios.component';


@Component({
  selector: 'app-crear-precio',
  templateUrl: './crear-precio.component.html',
  styleUrls: ['./crear-precio.component.css']
})
export class CrearPreciosComponent implements OnInit{

 
  constructor(private modalService: NgbModal,private _precios:PreciosService,private _cat:CategoriasService,private _recarg:TablaPreciosComponent) { }

  closeResult: string  
  model: NgbDateStruct;
  ListaC:categoria[];
  c:string;
  pre:precio={
    valor: 0,
    fechaVigencia: null,
    categoria:{
      id:0,
      nombre: "string",
      activo: false,
      precios:[null]
    }
  }

  ngOnInit(): void {
    this.ListarCategorias();
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ListarCategorias(){
    this._cat.ListarCategorias().subscribe(response=>{
      this.ListaC = response;
    })
  }

  crearPrecios(){
    this.pre.fechaVigencia = new Date(this.model.year,this.model.month,this.model.day);
    this.pre.categoria.id = Number(this.c)
    this._precios.CrearPrecios(this.pre).subscribe(Response =>{
      this._recarg.ngOnInit();
    })

  }
}