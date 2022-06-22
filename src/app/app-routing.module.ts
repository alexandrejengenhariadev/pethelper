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
<<<<<<< HEAD
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
=======
import { EditOngComponent } from './components/pages/edit-ong/edit-ong.component';
>>>>>>> be49a3930e7252a872ebc9ae7d1bfeac1f7dee4d


const routes: Routes = [
  {path:'', component: HomeComponent  },
  {path:'administracao', component: AdministracaoComponent },
  {path:'banners',component:BannersComponent},
  {path:'combo',component:ComboComponent},
  {path:'ongs',component:OngsComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'ongs/new',component:NovaOngComponent},
<<<<<<< HEAD
  {path:'ongs/:id',component:OngComponent},
  {path: 'cadastro', component:CadastroComponent}
=======
  {path:'ongs/edit/:id',component:EditOngComponent},
  {path:'ongs/:id',component:OngComponent}
>>>>>>> be49a3930e7252a872ebc9ae7d1bfeac1f7dee4d
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
