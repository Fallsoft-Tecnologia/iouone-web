import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';
import { NavbarComponent } from './core/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './shared/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthComponent } from './layouts/auth/auth.component';
import { CadastroRouterModule } from './modules/cadastro/cadastro-router/cadastro-router.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { EnterButtonModule } from './shared/components/buttons/enter-button/enter-button.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './modules/views/views.module';
import { AdminModule } from './layouts/admin/admin.module';
import { CardModule } from './shared/components/card/card.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { HomeModule } from './modules/views/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CadastroModule,
    CardModule,
    BrowserAnimationsModule,
    PagamentoModule,
    EnterButtonModule,
    HttpClientModule,
    SidebarModule,
    ViewsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
