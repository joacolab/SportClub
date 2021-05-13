import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConvenioService } from 'src/app/services/convenio.service';
import { Convenio } from 'src/app/other/interfaces';
import { TablaConveniosComponent } from '../tabla-convenios.component';

@Component({
  selector: 'app-crear-convenio',
  templateUrl: './crear-convenio.component.html',
  styleUrls: ['./crear-convenio.component.css']
})
export class CrearConvenioComponent implements OnInit {

  constructor(private modalService: NgbModal,private _convenio:ConvenioService,private _recargar:TablaConveniosComponent) {}

    closeResult: string;
    activo1: string ="true";

    con:Convenio={
      nombre:"",
      porcentajeDescuento:0,
      activo:null
    }


  ngOnInit(): void {}

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

  PostConvenio(){

    if(this.activo1 == "true"){
      this.con.activo =true;
    }
    else{
      this.con.activo = false;
    }

    this._convenio.PostConvenio(this.con).subscribe(Response =>{

    })
    this._recargar.ngOnInit();
    

  }
}