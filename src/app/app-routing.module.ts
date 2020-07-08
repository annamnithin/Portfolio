import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent, IntroComponent } from '@profile/components';




const routes: Routes = [
  {
    path : 'projects',
    component: ProjectsComponent
  },
  {
    path : '',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
