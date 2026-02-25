import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lister-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lister-films.component.html',
  styleUrl: './lister-films.component.css'
})
export class ListerFilmsComponent implements OnInit {

  tabFilms: Film[] = [];

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.chargerFilms();
  }

  chargerFilms(): void {
    // On inverse l'ordre pour afficher le plus récent en premier
    this.tabFilms = this.filmsService.getFilms().slice().reverse();
  }

  confirmAndDelete(index: number): void {

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e91e63',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {

      if (result.isConfirmed) {

        this.filmsService.delete(index);

        Swal.fire({
          icon: 'success',
          title: 'Supprimé !',
          text: 'Le film a été supprimé avec succès.',
          confirmButtonColor: '#e91e63'
        });

        this.chargerFilms(); // Rafraîchir la liste
      }
    });
  }
}