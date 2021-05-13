import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticiasService } from 'src/app/services/noticias.service';
import { TablaNoticiasComponent } from '../tabla-noticias.component';

@Component({
  selector: 'app-borrar-noticia',
  templateUrl: './borrar-noticia.component.html',
  styleUrls: ['./borrar-noticia.component.css']
})
export class BorrarNoticiaComponent implements OnInit {

  constructor(private modalService: NgbModal, private _serv:NoticiasService,private _recarg:TablaNoticiasComponent) { }
  @Input() id:number;
  ngOnInit(): void {
  }

  openLg(content) {
    this.modalService.open(content);
  }
  borrar(){
    this._serv.BorarNoticia(this.id).subscribe(Response=>{
      this._recarg.ngOnInit();
    })
  }

}
