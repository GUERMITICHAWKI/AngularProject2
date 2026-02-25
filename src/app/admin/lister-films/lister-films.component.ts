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
export class ListerFilmsComponent {
  tabFilms: Film[] = [];
  constructor(private filmsService: FilmsService) { }
  ngOnInit(): void {
    this.tabFilms = this.filmsService.getFilms();
  }
  confirmAndDelete(index: number): void {
      // Show SweetAlert2 confirmation dialog
      Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: 'Vous ne pourrez pas revenir en arrière!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer!',
        cancelButtonText: 'Non, annuler!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.supprimer(index);  // Delete the film if confirmed
          Swal.fire('Supprimé!', 'Le film a été supprimé.', 'success');  // Show success message
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Annulé', 'Le film est toujours là :)', 'error');  // Show cancel message
        }
      });
    }
  supprimer(id: number) {
    this.filmsService.delete(id);
    this.tabFilms = this.filmsService.getFilms();
  }
}
