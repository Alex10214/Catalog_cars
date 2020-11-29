import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageCatalogComponent} from './page-catalog.component';
import {GuardService} from '../shared/guards';
import {MatCardModule} from '@angular/material/card';
import {CardPostComponent} from './card-post/card-post.component';
import {MatButtonModule} from '@angular/material/button';

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
