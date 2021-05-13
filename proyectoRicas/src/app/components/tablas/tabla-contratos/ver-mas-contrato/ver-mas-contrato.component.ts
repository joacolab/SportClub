import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ContratoCompleto, precio } from 'src/app/other/interfaces';

@Component({
  selector: 'app-ver-mas-contrato',
  templateUrl: './ver-mas-contrato.component.html',
  styleUrls: ['./ver-mas-contrato.component.css']
})
export class VerMasContratoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  closeResult: string;  
  
 
  @Input() cont :ContratoCompleto;

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

}
