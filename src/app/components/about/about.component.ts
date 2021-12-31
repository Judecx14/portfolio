import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  titles = [
    {
      name: 'Técnico en informática',
      location: 'Conalep 255',
      year: '2016 - 2019',
    },
    {
      name: 'Técnico en Desarrollo de Software Multiplataforma',
      location: 'UTT',
      year: '2019 - 2021',
    },
    {
      name: 'Ingeniería en Desarrollo de Software',
      location: 'UTT',
      year: '2021 - En proceso',
    },
  ];
  	
  values = [
    {
      title: 'Responsabilidad',
      image: 'responsibility.svg'
    },
    {
      title: 'Disciplina',
      image: 'discipline.svg'
    },
    {
      title: 'Compromiso',
      image: 'commitment.svg'
    },
    {
      title: 'Aprendizaje',
      image: 'learning.svg'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
