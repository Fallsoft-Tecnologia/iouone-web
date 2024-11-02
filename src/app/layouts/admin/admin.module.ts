import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NavbarModule } from 'src/app/core/navbar/navbar.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule,
  ]
})
export class AdminModule { }
