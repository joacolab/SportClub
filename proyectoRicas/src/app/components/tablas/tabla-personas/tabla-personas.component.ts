import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona, prestador } from 'src/app/other/interfaces';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})

export class TablaPersonasComponent implements OnInit {

  id : number;
  prestador : prestador;
  personas :Persona[] ;


  constructor(private _persona:PersonaService ) { }

  ngOnInit(): void {
      this.getPersona();
    }

    getPersona(){
      this._persona.ListarPersona().subscribe(Response =>{
        this.personas = Response;
      })
     }

     DeletePersona(id:number){
      this._persona.DeletePersona(id).subscribe(Response =>{
      })
     }

}