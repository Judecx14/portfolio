import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      id: 'container-frontend-skills',
      title: 'Tecnologías frontend web – móvil.',
      descrtiption:
        'Actualmente estas son las tecnologías frontend que conozco y uso para el desarrollo de proyectos.',
      images: [
        'javascript.svg',
        'typescript.svg',
        'dart.svg',
        'html.svg',
        'css.svg',
        'angular.svg',
        'flutter.svg',
        'tailwindcss.svg',
        'bootstrap.svg',
      ],
    },
    {
      id: 'container-backend-skills',
      title: 'Tecnologías backend.',
      descrtiption:
        'Son estas las tecnologías backend que utilizo y conozco para el desarrollo backend.',
      images: [
        'javascript.svg',
        'typescript.svg',
        'php.svg',
        'mongodb.svg',
        'mysql.svg',
        'adonis.svg',
        'laravel.svg',
      ],
    },
    {
      id: 'container-design-skills',
      title: 'Diseño y edición.',
      descrtiption:
        'Utilizo estas tecnologías para el desarrollo y creación de la experiencia de usuario.',
      images: [
        'adobe-photoshop.svg',
        'adobe-illustrator.svg',
        'adobe-xd.svg',
        'figma.svg',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
