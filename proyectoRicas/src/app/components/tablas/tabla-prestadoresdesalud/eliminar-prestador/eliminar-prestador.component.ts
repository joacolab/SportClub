import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { TablaPrestadoresdesaludComponent } from '../tabla-prestadoresdesalud.component';

@Component({
  selector: 'app-eliminar-prestador',
  templateUrl: './eliminar-prestador.component.html',
  styleUrls: ['./eliminar-prestador.component.css']
})
export class EliminarPrestadorComponent implements OnInit {

  constructor( private modalService: NgbModal, private _serv:PrestadoresSaludService,private _recar:TablaPrestadoresdesaludComponent) { }
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
    this._serv.EliminarPrestador(this.id).subscribe(Response=>{
      this._recar.ngOnInit();
    })
  }

}
