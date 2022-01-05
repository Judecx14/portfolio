import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isTop = true;
  options = [
    { name: 'Acerca', anchor: '#acerca' },
    { name: 'Habilidades', anchor: '#habilidades' },
    { name: 'Experiencia', anchor: '#experiencia' },
    { name: 'Contacto', anchor: '#contacto' },
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollPostitionToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPostitionToTop != 0) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }
}
