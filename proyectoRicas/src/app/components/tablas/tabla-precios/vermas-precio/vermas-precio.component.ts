import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreciosService } from 'src/app/services/precios.service';
import { precio } from 'src/app/other/interfaces';

@Component({
  selector: 'app-vermas-precio',
  templateUrl: './vermas-precio.component.html',
  styleUrls: ['./vermas-precio.component.css']
})
export class VermasPrecioComponent implements OnInit {

  constructor(private modalService: NgbModal,private _precio:PreciosService ) { }


  @Input() pre:precio;

  openLg(content) {
    this.modalService.open(content);
  }

ngOnInit(): void {
   
  }


}
