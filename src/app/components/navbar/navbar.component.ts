import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options = [
    {name: "Acerca", anchor: "#"},
    {name: "Habilidades", anchor: "#"},
    {name: "Experiencia", anchor: "#"},
    {name: "Contacto", anchor: "#"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
