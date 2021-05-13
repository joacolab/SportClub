import { Component, OnInit } from '@angular/core';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { MedioDePago } from 'src/app/other/interfaces';


@Component({
  selector: 'app-tabla-pagos',
  templateUrl: './tabla-pagos.component.html',
  styleUrls: ['./tabla-pagos.component.css']
})
export class TablaMedioDePagoComponent implements OnInit {
  id : number;
  medioDePagos :MedioDePago[];
  constructor(private _pago:MedioDePagoService) { }

  ngOnInit(): void {
    this.getMed();
  }

  


  getMed(){
    this._pago.ListarMedioDePago().subscribe(Response =>{
      this.medioDePagos = Response;
      console.log(Response);

    })
   }


   DeleteMedioDePago(id:number){
    this._pago.DeleteMedioDePago(id).subscribe(Response =>{
      window.location.reload();
    })
   }

}