import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public isMenuCollapsed = true;

  isloged(){
    if(localStorage.getItem("token") != "")
      return true
    else
      return false
  }

  logout(){
    localStorage.setItem("token","")
    this.router.navigate(['/'])
    console.log(localStorage.getItem("token"))
  }
  }
