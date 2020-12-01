import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {PageLoginComponent} from './page-login/page-login.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: PageLoginComponent, pathMatch: 'full'},
    {path: 'catalog', loadChildren: () => import('./autorization-directory/page-catalog/page-catalog.module')
        .then(m => m.PageCatalogModule)},
    {path: 'create', loadChildren: () => import('./autorization-directory/page-create-post/page-create-post.module')
        .then(m => m.PageCreatePostModule)},
    {path: 'onePost', loadChildren: () => import('./autorization-directory/page-post/page-post.module')
        .then(m => m.PagePostModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

