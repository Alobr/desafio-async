import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetPageComponent } from './greet-page/greet-page.component';
import { SharedModule } from '../shared/shared.module';
import { AnimePagesComponent } from './anime-pages/anime-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GreetPageComponent,
    AnimePagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    GreetPageComponent,
    AnimePagesComponent,
  ]
})
export class PagesModule { }