import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProjetoComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    MatCardModule
  ]
})
export class ProjetoModule { }
