import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageCatalogComponent} from './page-catalog.component';
import {GuardService} from '../shared/guards';

@NgModule({
  declarations: [PageCatalogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PageCatalogComponent, canActivate: [GuardService]},
    ])
  ],
  exports: [RouterModule]
})
export class PageCatalogModule { }
