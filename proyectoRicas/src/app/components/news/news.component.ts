import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/other/interfaces';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
     
  constructor(private _Lista:NoticiasService  ) {
    
   }
  
  ngOnInit( ): void {
    this.getNews();
  }
  noticias :Noticia[] ;
  getNews(){
    this._Lista.ListaNoticias().subscribe(Response =>{
      this.noticias = Response;
     

    })
   
  }

  datosNoticia(id:number){

    
  }

}
