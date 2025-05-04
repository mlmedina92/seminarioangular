import { Component } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  // course seria un atributo de la clase CoursesListComponent, si fuera private no podria acceder el html
  // interfaces para definir TIPOS de datos mas complejos defino que tipos de atributos tendra un objeto
  // Defino una interfaz para crear nuestros cursos
  courses: Course[] = [
    {
      // es del tipo interface Course,tipe el objeto curso
      name: 'Curso nivel Inicial',
      duration: '1 mes',
      price: 35.0,
      quota: 10, //cupo
      image: 'img/course1.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      // es del tipo interface Course,tipe el objeto curso
      name: 'Curso nivel Intermedio',
      duration: '2 meses',
      price: 45.0,
      quota: 7, //cupo
      image: 'img/course1.jpeg',
      offer: true,
      quantity: 0,
    },
    {
      // es del tipo interface Course,tipe el objeto curso
      name: 'Curso nivel Experto',
      duration: '3 meses',
      price: 55.0,
      quota: 10, //cupo
      image: 'img/course1.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      // es del tipo interface Course,tipe el objeto curso
      name: 'Clases individuales',
      duration: '1 clase sola',
      price: 55.0,
      quota: 0, //cupo
      image: 'img/course1.jpeg',
      offer: false,
      quantity: 0,
    },
  ];
  // creo un evento click donde clicken en boton + quantity aumenta en 1
  upQuantity(course: Course): void {
    if (course.quota > course.quantity) {
      course.quantity++;
    }
  }

  downQuantity(course: Course): void {
    if (course.quantity > 0) {
      course.quantity--;
    }
  }

  onChangeQuantity(event: Event, course: Course): void {
    console.log(event); // toda la info del evento

  // casteo para poder acceder al value del input ya que esd e tipo text para operar lo necesito en numero 
  const input = event.target as HTMLInputElement;
  const valorIngresado = parseInt(input.value, 10);//10 indica que es numero decimal 

  // chequeo si el valor ingresado es mayor a cero y menor que el stock
  if (valorIngresado < 0) {
    // sino, si es menor a cero, asigna cero
    input.value = '0';//cambia el valor del input en la pantalla si ingreso un numero neg , escribe 0
    course.quantity = 0;
  } else if (valorIngresado > course.quota) {
    // sino, si es mayor al stock, asigna todo el stock
    input.value = course.quota.toString();
    course.quantity = course.quota;
  } else {
    // si sí, asigna el valor ingresado al value del input
    course.quantity = valorIngresado;
  }

  // console.log(event.key); // p saber qué letra apreté (esto solo sirve en eventos tipo keydown/keypress)
}
}
