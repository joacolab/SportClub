import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConvenioService } from 'src/app/services/convenio.service';
import { TablaConveniosComponent } from '../tabla-convenios.component';

@Component({
  selector: 'app-eliminar-convenio',
  templateUrl: './eliminar-convenio.component.html',
  styleUrls: ['./eliminar-convenio.component.css']
})
export class EliminarConvenioComponent implements OnInit {

  constructor( private modalService: NgbModal, private _con:ConvenioService,private _recar:TablaConveniosComponent) { }
  
  @Input() id:number;
  ngOnInit(): void {
  }
  closeResult: string;
  
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

  borrar(){
    this._con.DeleteConvenio(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  
  }

}

