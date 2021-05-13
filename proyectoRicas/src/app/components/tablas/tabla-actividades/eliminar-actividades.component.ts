import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-eliminar-actividades',
  templateUrl: './eliminar-actividades.component.html',
  styleUrls: ['./eliminar-actividades.component.css']
})
export class EliminarActividadesComponent implements OnInit {

  
  constructor( private modalService: NgbModal, private _act:ActividadesService) { }
  @Input() id:number;
  ngOnInit(): void {
  }

  openLg(content) {
    this.modalService.open(content);
  }
  borrar(){
    this._act.EliminarActividad(this.id).subscribe(Response=>{

    })
  }
}
