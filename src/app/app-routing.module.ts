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
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { CombosComponent } from './components/pages/combos/combos.component';
import { NovoComboComponent } from './components/pages/novo-combo/novo-combo.component';
import { EditOngComponent } from './components/pages/edit-ong/edit-ong.component';
import { EditComboComponent } from './components/pages/edit-combo/edit-combo.component';




const routes: Routes = [
  {path:'', component: HomeComponent  },
  {path:'administracao', component: AdministracaoComponent },
  {path:'banners',component:BannersComponent},
  
  
  {path:'usuarios',component:UsuariosComponent},
  {path:'cadastro', component:CadastroComponent},  
  

  {path:'combos',component:CombosComponent},
  {path:'combos/new',component:NovoComboComponent},
  {path:'combos/edit/:id', component:EditComboComponent},
  {path:'combos/:id',component:ComboComponent},

  {path:'ongs',component:OngsComponent},
  {path:'ongs/new',component:NovaOngComponent},
  {path:'ongs/edit/:id',component:EditOngComponent},
  {path:'ongs/:id',component:OngComponent}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
