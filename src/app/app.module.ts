import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { OngFormComponent } from './components/ong-form/ong-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NovaOngComponent } from './components/pages/nova-ong/nova-ong.component';
import { OngComponent } from './components/pages/ong/ong.component';
<<<<<<< HEAD
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
=======
import { EditOngComponent } from './components/pages/edit-ong/edit-ong.component';
>>>>>>> be49a3930e7252a872ebc9ae7d1bfeac1f7dee4d




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
    HomeComponent,
    OngFormComponent,
    MessagesComponent,
    NovaOngComponent,
    OngComponent,
<<<<<<< HEAD
    CadastroComponent,
=======
    EditOngComponent,
>>>>>>> be49a3930e7252a872ebc9ae7d1bfeac1f7dee4d

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
