import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';

const routes: Routes = [{ path: '', component: AdminComponent, children: [
{path: 'liste-films', component: ListerFilmsComponent },
{path: 'add-film', component: AjouterFilmComponent},
] ,}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
