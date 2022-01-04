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
      id: 'ponle-stylo-modal',
      isWeb: true,
      name: 'Ponle Stylo',
      synthesis:
        'Aplicación web que es un e - commerce con temática de baile, deportes y estilo de vida.',
      image: 'ponle-stylo.png',
      primaryColor: '#181818',
      secundaryColor: '#00FFFF',
      textColor: '#FFFFFF',
      description:
        'Este proyecto fue realizado para la empresa Ponle Stylo que consiste en un e-commerce en donde se venden cursos de baile y productos relacionados a la marca, además de publicitar eventos que la empresa realiza eventualmente. La aplicación web fue desarrollada por un equipo conformado de cuatro integrantes, que fueron distribuidos en el desarrollo frontend y backend. Personalmente estuve involucrado activamente en el desarrollo frontend. Se me asigno desarrollar el registro e inicio de sesión de usuarios, la protección de rutas, el apartado de cursos, cursos adquiridos y panel administrativo de cursos. Adicionalmente participe activamente en actividades como la definición del modelo entidad relación de la base de datos y el diseño de la experiencia de usuario.',
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
    {
      id: 'cdc-modal',
      isWeb: true,
      name: "Children's World CDC, Inc",
      synthesis:
        'Pagina estática con el fin de publicitar sus servicios y ofrecer puestos de trabajo.',
      image: 'children-world-cdc.png',
      primaryColor: '#C3E5F1',
      secundaryColor: '#F45D5D',
      textColor: '#434343',
      description: "Children 's World CDC, Inc es una guardería ubicada Alamogordo, ciudad de Nuevo México, Estados Unidos. Dicha guardería solicito el desarrollo de una página web para publicitar sus servicios y ofrecer puestos de trabajo. Este proyecto consiste en una página web estática, dicha página web esta seccionada por apartados. El proyecto fue desarrollado por un equipo conformado de cuatro personas, a cada integrante se les asignó un o dos aparatados de la página web. Personalmente se me asignó únicamente el desarrollo del apartado denominado inicio, así como el de los componentes header y el footer.",
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
    {
      id: 'peliculas-app-modal',
      isWeb: false,
      name: 'Películas App',
      synthesis:
        'Aplicación móvil que muestra las películas más recientes y populares en cartelera.',
      image: 'peliculas-app.png',
      primaryColor: '#F44336',
      secundaryColor: '#434343',
      textColor: '#FFFFFF',
      description: 'Este proyecto fue realizado con la intención de mostrar las peliculas más recientes y populares que hay en cartelera. La aplicación móvil fue desarrollada con el SDK propietario de Google denominado Flutter. Para el desarrollo de la aplicación se hizo uso de la API REST The Movie Database para obtener la información de cada película. La funcionalidad de la aplicación va desde mostrar únicamente el poster de las películas más recientes, así como mostrar sus detalles hasta un buscador de películas o series.',
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
    {
      id: 'productos-app-modal',
      isWeb: false,
      name: 'Productos App',
      synthesis:
        'Aplicación móvil que permite registrar, editar, eliminar y ver productos registrados por usuarios.',
      image: 'productos-app.png',
      primaryColor: '#3F3F9C',
      secundaryColor: '#FFFF03',
      textColor: '#FFFFFF',
      description: 'La aplicación fue de desarrolla con el fin de crear un CRUD haciendo uso de Firebase, Cloudinary y Flutter. La aplicación permite registrar o iniciar sesión a un usuario y que el mismo cree, edite o elimine un producto. La funcionalidad de la aplicación permite que todos los usuarios registrados tengan acceso a lista de productos creados y que puedan editar o eliminar los productos. Cabe mencionar que al momento de crear un producto se le da la posibilidad al usuario de colocar una imagen haciendo uso de la cámara del dispositivo.',
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
    {
      id: 'lector-qr-app-modal', 
      isWeb: false,
      name: 'Lector QR App',
      synthesis:
        'Aplicación móvil que permite mostrar coordenadas en un mapa o abrir un enlace a partir de un código QR.',
      image: 'lector-qr-app.png',
      primaryColor: '#2196F3',
      secundaryColor: '#434343',
      textColor: '#FFFFFF',
      description: 'Este proyecto consiste en una aplicación móvil que permite leer códigos QR y a partir del resultado de la lectura determina si mostrar un mapa en caso de que el resultado sean unas coordenadas o abrir el navegador en caso que el resultado sea un enlace. Así mismo la aplicación va guardando los resultados de las lecturas, dando la posibilidad de acceder nuevamente si se desea o eliminar si es lo que se busca. La aplicación móvil fue desarrollada con Flutter, haciendo uso de SQLite para guardar los resultados de las lecturas e implementando Google Maps para mostrar las coordenadas.',
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
    {
      id: 'news-app-modal',
      isWeb: false,
      name: 'News App',
      synthesis:
        'Aplicación móvil que muestra las noticias más recientes seccionadas por categorías.',
      image: 'news-app.png',
      primaryColor: '#303030',
      secundaryColor: '#4CAF50',
      textColor: '#FFFFFF',
      description: 'La aplicación fue desarrollada con la intención de mostrar las noticias más recientes de un país relacionadas a diferentes tópicos. Para el desarrollo de la aplicación móvil se hizo uso de la API REST News API de esta manera se obtienen las noticias. La aplicación permite clasificar las noticias por categorías, mostrando así únicamente noticias de la categoría seleccionada. Cabe mencionar que si se desea más detalles de la alguna noticia la aplicación permite que se acceda a la nota original mediante un botón abriendo el enlace en el navegador.',
      technologies: [
        { id: 'icon-javascript', path: 'javascript.svg', title: 'JavaScript' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
