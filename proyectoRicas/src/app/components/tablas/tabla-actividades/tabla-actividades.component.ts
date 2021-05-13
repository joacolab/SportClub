import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Actividad } from 'src/app/other/interfaces';

@Component({
  selector: 'app-tabla-actividades',
  templateUrl: './tabla-actividades.component.html',
  styleUrls: ['./tabla-actividades.component.css']
})
export class TablaActividadesComponent  {
  id : number;
  actividades :Actividad[] ;


  constructor(private _Lista:ActividadesService ) { }
  ngOnInit(): void {
      this.getAct();
  }

  getAct(){
    this._Lista.ListarActividad().subscribe(Response =>{
      this.actividades = Response;
      })
  }


  DeleteActividad(id:number){
    this._Lista.DeleteActividad(id).subscribe(Response =>{
    })
  }



  }