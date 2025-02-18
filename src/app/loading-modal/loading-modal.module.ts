import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModalComponent } from './loading-modal.component';
import { LoadingSpinnerComponent } from '../loading/loading-spinner.component';

@NgModule({
  declarations: [
    LoadingModalComponent,
    LoadingSpinnerComponent
  ],  
  imports: [
    CommonModule  // Aqui só entram módulos, não componentes!
  ],
  exports: [
    LoadingModalComponent,
    LoadingSpinnerComponent
  ]  
})
export class LoadingModalModule {}
