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
import { DesincharComponent } from './modules/views/desinchar/desinchar.component';
import { CardapioComponent } from './modules/views/cardapio/cardapio.component';
import { CalculadoraComponent } from './modules/views/calculadora/calculadora.component';
import { GorduraComponent } from './modules/views/gordura/gordura.component';
import { MarmitaComponent } from './modules/views/marmita/marmita.component';
import { DetoxComponent } from './modules/views/detox/detox.component';

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
    DesincharComponent,
    CardapioComponent,
    CalculadoraComponent,
    GorduraComponent,
    MarmitaComponent,
    DetoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CadastroModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    PagamentoModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
