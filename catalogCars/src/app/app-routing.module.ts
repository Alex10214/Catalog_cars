import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageCatalogComponent} from './autorization-directory/page-catalog/page-catalog.component';
import {PageCreatePostComponent} from './autorization-directory/page-create-post/page-create-post.component';
import {PagePostComponent} from './autorization-directory/page-post/page-post.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: PageLoginComponent, pathMatch: 'full'},
    {path: 'page-catalog', component: PageCatalogComponent},
    {path: 'page-create-post', component: PageCreatePostComponent},
    {path: 'page-post', component: PagePostComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
