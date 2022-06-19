import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngFormComponent } from './components/ong-form/ong-form.component';
import { AdministracaoComponent } from './components/pages/administracao/administracao.component';
import { BannersComponent } from './components/pages/banners/banners.component';
import { ComboComponent } from './components/pages/combo/combo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { OngsComponent } from './components/pages/ongs/ongs.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovaOngComponent } from './components/pages/nova-ong/nova-ong.component';
import { OngComponent } from './components/pages/ong/ong.component';


const routes: Routes = [
  {path:'', component: HomeComponent  },
  {path:'administracao', component: AdministracaoComponent },
  {path:'banners',component:BannersComponent},
  {path:'combo',component:ComboComponent},
  {path:'ongs',component:OngsComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'ongs/new',component:NovaOngComponent},
  {path:'ongs/:id',component:OngComponent}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
