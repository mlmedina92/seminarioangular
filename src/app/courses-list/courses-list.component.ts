import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {
// course seria un atributo de la clase CoursesListComponent, si fuera private no podria acceder el html 
  course={
   "name": "Curso Inicial",
   "duration": "1 mes",
   "price": 35.000,
    "quota": 10,  
    "image": "assets/img/course1.jpeg"
  }
}
