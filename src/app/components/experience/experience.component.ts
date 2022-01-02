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
      image: 'string',
      primaryColor: '#181818',
      secundaryColor: '#00FFFF',
      textColor: '#FFFFFF'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
