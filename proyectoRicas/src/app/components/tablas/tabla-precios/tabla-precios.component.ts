import { Component, OnInit } from '@angular/core';
import { precio } from 'src/app/other/interfaces';
import { PreciosService } from 'src/app/services/precios.service';



@Component({
  selector: 'app-tabla-precios',
  templateUrl: './tabla-precios.component.html',
  styleUrls: ['./tabla-precios.component.css']
})

export class TablaPreciosComponent implements OnInit {

  id : number;
  precios:precio[];
  constructor(private _serv:PreciosService ) { }

  ngOnInit(): void {
      this.getPrecios();
    }

    getPrecios(){
      this._serv.ListarPrecios().subscribe(Response =>{
        this.precios = Response;
      })
     }


     DeletePrecios(id:number){
      this._serv.DeletePrecios(id).subscribe(Response =>{
      })
     }


}