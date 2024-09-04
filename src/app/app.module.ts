import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NutricionistaComponent } from './modules/views/nutricionista/nutricionista.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DietasComponent } from './modules/views/dietas/dietas.component';
import { TreinoComponent } from './modules/views/treino/treino.component';
import { ExerciciosComponent } from './modules/views/exercicios/exercicios.component';
import { FitComponent } from './modules/views/fit/fit.component';
import { CardapioComponent } from './modules/views/cardapio/cardapio.component';
import { CalculadoraComponent } from './modules/views/calculadora/calculadora.component';
import { MarmitaComponent } from './modules/views/marmita/marmita.component';
import { DetoxComponent } from './modules/views/detox/detox.component';
import { CardComponent } from './shared/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChasComponent } from './modules/views/chas/chas.component';
import { ProjetoComponent } from './modules/views/projeto/projeto.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { CadastroRouterModule } from './modules/cadastro/cadastro-router/cadastro-router.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { EnterButtonModule } from './shared/buttons/enter-button/enter-button.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NutricionistaComponent,
    SidebarComponent,
    DietasComponent,
    TreinoComponent,
    ExerciciosComponent,
    FitComponent,
    ChasComponent,
    CardapioComponent,
    CalculadoraComponent,
    MarmitaComponent,
    DetoxComponent,
    CardComponent,
    ChasComponent,
    ProjetoComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CadastroModule,
    CadastroRouterModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    PagamentoModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    EnterButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
