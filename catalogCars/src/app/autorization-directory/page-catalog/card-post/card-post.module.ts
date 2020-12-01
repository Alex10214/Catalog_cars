import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card/card-module';
import {MatButtonModule} from '@angular/material/button';

import {CardPostComponent} from './card-post.component';
import {GuardService} from '../../shared/guards';

@NgModule({
  declarations: [ CardPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CardPostComponent, canActivate: [GuardService]},
    ]),
    MatCardModule,
    MatButtonModule,
  ],
  exports: [RouterModule, CardPostComponent]
})
export class PageCatalogModule { }
