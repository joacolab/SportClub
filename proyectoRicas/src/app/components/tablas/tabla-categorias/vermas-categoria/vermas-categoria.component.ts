import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categoria, precio } from 'src/app/other/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-vermas-categoria',
  templateUrl: './vermas-categoria.component.html',
  styleUrls: ['./vermas-categoria.component.css']
})
export class VermasCategoriaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _categoria:CategoriasService ) { }



  @Input() cat:categoria;

  precios:precio[];

  openLg(content) {
    this.modalService.open(content);
  }

ngOnInit(): void {
  this.precios = this.cat.precios;
  }
}