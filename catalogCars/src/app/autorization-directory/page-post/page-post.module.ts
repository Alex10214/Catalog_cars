import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PagePostComponent} from './page-post.component';
import {GuardService} from '../shared/guards';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardPostComponent} from '../page-catalog/card-post/card-post.component';

@NgModule({
  declarations: [PagePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PagePostComponent, canActivate: [GuardService], children: [
          {path: 'car/:id', component: CardPostComponent}
        ]}
    ]),
    MatCardModule,
    MatButtonModule
  ],
  exports: [RouterModule, PagePostComponent]
})
export class PagePostModule { }
