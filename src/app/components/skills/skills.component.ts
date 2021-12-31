import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  
  skills: Skill[] = [
    {
      id: 'container-frontend-skills',
      title: 'Tecnologías frontend web – móvil.',
      description:
        'Actualmente estas son las tecnologías frontend que conozco y uso para el desarrollo de proyectos.',
      images: [
        { id: 'icon-javascript', path: 'javascript.svg' },
        { id: 'icon-typescript', path: 'typescript.svg' },
        { id: 'icon-dart', path: 'dart.svg' },
        { id: 'icon-html', path: 'html.svg' },
        { id: 'icon-css', path: 'css.svg' },
        { id: 'icon-angular', path: 'angular.svg' },
        { id: 'icon-flutter', path: 'flutter.svg' },
        { id: 'icon-tailwindcss', path: 'tailwindcss.svg' },
        { id: 'icon-bootstrap', path: 'bootstrap.svg' }
      ],
    },
    {
      id: 'container-backend-skills',
      title: 'Tecnologías backend.',
      description:
        'Son estas las tecnologías backend que utilizo y conozco para el desarrollo backend.',
      images: [
        { id: 'icon-javascript', path: 'javascript.svg' },
        { id: 'icon-typescript', path: 'typescript.svg' },
        {id: 'icon-php', path:'php.svg'},
        {id: 'icon-mongodb', path:'mongodb.svg'},
        {id: 'icon-mysql', path:'mysql.svg'},
        {id: 'icon-adonis', path:'adonis.svg'},
        {id: 'icon-laravel', path:'laravel.svg'},
      ],
    },
    {
      id: 'container-design-skills',
      title: 'Diseño y edición.',
      description:
        'Utilizo estas tecnologías para el desarrollo y creación de la experiencia de usuario.',
      images: [
        {id: 'icon-adobe-photoshop', path:'adobe-photoshop.svg'},
        {id: 'icon-adobe-illustrator', path:'adobe-illustrator.svg'},
        {id: 'icon-adobe-xd', path:'adobe-xd.svg'},
        {id: 'icon-figma', path:'figma.svg'},
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface Skill {
  id: string
  title: string
  description: string
  images: Image[]
}

export interface Image {
  id: string
  path: string
}
