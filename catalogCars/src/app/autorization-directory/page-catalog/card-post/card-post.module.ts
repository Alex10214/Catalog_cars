import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {GuardService} from '../../shared/guards';
import {MatCardModule} from '@angular/material/card/card-module';
import {CardPostComponent} from './card-post.component';
import {MatButtonModule} from '@angular/material/button';

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
