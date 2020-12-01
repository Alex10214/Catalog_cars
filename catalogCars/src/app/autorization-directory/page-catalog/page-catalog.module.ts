import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {PageCatalogComponent} from './page-catalog.component';
import {MatButtonModule} from '@angular/material/button';

import {GuardService} from '../shared/guards';
import {CardPostComponent} from './card-post/card-post.component';

@NgModule({
  declarations: [PageCatalogComponent, CardPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PageCatalogComponent, canActivate: [GuardService]},
    ]),
    MatCardModule,
    MatButtonModule,
  ],
  exports: [RouterModule, PageCatalogComponent]
})
export class PageCatalogModule { }
