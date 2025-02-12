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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './modules/views/views.module';
import { AdminModule } from './layouts/admin/admin.module';
import { CardModule } from './shared/components/card/card.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { HomeModule } from './modules/views/home/home.module';
import { DietaCompletaModule } from './shared/components/dieta-completa/dieta-completa.module';
import { VideoModalModule } from './shared/components/video-modal/video-modal.module';
import { FooterComponent } from './core/footer/footer.component';
import { FooterModule } from './core/footer/footer.module';
import { AuthModule } from './layouts/auth/auth.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { ReceitaCompletaModule } from './shared/components/receita-completa/receita-completa.module';

@NgModule({
  declarations: [
    AppComponent,
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
    FooterModule,
    AuthModule,
    ReceitaCompletaModule,
    DietaCompletaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
