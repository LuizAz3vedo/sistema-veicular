import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarVeiculosComponent } from './components/listar-veiculos/listar-veiculos.component';
import { AdicionarVeiculosComponent } from './components/adicionar-veiculos/adicionar-veiculos.component';
import { BuscarVeiculosComponent } from './components/buscar-veiculos/buscar-veiculos.component';
import { EditarVeiculosComponent } from './components/editar-veiculos/editar-veiculos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'veiculos',
        component: ListarVeiculosComponent
    },
    {
        path: 'veiculos/adicionar',
        component: AdicionarVeiculosComponent
    },
    {
        path: 'veiculos/buscar',
        component: BuscarVeiculosComponent
    },
    {
        path: 'veiculos/editar/:id',
        component: EditarVeiculosComponent
    }
];
