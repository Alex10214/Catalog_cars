import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PagePostComponent} from './page-post.component';
import {GuardService} from '../shared/guards';

@NgModule({
  declarations: [PagePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PagePostComponent, canActivate: [GuardService]},
    ])
  ],
  exports: [RouterModule]
})
export class PagePostModule { }
