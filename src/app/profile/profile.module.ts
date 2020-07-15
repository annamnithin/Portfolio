import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';

import * as profileComponents from './components';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions =  {
  scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};

const routes: Routes = [
];

@NgModule({
  declarations: [...profileComponents.components],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FormsModule,
    NgbModule,
    MatGridListModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [
   ...profileComponents.components
  ]
})
export class ProfileModule { }
