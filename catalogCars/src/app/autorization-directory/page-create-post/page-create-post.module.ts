import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {PageCreatePostComponent} from './page-create-post.component';
import {GuardService} from '../shared/guards';

@NgModule({
  declarations: [PageCreatePostComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: PageCreatePostComponent, canActivate: [GuardService]},
        ]),
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ],
  exports: [RouterModule]
})
export class PageCreatePostModule { }
