import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfrontosComponent } from '../modules/cadastros/confrontos/components/confrontos/confrontos.component';
import { JogadoresComponent } from '../modules/cadastros/jogadores/components/jogadores/jogadores.component';
import { TimesComponent } from '../modules/cadastros/times/components/times/times.component';

const routes: Routes = [
    {
        path: 'cadastros',
        children: [
            { path: 'jogadores', component: JogadoresComponent },
            { path: 'times', component: TimesComponent },
            { path: 'confrontos', component: ConfrontosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
