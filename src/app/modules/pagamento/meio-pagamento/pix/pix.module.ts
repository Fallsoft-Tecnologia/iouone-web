import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { PixComponent } from './pix.component';
import { PixQrcodeComponent } from './pix-qrcode/pix-qrcode.component';



@NgModule({
  declarations: [
    PixComponent, 
    PixQrcodeComponent
  ],
  imports: [
    CommonModule,
    EnterButtonModule,
    MatButtonModule
  ]
})
export class PixModule { }
