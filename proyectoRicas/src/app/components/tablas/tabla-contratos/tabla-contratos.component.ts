import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { ContratoCompleto } from 'src/app/other/interfaces';

@Component({

  selector: 'app-tabla-contratos',
  templateUrl: './tabla-contratos.component.html',
  styleUrls: ['./tabla-contratos.component.css']
  
})
export class TablaContratosComponent implements OnInit {

  contratos:ContratoCompleto[];

  constructor(private _contrato:ContratoService ) { }
  ngOnInit(): void {
      this.getContrato();
    }


    getContrato(){
      this._contrato.ListarContrato().subscribe(Response =>{
        this.contratos = Response;
      })
     }
}
