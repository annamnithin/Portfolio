import { ContactComponent } from './profile/components/contact/contact.component';
import { EducationComponent } from './profile/components/education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent, IntroComponent } from '@profile/components';




const routes: Routes = [
  {
    path : 'projects',
    component: ProjectsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
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
