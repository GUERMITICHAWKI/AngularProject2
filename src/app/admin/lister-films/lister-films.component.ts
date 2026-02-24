import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';
import { CommonModule } from '@angular/common';

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
  supprimer(id: number) {
    this.filmsService.delete(id);
    this.tabFilms = this.filmsService.getFilms();
  }
}
