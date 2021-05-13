import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/other/interfaces';

@Component({
  selector: 'app-tabla-noticias',
  templateUrl: './tabla-noticias.component.html',
  styleUrls: ['./tabla-noticias.component.css']
})
export class TablaNoticiasComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize;
  noticias:Noticia[];
  id1:number = 0;
  public isCollapsed = true;
  constructor(private _serv:NoticiasService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias(){
    this._serv.PaginarNoticias(this.id1,this.pageSize).subscribe(response=>{
      this.noticias = response.list;
      this.collectionSize = response.size
    })
  }

  onPager(event:number){
    this.page = event;
    this.id1 = (this.page*this.pageSize)-(this.pageSize);
    console.log(this.id1,this.pageSize);
    this.getNoticias();

  }


}
