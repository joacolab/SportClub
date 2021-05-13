import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Convenio } from 'src/app/other/interfaces';
import { HttpClient } from '@angular/common/http';
import { ConvenioService } from 'src/app/services/convenio.service';
import { TablaConveniosComponent } from '../tabla-convenios.component';

@Component({
  selector: 'app-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  styleUrls: ['./editar-convenio.component.css']
})
export class EditarConvenioComponent implements OnInit {

  constructor(private modalService: NgbModal,private _convenio:ConvenioService,private _recargar:TablaConveniosComponent) {}

    closeResult: string;
    activo1: string;
    @Input() con:Convenio;

  ngOnInit(): void {
    if(this.con.activo == true){
      this.activo1 = "true"
    }
    else{
      this.activo1 = "false"
    }
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

  PutConvenio(){

    if(this.activo1 == "true"){
      this.con.activo =true;
    }
    else{
      this.con.activo = false;
    }

    this._convenio.PutConvenio(this.con).subscribe(Response =>{
     
    })
    this._recargar.ngOnInit();
  }
}