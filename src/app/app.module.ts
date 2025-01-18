import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';

import { AuthComponent } from './layouts/auth/auth.component';
import { EnterButtonModule } from './shared/components/buttons/enter-button/enter-button.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './modules/views/views.module';
import { AdminModule } from './layouts/admin/admin.module';
import { CardModule } from './shared/components/card/card.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { HomeModule } from './modules/views/home/home.module';
import { DietaCompletaModule } from './shared/components/dieta-completa/dieta-completa.module';
import { VideoModalModule } from './shared/components/video-modal/video-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
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
    HomeModule,
    DietaCompletaModule,
    VideoModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
