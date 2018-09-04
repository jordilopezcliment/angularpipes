import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre2 = "fernAndo alberto heRRera jimenez";
  title = 'pipes';
  PI = 3.14159265;
  a: number = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }
 
  video = "4glm2hol68o";

  valorDePromesa = new Promise ( (resolve,reject) =>{
    setTimeout(() => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

}
