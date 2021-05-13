import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato, Persona, Convenio, categoria, MedioDePago, ContratoCompleto } from 'src/app/other/interfaces';
import { PersonaService } from 'src/app/services/persona.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ConvenioService } from 'src/app/services/convenio.service';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { TablaContratosComponent } from '../tabla-contratos.component';

@Component({
  selector: 'app-editar-contrato',
  templateUrl: './editar-contrato.component.html',
  styleUrls: ['./editar-contrato.component.css']
})
export class EditarContratoComponent implements OnInit {


  constructor (private modalService: NgbModal,private _contrato:ContratoService,
  private _persona:PersonaService,private _convenio:ConvenioService,private _categoria:CategoriasService,
  private _medio:MedioDePagoService,private _recar:TablaContratosComponent) { }

    @Input() cont1:ContratoCompleto;

    
    closeResult: string;
    activo1: string ;
    model: NgbDateStruct;
    personas:Persona[]
    convenios:Convenio[]
    categorias:categoria[]
    medios:MedioDePago[]
    id_Persona:string;
    id_Convenio:string;
    id_Categoria:string;
    id_MedioDePago:string;
    fecha:string;
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
    this.listarTodo();
    this.cont.activo =  this.cont1.activo;
    this.cont.fechaComienzo = this.cont1.fechaComienzo;
    this.cont.usuarioGenero = this.cont1.usuarioGenero;
    this.cont.id_Categoria = this.cont1.categoria.id;
    this.cont.id_Contrato = this.cont1.id;
    this.cont.id_Convenio = this.cont1.convenio.id;
    this.cont.id_MedioDePago = this.cont1.medioDePago.id;
    this.cont.id_Persona = this.cont1.socio.id;



    this.id_Convenio = this.cont1.convenio.id.toString();
    this.id_Categoria = this.cont1.categoria.id.toString();
    this.id_MedioDePago = this.cont1.medioDePago.id.toString();
    this.id_Persona = this.cont1.socio.id.toString();
    if(this.cont.activo == true){
      this.activo1 = "true"
    }
    else
      this.activo1 = "false"  
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

  EditarContrato(){
    if(this.model != null)
      this.cont.fechaComienzo = new Date(this.model.year,this.model.month,this.model.day);

    this.cont.id_Categoria = Number(this.id_Categoria);
    this.cont.id_Convenio = Number(this.id_Convenio);
    this.cont.id_MedioDePago = Number(this.id_MedioDePago);
    this.cont.id_Persona = Number(this.id_Persona);

    if(this.activo1 == "true"){
      this.cont.activo=true;
    }
    else{
      this.cont.activo = false;
    }

        this._contrato.EditarContrato(this.cont).subscribe(Response =>{
            this._recar.ngOnInit();
        })
  }

  

}