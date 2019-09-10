import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then(mod => mod.VideosModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(mod => mod.CatalogModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
