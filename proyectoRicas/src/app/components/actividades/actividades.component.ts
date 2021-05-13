import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Actividad } from 'src/app/other/interfaces';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  

  constructor(private _ListaAct:ActividadesService) { }

  ngOnInit(): void {
   this.getActividad();
  }
  actividad :Actividad[] ;


getActividad(){
 this._ListaAct.ListarActividad().subscribe(Response =>{
   this.actividad = Response;
   console.log(Response);
 })
}
}