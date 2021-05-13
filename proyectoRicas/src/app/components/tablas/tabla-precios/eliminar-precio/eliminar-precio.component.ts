import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PreciosService } from 'src/app/services/precios.service';
import { TablaPreciosComponent } from '../tabla-precios.component';

@Component({
  selector: 'app-eliminar-precio',
  templateUrl: './eliminar-precio.component.html',
  styleUrls: ['./eliminar-precio.component.css']
})
export class EliminarPrecioComponent implements OnInit {

  constructor( private modalService: NgbModal, private _pre:PreciosService,private _recar:TablaPreciosComponent) { }
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
    this._pre.DeletePrecios(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  }
}
