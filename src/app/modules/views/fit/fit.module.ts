import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitRoutingModule } from './fit-routing.module';
import { FitComponent } from './fit.component';
import { MatCardModule } from '@angular/material/card';
import { MusicCardComponent } from './music-card/music-card.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';



@NgModule({
  declarations: [
    FitComponent,
    MusicCardComponent,
    HeaderComponent,
    MusicCarouselComponent
  ],
  imports: [
    CommonModule,
    FitRoutingModule,
    MatCardModule,
  ]
})
export class FitModule { }
