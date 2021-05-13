import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Actividad } from 'src/app/other/interfaces';
import { TablaActividadesComponent } from '../tabla-actividades.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent implements OnInit {

  constructor(private modalService: NgbModal, private _actividad:ActividadesService,private _recar:TablaActividadesComponent) { }

    closeResult: string;
    activo1: string ;
    @Input() act:Actividad;
    public mr: NgbModalRef;
    
  ngOnInit(): void {
    if(this.act.activo == true){
      this.activo1 ="true"
    }
    else{
      this.activo1 = "false"
    }
  }
  nombre = new FormControl(' ', [Validators.required]);
  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }

  

  PutActividad() {
    if (this.nombre.valid) {
      if (this.activo1 == "true") {
        this.act.activo = true;
      }
      else {
        this.act.activo = false;
      }

      this._actividad.PutActividad(this.act).subscribe(Response => {
        this.mr.close();
        this._recar.ngOnInit();
      })
     
    }
  }
}