import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-film',
  standalone: true,
  imports: [],
  templateUrl: './ajouter-film.component.html',
  styleUrl: './ajouter-film.component.css'
})
export class AjouterFilmComponent {
  constructor(private filmsService: FilmsService, private route: Router) { }
  ajouterFilm(nom: string, desc: string) {

  if (!nom || !desc) {
    Swal.fire({
      icon: 'warning',
      title: 'Champs obligatoires',
      text: 'Veuillez remplir tous les champs !'
    });
    return;
  }

  this.filmsService.ajouterFilm(nom, desc);

  Swal.fire({
    icon: 'success',
    title: 'Film ajouté !',
    text: 'Le film a été ajouté avec succès.',
    confirmButtonColor: '#e91e63' // bouton rose 😉
  }).then(() => {
    this.route.navigate(['/admin/lister-films']);
  });

}

}
