import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerComponent } from './page/ver/ver.component';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { BrowseComponent } from './page/browse/browse.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'ver/:id_anime/:episodeCount',
    component:VerComponent
  },
  {
    path:'browse',
    component:BrowseComponent
  },
  {
    path:'**',
    component:NotFoundComponent,
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
