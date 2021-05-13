import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Actividad } from 'src/app/other/interfaces';
import { TablaActividadesComponent } from '../tabla-actividades.component';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  constructor(private modalService: NgbModal,private _actividad:ActividadesService,private _recar:TablaActividadesComponent) { }

  closeResult: string;
  activo1:string= "true";
  act:Actividad={
    nombre:"",
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

  PostActividad(){
    if(this.activo1 == "true"){
      this.act.activo =true;
    }
    else{
      this.act.activo = false;
    }

    this._actividad.PostActividad(this.act).subscribe(Response =>{
        this._recar.ngOnInit();
    })

  }

}