import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {

  welcomeMessage: string = `
  Hola! <br>
  Soy Cesar Hernández <br>
  Desarrollador de
  <span 
    style=
    "
      background: 
      -webkit-linear-gradient(45deg, var(--blue), var(--aqua));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    "
  >
    Software
  </span>
  `;

  wordMobile: string = `
  <span 
    style=
    "
      background: 
      -webkit-linear-gradient(45deg, var(--orange), var(--yellow));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    "
  >
    Mobile
  </span>
  `;

  wordWeb: string = `
  <span 
    style=
    "
      background: 
      -webkit-linear-gradient(45deg, var(--purple), var(--pink));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    "
  >
    Web
  </span>
  `;

  wordSoftware: string = `
  de
  <span 
    style=
    "
      background: 
      -webkit-linear-gradient(45deg, var(--blue), var(--aqua));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    "
  >
    Software
  </span>
  `;

  constructor() {}

  ngOnInit(): void {
    const elementWelcomeMessage = document.querySelector('#welcome-message');
    var typewriter = new Typewriter(elementWelcomeMessage, {
      loop: false,
      delay: 50,
    });
    typewriter
      .typeString(this.welcomeMessage)
      .pauseFor(300)
      .deleteChars(25)
      .typeString(this.wordMobile)
      .pauseFor(300)
      .deleteChars(13)
      .typeString(this.wordWeb)
      .pauseFor(300)
      .deleteChars(13)
      .typeString(this.wordSoftware)
      .start();
  }
}
