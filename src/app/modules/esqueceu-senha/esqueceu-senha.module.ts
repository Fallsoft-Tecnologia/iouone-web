import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsqueceuSenhaComponent } from './esqueceu-senha.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EsqueceuSenhaRoutingModule } from './esqueceu-senha-routing.module';



@NgModule({
  declarations: [
    EsqueceuSenhaComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    EnterButtonModule,
    ReactiveFormsModule,
    EsqueceuSenhaRoutingModule,
  ]
})
export class EsqueceuSenhaModule { }
