import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OngsComponent } from './components/pages/ongs/ongs.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { ComboComponent } from './components/pages/combo/combo.component';
import { BannersComponent } from './components/pages/banners/banners.component';
import { AdministracaoComponent } from './components/pages/administracao/administracao.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OngsComponent,
    UsuariosComponent,
    ComboComponent,
    BannersComponent,
    AdministracaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
