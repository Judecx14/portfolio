import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'Ponle Stylo',
      description: 'Aplicación web que es un e - commerce con temática de baile, deportes y estilo de vida.',
      image: 'ponle-stylo.png',
      primaryColor: '#181818',
      secundaryColor: '#00FFFF',
      textColor: '#FFFFFF'
    },
    {
      name: "Children's World CDC, Inc",
      description: 'Pagina estática con el fin de publicitar sus servicios y ofrecer puestos de trabajo.',
      image: 'children-world-cdc.png',
      primaryColor: '#C3E5F1',
      secundaryColor: '#F45D5D',
      textColor: '#434343'
    },
    {
      name: 'Películas App',
      description: 'Aplicación móvil que muestra las películas más recientes y populares en cartelera.',
      image: 'peliculas-app.png',
      primaryColor: '#F44336',
      secundaryColor: '#434343',
      textColor: '#FFFFFF'
    },
    {
      name: 'Productos App',
      description: 'Aplicación móvil que permite registrar, editar, eliminar y ver productos registrados por usuarios.',
      image: 'productos-app.png',
      primaryColor: '#3F3F9C',
      secundaryColor: '#FFFF03',
      textColor: '#FFFFFF'
    },
    {
      name: 'Lector QR App',
      description: 'Aplicación móvil que permite mostrar coordenadas en un mapa o abrir un enlace a partir de un código QR.',
      image: 'lector-qr-app.png',
      primaryColor: '#2196F3',
      secundaryColor: '#434343',
      textColor: '#FFFFFF'
    },
    {
      name: 'News App',
      description: 'Aplicación móvil que muestra las noticias más recientes seccionadas por categorías.',
      image: 'news-app.png',
      primaryColor: '#303030',
      secundaryColor: '#4CAF50',
      textColor: '#FFFFFF'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
