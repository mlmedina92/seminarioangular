import { Component } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {
// course seria un atributo de la clase CoursesListComponent, si fuera private no podria acceder el html 
// interfaces para definir TIPOS de datos mas complejos defino que tipos de atributos tendra un objeto
// Defino una interfaz para crear nuestros cursos 
courses: Course[] =[
  { // es del tipo interface Course,tipe el objeto curso
    name: 'Curso nivel Inicial',
    duration: '1 mes',
    price: 35.000,
    quota: 10, //cupo 
    image: 'img/course1.jpeg',
    offer:false,
   },
   { // es del tipo interface Course,tipe el objeto curso
    name: 'Curso nivel Intermedio',
    duration: '2 meses',
    price: 45.000,
    quota: 7, //cupo 
    image: 'img/course1.jpeg',
    offer:true,
   },
   { // es del tipo interface Course,tipe el objeto curso
    name: 'Curso nivel Experto',
    duration: '3 meses',
    price: 55.000,
    quota: 10, //cupo 
    image: 'img/course1.jpeg',
    offer:false,

   },
   { // es del tipo interface Course,tipe el objeto curso
    name: 'Clases individuales',
    duration: '1 clase sola',
    price: 55.000,
    quota: 0, //cupo 
    image: 'img/course1.jpeg',
    offer:false,
   }
];

}
