import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { MedioDePago} from 'src/app/other/interfaces';
import { TablaMedioDePagoComponent } from '../tabla-pagos.component';


@Component({
  selector: 'app-crear-pagos',
  templateUrl: './crear-pagos.component.html',
  styleUrls: ['./crear-pagos.component.css']
})
export class CrearMedioDePagoComponent implements OnInit {

 
  constructor(private modalService: NgbModal,private _medioDePago:MedioDePagoService,private _recar:TablaMedioDePagoComponent) { }

    closeResult: string;
    
    pag:MedioDePago={
      nombre:"",
      activo:null
    }
    activo1: string = "true";



  ngOnInit(): void {
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
  PostMedioDePago(){
    if(this.activo1 == "true"){
      this.pag.activo =true;
    }
    else{
      this.pag.activo = false;
    }
    this._medioDePago.PostMedioDePago(this.pag).subscribe(Response =>{
      this._recar.ngOnInit();
    })

  }

}