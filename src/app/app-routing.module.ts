import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'menu', component: MenuComponent },
  { path: 'menu-inicial', component: MenuInicialComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'home', component: HomeComponent},
  {path: 'equipe', component: EquipeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
