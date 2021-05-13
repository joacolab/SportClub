import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { TablaMedioDePagoComponent } from '../tabla-pagos.component';

@Component({
  selector: 'app-eliminar-pagos',
  templateUrl: './eliminar-pagos.component.html',
  styleUrls: ['./eliminar-pagos.component.css']
})
export class EliminarPagosComponent implements OnInit {

  constructor( private modalService: NgbModal, private _med:MedioDePagoService,private _recar:TablaMedioDePagoComponent) { }
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
    this._med.DeleteMedioDePago(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  }
}
