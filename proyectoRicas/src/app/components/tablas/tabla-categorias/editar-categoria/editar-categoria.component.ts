import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categoria } from 'src/app/other/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TablaCategoriasComponent } from '../tabla-categorias.component';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
 
constructor(private modalService: NgbModal,private _serv:CategoriasService,private TCA:TablaCategoriasComponent) { }

  @Input() cat:categoria;
  closeResult: string;
  activo1:string


  ngOnInit(): void {
    if(this.cat.activo == true)
      this.activo1 = "true"
    else
    this.activo1 = "false"  
    
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
PutCategoria(){

  if(this.activo1 == "true"){
    this.cat.activo =true;
  }
  else{
    this.cat.activo = false;
  }
  this._serv.PutCategoria(this.cat).subscribe(response=>{
    this.TCA.ngOnInit();
  })
}

}
