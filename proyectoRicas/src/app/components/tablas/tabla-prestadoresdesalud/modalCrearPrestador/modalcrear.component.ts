import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { prestador } from 'src/app/other/interfaces';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { TablaPrestadoresdesaludComponent } from 'src/app/components/tablas/tabla-prestadoresdesalud/tabla-prestadoresdesalud.component';

@Component({
  selector: 'app-modalcrear',
  templateUrl: './modalcrear.component.html',
  styleUrls: ['./modalcrear.component.css']
})
export class ModalcrearComponent implements OnInit {

constructor(private modalService: NgbModal,private _serv:PrestadoresSaludService,private _recar:TablaPrestadoresdesaludComponent) { }

   pre:prestador={
     nombre:"",
     activo:null
   }
  activo1:string ="true";
  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content);
  }
  crearPrestador(){
    if(this.activo1 == "true"){
      this.pre.activo=true;
    }
    else{
      this.pre.activo = false;
    }
    this._serv.CrearPrestador(this.pre).subscribe(request=>{
      this._recar.ngOnInit();
    });
   
    
    

  }
}
