import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/other/interfaces';
import { ConvenioService } from 'src/app/services/convenio.service';



@Component({
  selector: 'app-tabla-convenios',
  templateUrl: './tabla-convenios.component.html',
  styleUrls: ['./tabla-convenios.component.css']
})
export class TablaConveniosComponent implements OnInit {
  id : number;
  constructor(private _serv:ConvenioService ) { }

  ngOnInit(): void {
      this.getConv();
    }
    convenios :Convenio[] ;


    getConv(){
      this._serv.ListarConvenio().subscribe(Response =>{
        this.convenios = Response;
      })
     }


     DeleteConvenio(id:number){
      this._serv.DeleteConvenio(id).subscribe(Response =>{
        window.location.reload();
      })
     }

  }