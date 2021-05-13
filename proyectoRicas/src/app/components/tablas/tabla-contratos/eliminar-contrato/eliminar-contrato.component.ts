import { Component, OnInit, Input } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TablaContratosComponent } from '../tabla-contratos.component';

@Component({
  selector: 'app-eliminar-contrato',
  templateUrl: './eliminar-contrato.component.html',
  styleUrls: ['./eliminar-contrato.component.css']
})
export class EliminarContratoComponent implements OnInit {

  constructor(private modalService: NgbModal, private _serv:ContratoService,private _recar:TablaContratosComponent) { }

  @Input() id:number;
  ngOnInit(): void {
  }

  openLg(content) {
    this.modalService.open(content);
  }
  borrar(){
    this._serv.BorrarContrato(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  }

}
