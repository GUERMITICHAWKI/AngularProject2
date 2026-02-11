import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ path: 'visiteur', loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule) }];
@NgModule({
imports: [RouterModule.forRoot(routes,
{preloadingStrategy: PreloadAllModules}
)],
exports: [RouterModule]
})
export class AppRoutingModule { }