import { Routes } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

import { ContatoComponent } from './Institucional/contato/contato.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { ListaProdutosComponent } from './Produtos/lista-produtos/lista-produtos.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'feature-data-binding', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutosComponent},
    {path: 'produto-detalhe/:id', component: ListaProdutosComponent},
];