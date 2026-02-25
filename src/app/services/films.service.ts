import { Injectable } from '@angular/core';
import { Film } from '../shared/models/film';
import { FILMS } from '../shared/models/des-films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[] = FILMS;
  constructor() { }
  getFilms(): Film[] {
    return this.films;
  }
  delete(index: number) {
    this.films.splice(index, 1);
  }
  ajouterFilm(nom: string, desc :string){
   var f:Film;
   var id ;
   if((this.films.length==0))
 id ='1';
 else
  id=Number(this.getFilms()[this.getFilms().length-1].id)+1 ;
  f= new Film();
  f.id=id.toString(); f.description=desc;f.nom=nom;f.descVisible=true;
   this.getFilms()[this.getFilms().length]=f; 
 }
}
