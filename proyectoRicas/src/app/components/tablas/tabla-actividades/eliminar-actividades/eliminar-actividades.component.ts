import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActividadesService } from 'src/app/services/actividades.service';
import { TablaActividadesComponent } from '../tabla-actividades.component';

@Component({
  selector: 'app-eliminar-actividades',
  templateUrl: './eliminar-actividades.component.html',
  styleUrls: ['./eliminar-actividades.component.css']
})
export class EliminarActividadesComponent implements OnInit {

  
  constructor( private modalService: NgbModal, private _act:ActividadesService,private _recar:TablaActividadesComponent) { }
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
    this._act.EliminarActividad(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  }
}
