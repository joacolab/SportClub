import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { prestador } from 'src/app/other/interfaces';
import { TablaPrestadoresdesaludComponent } from '../tabla-prestadoresdesalud.component';

@Component({
  selector: 'app-modaleditar',
  templateUrl: './modaleditar.component.html',
  styleUrls: ['./modaleditar.component.css']
})
export class ModaleditarComponent implements OnInit {

  constructor(private modalService: NgbModal,private _serv:PrestadoresSaludService,private _recar:TablaPrestadoresdesaludComponent) { }
  @Input() pres:prestador;
  activo1:string;
  ngOnInit(): void {
    if(this.pres.activo == true){
      this.activo1 = "true";
    }
    else{
    this.activo1 = "false";
    }
  }
  open(content) {
    this.modalService.open(content);
  }
  
  editarPrestador(){
    if(this.activo1 == "true"){
      this.pres.activo =true;
    }
    else{
      this.pres.activo = false;
    }
    this._serv.EditarPrestador(this.pres).subscribe(request=>{
      this._recar.ngOnInit();
    });

  }
}
