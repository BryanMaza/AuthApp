import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  logeado: boolean = false ;
  constructor(@Inject(DOCUMENT) public document: Document, public _auth: AuthService) { 
    
    this._auth.isAuthenticated$.subscribe(
      data => {
        this.logeado = data;
      }
    );
   
  }


  ngOnInit(): void {

 
    
  }


 

}
