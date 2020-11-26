import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PageCatalogComponent } from './autorization-directory/page-catalog/page-catalog.component';
import { PageCreatePostComponent } from './autorization-directory/page-create-post/page-create-post.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePostComponent } from './autorization-directory/page-post/page-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCatalogComponent,
    PageCreatePostComponent,
    PageLoginComponent,
    PagePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
