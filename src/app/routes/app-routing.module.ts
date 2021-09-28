import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../layouts/admin/admin.component';
import { AuthComponent } from '../layouts/auth/auth.component';
import { EmptyComponent } from '../layouts/empty/empty.component';
import { AuthGuard } from '../modules/auth/guards/auth-guard';
import { LoginComponent } from '../modules/auth/login/components/login/login.component';
import { ConfrontosComponent } from '../modules/cadastros/confrontos/components/confrontos/confrontos.component';
import { JogadoresComponent } from '../modules/cadastros/jogadores/components/jogadores/jogadores.component';
import { TimesComponent } from '../modules/cadastros/times/components/times/times.component';
import { InstitucionalComponent } from '../modules/institucional/components/institucional/institucional.component';

const routes: Routes = [
    {
        path: '',
        component: EmptyComponent,
        children: [
            { path: '', component: InstitucionalComponent }
        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'auth', component: LoginComponent }
        ]
    },
    {
        path: 'cadastros',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'jogadores', component: JogadoresComponent },
            { path: 'times', component: TimesComponent },
            { path: 'confrontos', component: ConfrontosComponent, data: { podeEditar: true } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
