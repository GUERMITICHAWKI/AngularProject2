import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FILMS } from '../../shared/models/des-films';
import { Film } from '../../shared/models/film';

@Component({
  selector: 'app-home-visiteur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-visiteur.component.html',
  styleUrl: './home-visiteur.component.css'
})
export class HomeVisiteurComponent implements OnInit {
  tabFilms: Film[] = FILMS;
  constructor() { }
  ngOnInit(): void {
  }
  affiche(f: Film) {
    f.descVisible=true;
  }
  cacher(f: Film) {
    f.descVisible=false;
  }
}
