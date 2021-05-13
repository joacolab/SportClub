import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { PreciosService } from 'src/app/services/precios.service';
import { precio, categoria } from 'src/app/other/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TablaPreciosComponent } from '../tabla-precios.component';

@Component({
  selector: 'app-editar-precio',
  templateUrl: './editar-precio.component.html',
  styleUrls: ['./editar-precio.component.css']
})
export class EditarPreciosComponent implements OnInit {


  constructor(private modalService: NgbModal,private _precios:PreciosService,private _cat:CategoriasService,private _recar:TablaPreciosComponent) { }
    model: NgbDateStruct;
    c:string;
    ListaC:categoria[];
    closeResult: string
    @Input() pre:precio;

  ngOnInit(): void {
    this.ListarCategorias();
    this.c = this.pre.categoria.id.toString();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  ListarCategorias(){
    this._cat.ListarCategorias().subscribe(response=>{
      this.ListaC = response;
    })
  }
  PutPrecios(){
    if(this.model != null){
    this.pre.fechaVigencia = new Date(this.model.year,this.model.month,this.model.day);
    }
    this.pre.categoria.id = Number(this.c);
    this._precios.PutPrecios(this.pre).subscribe(Response =>{
        this._recar.ngOnInit();
    })

  }

}
