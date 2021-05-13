import { Component, OnInit, Input } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { categoria } from 'src/app/other/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TablaCategoriasComponent } from '../tabla-categorias.component';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _serv:CategoriasService,private TCA:TablaCategoriasComponent) { }

  ngOnInit(): void {
  }

  @Input() cat:categoria;

  closeResult: string;
cate:categoria={
  id: 0,
  nombre:"",
  activo: null,
  precios : null
}
activo1:string = "true"

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
}



crearCategoria(){
  this.cate.precios=[];
  if(this.activo1 == "true"){
    this.cate.activo =true;
  }
  else{
    this.cate.activo = false;
  }
  this._serv.CrearCategoria(this.cate).subscribe(response=>{
    this.TCA.ngOnInit();
  })
 

}

}





