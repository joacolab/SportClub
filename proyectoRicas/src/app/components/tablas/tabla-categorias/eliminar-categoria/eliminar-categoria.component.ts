import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TablaCategoriasComponent } from '../tabla-categorias.component';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent implements OnInit {

    
  constructor( private modalService: NgbModal, private _cat:CategoriasService,private TCA:TablaCategoriasComponent) { }
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
    this._cat.DeleteCategoria(this.id).subscribe(Response=>{
      this.TCA.ngOnInit();      
    })
  }
}


