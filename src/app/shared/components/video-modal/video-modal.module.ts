import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { VideoModalComponent } from './video-modal.component';



@NgModule({
  declarations: [
    VideoModalComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoModalComponent
  ]
})
export class VideoModalModule { }
