import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadoresComponent } from '../modules/cadastros/jogadores/components/jogadores/jogadores.component';

const routes: Routes = [
    {
        path: 'cadastros',
        children: [
            { path: 'jogadores', component: JogadoresComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
