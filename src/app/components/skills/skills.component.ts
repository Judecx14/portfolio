import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.';

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
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
        { id: 'icon-typescript', path: 'typescript.svg', title: 'TypeScript' },
        { id: 'icon-dart', path: 'dart.svg', title: 'Dart' },
        { id: 'icon-html', path: 'html.svg', title: 'HTML' },
        { id: 'icon-css', path: 'css.svg', title: 'CSS' },
        { id: 'icon-angular', path: 'angular.svg', title: 'Angular' },
        { id: 'icon-vuejs', path: 'vuejs.svg', title: 'Vue.JS' },
        { id: 'icon-flutter', path: 'flutter.svg', title: 'Flutter' },
        { id: 'icon-tailwindcss', path: 'tailwindcss.svg', title: 'TailwindCSS' },
        { id: 'icon-bootstrap', path: 'bootstrap.svg', title: 'Bootstrap' }
      ],
    },
    {
      id: 'container-backend-skills',
      title: 'Tecnologías backend.',
      description:
        'Estas son las tecnologías backend con las que he trabajdo para el desarrollo backend.',
      images: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
        { id: 'icon-typescript', path: 'typescript.svg', title: 'TypeScript' },
        {id: 'icon-php', path:'php.svg', title: 'PHP'},
        {id: 'icon-mongodb', path:'mongodb.svg', title: 'MongoDB'},
        {id: 'icon-mysql', path:'mysql.svg', title: 'MySQL'},
        {id: 'icon-adonis', path:'adonis.svg', title: 'Adonis'},
        {id: 'icon-laravel', path:'laravel.svg', title: 'Laravel'},
        {id: 'icon-digitalocean', path:'digitalocean.svg', title: 'DigitalOcean'},
      ],
    },
    {
      id: 'container-design-skills',
      title: 'Diseño y edición.',
      description:
        'Utilizo estas tecnologías para el desarrollo y creación de la experiencia de usuario.',
      images: [
        {id: 'icon-adobe-photoshop', path:'adobe-photoshop.svg', title: 'Adobe Photoshop'},
        {id: 'icon-adobe-illustrator', path:'adobe-illustrator.svg', title: 'Adobe Illustrator'},
        {id: 'icon-adobe-xd', path:'adobe-xd.svg', title: 'Adobe XD'},
        {id: 'icon-figma', path:'figma.svg', title: 'Figma'},
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}


