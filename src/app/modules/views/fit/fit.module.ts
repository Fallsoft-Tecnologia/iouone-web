import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitRoutingModule } from './fit-routing.module';
import { FitComponent } from './fit.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FitdanceCarouselComponent } from './fitdance-carousel/fitdance-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { VideoModalModule } from 'src/app/shared/components/video-modal/video-modal.module';



@NgModule({
  declarations: [
    FitComponent,
    HeaderComponent,
    FitdanceCarouselComponent,
  ],
  imports: [
    CommonModule,
    FitRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    VideoModalModule
  ]
})
export class FitModule { }
