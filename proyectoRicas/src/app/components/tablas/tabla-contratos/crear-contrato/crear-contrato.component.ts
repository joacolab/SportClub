import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato, Persona, Convenio, categoria, MedioDePago } from 'src/app/other/interfaces';
import { PersonaService } from 'src/app/services/persona.service';
import { ConvenioService } from 'src/app/services/convenio.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { TablaContratosComponent } from '../tabla-contratos.component';


@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent implements OnInit {

  constructor(private modalService: NgbModal,private _contrato:ContratoService,
    private _persona:PersonaService,private _convenio:ConvenioService,private _categoria:CategoriasService,
    private _medio:MedioDePagoService,private _recar:TablaContratosComponent) { }

    closeResult: string;
    activo1: string ;
    model: NgbDateStruct;
    personas:Persona[]
    convenios:Convenio[]
    categorias:categoria[]
    medios:MedioDePago[]
    cont:Contrato={
      usuarioGenero: "",
      fechaComienzo: null,
      id_Persona: 0,
      id_Convenio: 0,
      id_Categoria: 0,
      id_MedioDePago: 0,
      activo: null
  }

  

  ngOnInit(): void {
    this.listarTodo()
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  listarTodo(){

    this._persona.ListarPersona().subscribe(response=>{
      this.personas = response;
    })
    this._convenio.ListarConvenio().subscribe(response=>{
      this.convenios = response;
    })
    this._categoria.ListarCategorias().subscribe(response=>{
      this.categorias = response;
    })
    this._medio.ListarMedioDePago().subscribe(response=>{
      this.medios = response;
    })


  }

  CrearContrato(){
    this.cont.fechaComienzo = new Date(this.model.year,this.model.month,this.model.day);

    if(this.activo1 == "true"){
      this.cont.activo=true;
    }
    else{
      this.cont.activo = false;
    }

    this.cont.id_Categoria = Number(this.cont.id_Categoria);
    this.cont.id_Convenio = Number(this.cont.id_Convenio);
    this.cont.id_MedioDePago = Number(this.cont.id_MedioDePago);
    this.cont.id_Persona = Number(this.cont.id_Persona);
        this._contrato.CrearContrato(this.cont).subscribe(Response =>{
          this._recar.ngOnInit();

    })

  }

}