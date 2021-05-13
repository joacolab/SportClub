import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from 'src/app/other/interfaces';

@Component({
  selector: 'app-vermas-noticia',
  templateUrl: './vermas-noticia.component.html',
  styleUrls: ['./vermas-noticia.component.css']
})
export class VermasNoticiaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _noticia:NoticiasService ) { }



  id : number;
  @Input() not:Noticia;


  openLg(content) {
    this.modalService.open(content);
  }

ngOnInit(): void {
   
  }
}
