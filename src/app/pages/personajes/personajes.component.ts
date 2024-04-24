import { Component, inject } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  comics: any[] = [];

  personajesServices = inject(PersonajesService);

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.personajesServices.getComics().subscribe({
      next: (data) => {
        this.comics = data.results;
      },
      error: (error) => {
        console.error('Error al obtener datos', error);
      }
    });
  }
}
